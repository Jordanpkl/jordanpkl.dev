import { Buttons } from "./Shared";

export const AboutInitialVales = {
    about: [],
    activities: [],
    buttons: [],
    skillset: [],
}

export interface AboutProps {
    about?: string[];
    activities?: string[];
    buttons?: Buttons[];
    skillset?: string[];
}
