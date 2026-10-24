import type { Project } from "./data/projects";
import type { NowData } from "./data/now-section";
import { staticProjects } from "./data/projects";
import { staticNowData } from "./data/now-section";

export async function getNowData(): Promise<NowData | null> {
    return staticNowData;
}

export async function getProjects(): Promise<Project[]> {
    return staticProjects;
}
