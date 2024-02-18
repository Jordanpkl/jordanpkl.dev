'use client'
import { Center, Text, Container, Button, Loader } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AboutInitialVales, AboutProps } from "@/Interfaces/About";
import axios from "axios";
import { motion } from "framer-motion";

export default function About() {
    const [aboutData, setAboutData] = useState<AboutProps>(AboutInitialVales);
    const [fetched, setFetched] = useState<Boolean>(false);

    const fetchAbout = async () => {
        const response = await axios.get('/api/about')
        setAboutData(response.data)
        setFetched(true)
    }
    useEffect(() => {
        fetchAbout();
    }, [])
    return !fetched ? (
        <Center mih={'90vh'}>
            <Loader color="white" size="xl" type="dots" />
        </Center>
    ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Center mih={'90vh'}>
                <Container className="font-RobotoMono" pt={'5rem'} pb={'5rem'}>
                    <Text className="font-NFont5x7" ta="center" size={'2.5rem'} c={'white'}>ABOUT ME</Text>
                    <Text className="font-NFont5x7" ta="center" size={'1.8rem'} c={'white'} pb={'1rem'}>Jordan R.</Text>
                    {aboutData.about?.map((text, index) => (
                        <Text key={index} ta="center" size={'xl'}>{text}</Text>
                    ))}
                    <br />
                    <Text ta="center" size={'xl'} fw={700}>Activities I enjoy:</Text>
                    {aboutData.activities?.map((text, index) => (
                        <Text key={index} ta="center" size={'xl'}>{text}</Text>
                    ))}

                    <Center>
                        {aboutData.buttons?.map((button, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mt-5 mx-2">
                                <Button
                                    variant="filled"
                                    className="font-NFont5x7 font-normal"
                                    size="compact-md"
                                    color="#fff"
                                    c="black"
                                    component={Link}
                                    href={button.link}
                                >
                                    {button.label.toUpperCase()}
                                </Button>
                            </motion.div>
                        ))}
                    </Center>
                </Container>
            </Center>
            <Container className="font-RobotoMono">
                <Text className="font-NFont5x7" ta="center" size={'2.5rem'} c={'white'}>SKILLSET</Text>
                {aboutData.skillset?.map((text, index) => (
                    <Text key={index} ta="center" size={'xl'}>{text}</Text>
                ))}
            </Container>
            <Container p={'5rem'} />
        </motion.div>
    )
};
