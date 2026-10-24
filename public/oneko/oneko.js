(function oneko() {
  // Prevent duplicate instances
  const existingNeko = document.getElementById("oneko");
  if (existingNeko) {
    existingNeko.remove();
  }
  if (window.onekoInterval) {
    clearInterval(window.onekoInterval);
  }

  // Detect mobile or touch-primary devices: do not run oneko on mobile/touch screens
  function isMobileOrTouch() {
    if (typeof window === "undefined") return false;
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const isSmall = window.innerWidth < 768;
    return isTouch || isSmall;
  }

  // If mobile or touch device, exit cleanly so pet never interferes with mobile browsing
  if (isMobileOrTouch()) {
    return;
  }

  const nekoEl = document.createElement("div");
  let nekoPosX = 32,
    nekoPosY = 32,
    mousePosX = 64,
    mousePosY = 64,
    frameCount = 0,
    idleTime = 0,
    idleAnimation = null,
    idleAnimationFrame = 0,
    isSleeping = false,
    isHidden = false,
    variant = "dog";

  // Check stored variant or default to dog
  try {
    const stored = localStorage.getItem("oneko:variant");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (typeof parsed === "string") {
        variant = parsed;
      }
    }
  } catch {
    variant = "dog";
  }

  const nekoSpeed = 10;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  function setRoute(pathname) {
    // Hide completely on resume page
    if (pathname && pathname.startsWith("/resume")) {
      isHidden = true;
      nekoEl.style.display = "none";
      nekoEl.style.visibility = "hidden";
    } else {
      isHidden = false;
      nekoEl.style.display = "block";
      nekoEl.style.visibility = "visible";
    }
  }

  function create() {
    nekoEl.id = "oneko";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none"; // Never block user clicks or selections
    nekoEl.style.backgroundImage = `url('/oneko/oneko-${variant}.gif')`;
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.zIndex = "9999";
    nekoEl.setAttribute("aria-hidden", "true");

    document.body.appendChild(nekoEl);

    if (typeof window !== "undefined" && window.location) {
      setRoute(window.location.pathname);
    }

    window.addEventListener("mousemove", (e) => {
      if (isHidden) return;
      mousePosX = e.clientX;
      mousePosY = e.clientY;
    });

    window.addEventListener("oneko:route-change", (e) => {
      setRoute(e.detail);
    });

    window.addEventListener("oneko:set-variant", (e) => {
      try {
        const detail = e.detail;
        if (typeof detail === "string") {
          variant = detail;
          localStorage.setItem("oneko:variant", JSON.stringify(variant));
          nekoEl.style.backgroundImage = `url('/oneko/oneko-${variant}.gif')`;
        }
      } catch {}
    });

    window.onekoInterval = setInterval(frame, 100);
  }

  function getSprite(name, frameIdx) {
    const list = spriteSets[name] || spriteSets.idle;
    return list[frameIdx % list.length];
  }

  function setSprite(name, frameIdx) {
    const sprite = getSprite(name, frameIdx);
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;

    // Trigger idle animations after being stationary for a bit
    if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation == null) {
      const availableAnimations = ["sleeping", "scratchSelf"];
      if (nekoPosX < 32) availableAnimations.push("scratchWallW");
      if (nekoPosY < 32) availableAnimations.push("scratchWallN");
      if (nekoPosX > window.innerWidth - 32) availableAnimations.push("scratchWallE");
      if (nekoPosY > window.innerHeight - 32) availableAnimations.push("scratchWallS");
      idleAnimation = availableAnimations[Math.floor(Math.random() * availableAnimations.length)];
    }

    if (isSleeping) {
      idleAnimation = "sleeping";
    }

    switch (idleAnimation) {
      case "sleeping":
        if (idleAnimationFrame < 8) {
          setSprite("tired", 0);
          break;
        }
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192 && !isSleeping) {
          resetIdleAnimation();
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) {
          resetIdleAnimation();
        }
        break;
      default:
        setSprite("idle", 0);
        return;
    }
    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;

    if (isHidden) return;

    const diffX = nekoPosX - mousePosX;
    const diffY = nekoPosY - mousePosY;
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);

    // Stop within 48px of cursor and sit peacefully
    if (distance < nekoSpeed || distance < 48) {
      idle();
      return;
    }

    idleAnimation = null;
    idleAnimationFrame = 0;

    // Alert posture when cursor first starts moving after being idle
    if (idleTime > 1) {
      setSprite("alert", 0);
      idleTime = Math.min(idleTime, 4);
      idleTime -= 1;
      return;
    }

    const useDist = distance > 1e-6 ? distance : 1;
    let direction = "";
    if (diffY / useDist > 0.5) direction += "N";
    else if (diffY / useDist < -0.5) direction += "S";

    if (diffX / useDist > 0.5) direction += "W";
    else if (diffX / useDist < -0.5) direction += "E";

    if (!direction) direction = "idle";
    setSprite(direction, frameCount);

    nekoPosX -= (diffX / useDist) * nekoSpeed;
    nekoPosY -= (diffY / useDist) * nekoSpeed;

    nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
    nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
  }

  // Create pet when DOM is ready
  if (document.readyState === "complete" || document.readyState === "interactive") {
    create();
  } else {
    document.addEventListener("DOMContentLoaded", create);
  }
})();
