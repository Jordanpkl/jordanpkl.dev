'use client'
import { Center, Text, Container, Button, Loader } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AboutInitialVales, AboutProps } from "@/Interfaces/About";
import axios from "axios";

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
        <>
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
                            <Button
                                key={index}
                                variant="filled"
                                className="font-NFont5x7 font-normal"
                                size="compact-md"
                                mt={'1.25rem'}
                                mr={'0.5rem'}
                                ml={'0.5rem'}
                                color="#fff"
                                c="black"
                                component={Link}
                                href={button.link}
                            >
                                {button.label.toUpperCase()}
                            </Button>
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
        </>
    )
};
