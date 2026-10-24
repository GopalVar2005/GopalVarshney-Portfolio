export interface Project {
    id: number;
    title: string;
    description: string;
    status: string;
    previewImage: string;
    isGithub: boolean;
    isLive: boolean;
    githubLink?: string;
    liveLink?: string;
    bgColor?: string;
    projectType: string;
    technologies?: string[];
    highlights?: string[];
}

export const staticProjects: Project[] = [
    {
        id: 1,
        title: "Scriptly — AI Study Platform",
        description: "Full-stack web application that helps students generate structured study notes, flashcards, summaries, and quizzes from audio recordings, video files, and YouTube links. Uses Google Gemini with automatic fallback to Groq LLaMA 3.3 for reliable responses, Groq Whisper for speech-to-text, and FFmpeg for audio extraction and compression.",
        status: "Live & Deployed",
        previewImage: "/images/projects/scriptly-home.png",
        isGithub: true,
        isLive: true,
        githubLink: "https://github.com/GopalVar2005/Scriptly.git",
        liveLink: "https://scriptly-ashen.vercel.app/",
        bgColor: "#0f172a",
        projectType: "Full Stack / AI",
        technologies: ["React 19", "Node.js", "Express.js", "MongoDB", "Google Gemini", "Groq LLaMA", "Whisper", "FFmpeg", "Passport.js"],
        highlights: [
            "AI content generation with Google Gemini and automatic fallback to Groq LLaMA 3.3",
            "Audio transcription using Groq Whisper with FFmpeg compression under 25MB",
            "Four study formats: summaries, flashcards, practice quizzes, and revision guides",
            "Backend authentication with Passport.js, Joi payload validation, and MongoDB caching",
        ]
    },
    {
        id: 2,
        title: "Learnify — Learning Management System",
        description: "Full-stack course management platform where instructors can create courses, upload video lectures, and track enrollments. Built with a React frontend and Express.js REST API with MongoDB, using Cloudinary for media storage and custom authentication middleware across protected endpoints.",
        status: "Completed",
        previewImage: "/images/projects/learnify.jpg",
        isGithub: true,
        isLive: false,
        githubLink: "https://github.com/GopalVar2005/Learnify-Full-Stack-Learning-Web-App.git",
        bgColor: "#131a22",
        projectType: "Full Stack MERN",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "REST APIs"],
        highlights: [
            "Instructor and student authorization middleware across 17 REST API endpoints",
            "Cloudinary media integration for course lecture videos and thumbnails",
            "Lesson-by-lesson progress tracking and automatic course completion status",
            "Course catalog with category filtering, search, and pagination",
        ]
    },
];