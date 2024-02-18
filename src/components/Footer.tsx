'use client'
import { Text } from "@mantine/core";
import { motion } from "framer-motion";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Text pos={'fixed'} bottom={0} right={0} px={'xs'} size="sm" className="z-50 font-NFont5x7">{year} - Jordanpkl</Text>
        </motion.div>
    )
}
