import { Buttons } from "./Shared";

export const ProjectsInitialVales = {
    projects: [],
    buttons: [],
}

interface projects {
    label: string,
    description: string | null,
    info: string[] | null,
    old: string[] | null,
    source: string | null
}

export interface ProjectsProps {
    projects: projects[];
    buttons?: Buttons[];
}
