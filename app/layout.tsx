import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shatez Frontend Interview Task",
    description: "Complete the tasks to the best of your abilities & taking necessary assymptions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full bg-white">
            <body className="h-full w-full">{children}</body>
        </html>
    );
}
