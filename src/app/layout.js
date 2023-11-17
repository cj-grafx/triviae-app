import { Inter } from "next/font/google";
// import "./globals.css";
import "./styles/form-styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Triviae quiz | Login",
  description: "Create ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
