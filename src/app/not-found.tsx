'use client'
import { Center, Text, Container, Button } from "@mantine/core";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <Center mih={'100vh'}>
            <Container className="font-RobotoMono" pt={'5rem'} pb={'5rem'}>
                <Text className="font-NFont5x7" size={'2.5rem'} c={'white'} mb={2}>404
                    <Link href="/" className="ml-2">
                        <Button
                            variant="filled"
                            className="font-normal"
                            size="compact-md"
                            color="#fff"
                            c="black"
                            component={motion.div}
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        >
                            HOME
                        </Button>
                    </Link>
                </Text>
                <Text className="font-NFont5x7" size={'1.75rem'} c={'white'} mb={'1rem'}>NOT FOUND</Text>
            </Container>
        </Center>
    )
};
