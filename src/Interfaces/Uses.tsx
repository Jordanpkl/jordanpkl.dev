import { Buttons } from "./Shared";

export const UsesInitialVales = {
    computer: [],
    laptop: [],
    other: [],
    buttons: [],
    software: [],
}

interface devices {
    label: string,
    description: string | null,
    urlLabel: string | null,
    url: string | null,
    classes: string | null,
}

export interface UsesProps {
    computer?: devices[];
    laptop?: devices[];
    other?: devices[];
    buttons?: Buttons[];
    software?: { label: string, description: string | null }[];
}
