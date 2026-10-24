export interface RecentlyCompletedItem {
    title: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
}

export interface NowData {
    currentlyDoing: string[];
    lastUpdated: string;
    recentlyCompleted: RecentlyCompletedItem[];
}

export const staticNowData: NowData = {
    currentlyDoing: [
        "Working as a Software Engineer Intern at Stratbeans Consulting Pvt. Ltd., contributing to enterprise web modules and learning-platform workflows",
        "Practicing data structures and algorithmic problem solving on LeetCode in Java (950+ solved, contest rating 1737)",
        "Building and refining full-stack applications with React, Node.js, Express, and MongoDB",
    ],
    lastUpdated: "October 2026",
    recentlyCompleted: [
        {
            title: "Scriptly — AI Study Platform",
            description:
                "Transforms audio, video, and YouTube links into structured notes and flashcards with Gemini and Groq fallback.",
            githubUrl: "https://github.com/GopalVar2005/Scriptly.git",
            liveUrl: "https://scriptly-ashen.vercel.app/",
        },
        {
            title: "Learnify — Full-Stack LMS",
            description:
                "Course platform with video lecture hosting, Cloudinary integration, and role-based access across 17 endpoints.",
            githubUrl: "https://github.com/GopalVar2005/Learnify-Full-Stack-Learning-Web-App.git",
        },
    ],
};