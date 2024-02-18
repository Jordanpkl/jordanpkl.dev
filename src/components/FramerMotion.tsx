'use client';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FrozenRoute } from "./FrozenRoute";

export function FramerMotion({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname();
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={path}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='base-page-size'
            >
                <FrozenRoute>
                    {children}
                </FrozenRoute>
            </motion.div>
        </AnimatePresence>
    );
}
