import React from 'react';
import RevealOnScroll from "../RevealOnScroll";
const Footer = () => {
    return (
        <RevealOnScroll>
            <footer className="w-full h-16 bg-zinc-800 flex flex-col items-center justify-center text-sm font-light text-zinc-400">
                <div>Copyright © 2025. All rights reserved.</div>
                <div>
                    ❤️ Developed by <span className="text-white font-medium">Anit Baranwal</span>
                </div>
            </footer>
        </RevealOnScroll>
    );
};


export default Footer;
