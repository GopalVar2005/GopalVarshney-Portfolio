export interface Skill {
    name: string
    icon: string
    invertInDark: boolean
}

export interface TechCategory {
    id: string
    name: string
    skills: Skill[]
}

export const techCategories: TechCategory[] = [
    {
        id: "01",
        name: "languages",
        skills: [
            {
                name: "Java",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                invertInDark: false,
            },
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                invertInDark: false,
            },
            {
                name: "SQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                invertInDark: false,
            },
        ],
    },
    {
        id: "02",
        name: "frontend",
        skills: [
            {
                name: "React.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                invertInDark: false,
            },
            {
                name: "Tailwind CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                invertInDark: false,
            },
            {
                name: "HTML5 / CSS3",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                invertInDark: false,
            },
        ],
    },
    {
        id: "03",
        name: "backend & database",
        skills: [
            {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                invertInDark: false,
            },
            {
                name: "Express.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                invertInDark: true,
            },
            {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                invertInDark: false,
            },
            {
                name: "Mongoose",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongoose.svg",
                invertInDark: false,
            },
            {
                name: "REST APIs",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg",
                invertInDark: true,
            },
        ],
    },
    {
        id: "04",
        name: "developer tools",
        skills: [
            {
                name: "Git & GitHub",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                invertInDark: false,
            },
            {
                name: "Postman",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
                invertInDark: false,
            },
            {
                name: "FFmpeg",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ffmpeg.svg",
                invertInDark: true,
            },
            {
                name: "Cloudinary",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cloudinary.svg",
                invertInDark: false,
            },
        ],
    },
];