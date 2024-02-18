'use client'
import { Center, Text, Container, Loader } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactProps } from "@/Interfaces/Contact";
import axios from "axios";
import { motion } from "framer-motion";

export default function Contact() {
    const [contactData, setContactData] = useState<ContactProps[]>([]);
    const [fetched, setFetched] = useState<Boolean>(false);

    const fetchContact = async () => {
        const response = await axios.get('/api/contact')
        setContactData(response.data)
        setFetched(true)
    }
    useEffect(() => {
        fetchContact();
    }, [])
    return !fetched ? (
        <Center mih={'100vh'}>
            <Loader color="white" size="xl" type="dots" />
        </Center>
    ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Center mih={'100vh'}>
                <Container className="font-RobotoMono" pt={'5rem'} pb={'5rem'}>
                    <Text className="font-NFont5x7" ta="center" size={'2.5rem'} c={'white'} mb={'1rem'}>CONTACT</Text>
                    {contactData.map((contact, index) => (
                        <Text key={index} ta="center" size={'xl'}>{contact.label}: {contact.url ? <Link href={contact.url} className="hover:text-white">{contact.info}</Link> : `${contact.info}`}</Text>
                    ))}
                </Container>
            </Center>
        </motion.div>
    )
};
