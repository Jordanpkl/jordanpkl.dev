'use client'

import { Box, Group, Text, UnstyledButton, Container } from "@mantine/core"
import Link from "next/link"
import { BurgerIcon } from "./styles/SVG"
import { useDisclosure } from '@mantine/hooks';

const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/uses', label: 'Uses' },
    { link: '/projects', label: 'Projects' },
    { link: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [closed, { toggle }] = useDisclosure(false);
    return (
        <Box pos={'fixed'} bg={'#000000b3'} w={'100%'} p={'md'} className="font-NFont5x7 z-50">
            <Group justify="space-between">
                <Link href="https://www.jordanpkl.dev/" className="hover:text-white">JORDANPKL.DEV</Link>
                <Group justify="space-between" visibleFrom="xs" gap={'lg'}>
                    {links.map((link, index) => (
                        <Link key={index} href={link.link} className="hover:text-white">
                            {link.label.toUpperCase()}
                        </Link>
                    ))}
                </Group>
                <UnstyledButton hiddenFrom="xs" onClick={toggle} mr={'xs'} >
                    <BurgerIcon size={"1.5rem"} />
                </UnstyledButton>
            </Group>
            <Container className="text-center font-nfont5x7" hidden={!closed} hiddenFrom="xs" pt={'sm'}>
                {links.map((link, index) => (
                    <Link key={index} href={link.link} className="block p-1">
                        {link.label.toUpperCase()}
                    </Link>
                ))}
            </Container>
        </Box>
    )
}
