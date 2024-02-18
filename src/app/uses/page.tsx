'use client'
import { Center, Text, Container, Button, Loader } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UsesInitialVales, UsesProps } from "@/Interfaces/Uses";
import axios from "axios";
import { motion } from "framer-motion";

export default function Uses() {
    const [usesData, setUsesData] = useState<UsesProps>(UsesInitialVales);
    const [fetched, setFetched] = useState<Boolean>(false);

    const fetchAbout = async () => {
        const response = await axios.get('/api/uses')
        setUsesData(response.data)
        setFetched(true)
    }
    useEffect(() => {
        fetchAbout();
    }, [])
    return !fetched ? (
        <Center mih={'100vh'}>
            <Loader color="white" size="xl" type="dots" />
        </Center>
    ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Center mih={'90vh'}>
                <Container className="font-RobotoMono" pt={'5rem'} pb={'5rem'}>
                    <Text className="font-NFont5x7" ta="center" size={'2.5rem'} c={'white'} pb={'1rem'}>EQUIPMENT I USE</Text>
                    <Text className="font-NFont5x7" ta="center" size={'1.8rem'} c={'white'}>Main Computer</Text>
                    {usesData.computer?.map((device, index) => (
                        <Text key={index} ta="center" size={'xl'} fw={700} className={device.classes ? device.classes : ''}>
                            {device.label}
                            {device.description ? <Text span size="sm" className="font-RobotoMono"> {device.description}</Text> : ''}
                            {(device.urlLabel && device.url) ? (
                                <Text span size="sm"> (<Link href={device.url}>{device.urlLabel}</Link>)</Text>
                            ) : ''}
                        </Text>
                    ))}
                    <br />
                    <Text className="font-NFont5x7" ta="center" size={'1.8rem'} c={'white'}>Laptop & Accesories</Text>
                    {usesData.laptop?.map((device, index) => (
                        <Text key={index} ta="center" size={'xl'} fw={700} className={device.classes ? device.classes : ''}>
                            {device.label}
                            {device.description ? <Text span size="sm" className="font-RobotoMono"> {device.description}</Text> : ''}
                            {(device.urlLabel && device.url) ? (
                                <Text span size="sm"> (<Link href={device.url}>{device.urlLabel}</Link>)</Text>
                            ) : ''}
                        </Text>
                    ))}
                    <br />
                    <Text className="font-NFont5x7" ta="center" size={'1.8rem'} c={'white'}>Other Hardware</Text>
                    {usesData.other?.map((device, index) => (
                        <Text key={index} ta="center" size={'xl'} fw={700} className={device.classes ? device.classes : ''}>
                            {device.label}
                            {device.description ? <Text span size="sm" className="font-RobotoMono"> {device.description}</Text> : ''}
                            {(device.urlLabel && device.url) ? (
                                <Text span size="sm"> (<u><Link href={device.url}>{device.urlLabel}</Link></u>)</Text>
                            ) : ''}
                        </Text>
                    ))}

                    <Center>
                        {usesData.buttons?.map((button, index) => (
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
                <Text className="font-NFont5x7" ta="center" size={'2.5rem'} c={'white'}>SOFTWARE I USE</Text>
                {usesData.software?.map((software, index) => (
                    <Text key={index} ta="center" size={'xl'} fw={700}>
                        {software.label}
                        {software.description ? <Text span size="sm"> {software.description}</Text> : ''}
                    </Text>
                ))}
            </Container>
            <Container p={'5rem'} />
        </motion.div>
    )
};
