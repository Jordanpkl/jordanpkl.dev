'use client'

import { Box, Group, UnstyledButton, Container } from "@mantine/core"
import Link from "next/link"
import { BurgerIcon } from "./styles/SVG"
import { useDisclosure } from '@mantine/hooks';
import { motion } from "framer-motion";

const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/uses', label: 'Uses' },
    { link: '/projects', label: 'Projects' },
    { link: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [closed, { toggle, close }] = useDisclosure(false);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
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
                <motion.div animate={ closed ? 'open' : 'closed' } variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }} transition={{ duration: 0.1 }}>
                    <Container className="text-center font-nfont5x7" hidden={!closed} hiddenFrom="xs" pt={'sm'}>
                        {links.map((link, index) => (
                            <Link key={index} href={link.link} onClick={close} className="block p-1">
                                {link.label.toUpperCase()}
                            </Link>
                        ))}
                    </Container>
                </motion.div>
            </Box>
        </motion.div>
    )
}
