import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Gallery App",
  description: "Discover a seamless and intuitive gallery app designed to enhance your photo management experience. Easily upload, delete, and organize your photos with just a few taps. Mark your favorite images for quick access and relive your cherished memories anytime. Enjoy a user-friendly interface and efficient photo management tools all in one place. Start curating your personal photo collection today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>{children}</body>
    </html>
  );
}