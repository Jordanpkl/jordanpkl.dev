import { Buttons } from "./Shared";

export const ProjectsInitialVales = {
    projects: [],
    buttons: [],
}

interface projects {
    label: string,
    description?: string,
    info?: string[],
    old?: string[],
    source?: string
}

export interface ProjectsProps {
    projects: projects[];
    buttons?: Buttons[];
}
