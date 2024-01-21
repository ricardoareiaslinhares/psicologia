
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FullNavbar from "@/components/navbar/FullNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import FooterCredits from "@/components/footer/FooterCredits";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ricardo Linhares Consultas de Psicologia Barcelos",
  description: "Psicologia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
           <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
   
          <FullNavbar />
          <div className="flex items-center justify-center flex-col">
            {children}
            <Separator className="bg-foreground/10" />
            <div className="w-full  bg-muted  flex items-center justify-center">
              <div className="max-w-screen-2xl flex items-center justify-center ">
                <FooterCredits />
              </div>
            </div>
          </div>

          <div id="overlays"></div>
 
      </ThemeProvider>
      </body>
    </html>
  );
}
