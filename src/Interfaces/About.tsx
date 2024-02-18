export const AboutInitialVales = {
    about: [],
    activities: [],
    buttons: [],
    skillset: [],
}

export interface AboutProps {
    about?: string[];
    activities?: string[];
    buttons?: { link: string, label: string }[];
    skillset?: string[];
}
