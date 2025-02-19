import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tuhin Shofiul Alam | Web Developer",
  description:
    "I'm Tuhin Shofiul Alam, a Web Developer with 4+ years of experience, specializing in innovative, high-performance web solutions. Passionate about technology and collaboration, I create seamless digital experiences while contributing to the growth of the web development community.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="main-container">
            <Sidebar />
            <div className="main-content">
              <div className="content-wrapper">{children}</div>
            </div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
