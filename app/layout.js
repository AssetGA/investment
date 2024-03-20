import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import DashboardLayout from "./dashboad/layout";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardLayout />
        <main className="flex flex-col w-full h-full items-center justify-between py-24 px-5  pb-72">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
