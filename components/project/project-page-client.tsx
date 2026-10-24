"use client";

import ProjectHeader from "@/components/project/project-header";
import ProjectGrid from "@/components/project/project-grid";
import { type Project } from "@/lib/data/projects";
import SectionDivider from "../section-divider";

const ProjectPageClient = ({ projects }: { projects: Project[] }) => {
    return (
        <div className="w-full">
            <ProjectHeader projectCount={projects.length} />
            <ProjectGrid projects={projects} />
            <SectionDivider />
        </div>
    );
};

export default ProjectPageClient;
