"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
        >
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                    flex-1
                    px-6
                    py-4
                    rounded-full
                    bg-white
                    text-[#1a1a2e]
                    placeholder:text-gray-400
                    focus:outline-none
                    transition-all
                "
            />

            <motion.button
                disabled={!isValidEmail}
                whileHover={isValidEmail ? { scale: 1.03 } : {}}
                whileTap={isValidEmail ? { scale: 0.98 } : {}}
                className={`
                    px-8
                    py-4
                    rounded-full
                    font-bold
                    whitespace-nowrap
                    transition-all
                    duration-300
                    ${
                        isValidEmail
                            ? "bg-white text-[#1a1a2e] hover:bg-teal cursor-pointer shadow-lg"
                            : "bg-white/10 text-white/30 backdrop-blur-md cursor-not-allowed border border-white/10"
                    }
                `}
            >
                Subscribe
            </motion.button>
        </motion.div>
    );
};

export default NewsletterForm;
