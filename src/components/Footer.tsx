import { Text } from "@mantine/core";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <Text pos={'fixed'} bottom={0} right={0} px={'xs'} size="sm" className="z-50 font-NFont5x7">{year} - Jordanpkl</Text>
    )
}
