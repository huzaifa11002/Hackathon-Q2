import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Provider from "./redux/provider";
import { Bounce, ToastContainer } from "react-toastify";
import {ClerkProvider} from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comforty",
  description: "Best Furniture Collection for your interior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
          <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            toastStyle={{
              backgroundColor: '#fff', // Custom background color for all toasts
              color: '#000', // Custom text color for all toasts
            }}
            className="custom-toast"
          />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
