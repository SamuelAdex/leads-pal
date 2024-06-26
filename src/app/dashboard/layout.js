import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import localFont from "next/font/local";
import Header from "@/components/Header";
import RootComponent from "@/components/RootComponent";


const myfont = localFont({
  src: [
    {
      path: "../../../public/fonts/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Roboto-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../public/fonts/Roboto-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${myfont.className} bg-[#f6f6f6]`}>
        <div className="p-[1.6rem]">
            <Sidebar />
            <main className="lg:ml-[7.7rem]">
                <Header />  
                <div className="">
                  <RootComponent>
                    {children}
                  </RootComponent>
                </div>
            </main>     
        </div> 
      </body>
    </html>
  );
}
