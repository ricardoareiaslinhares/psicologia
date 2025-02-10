
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FullNavbar from "@/components/navbar/FullNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import FooterCredits from "@/components/footer/FooterCredits";
import { Separator } from "@/components/ui/separator";
import { GoogleAnalytics } from '@next/third-parties/google'
import { MessageContextProvider } from "@/context/message";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ricardolinharespsicologo.pt"),
  
  title: "Ricardo Linhares Consultas de Psicologia Barcelos",
  robots:{
    index:true,
    follow:true,

   
  },
  keywords: [
    'Psicologia',
    'Psicologia Barcelos',
    'Psicoterapia Barcelos',
    "Psicologia Clínica",
    "Tratamento ansiedade",
    "Tratamento depressão"
  ],
  description: "Psicologia Clínica / Psicoterapia em Barcelos. Não precisa de sofrer com depressão, ansiedade, pânico ou outros problemas. Há formas de lidar com eles, utilize a psicologia para viver com maiis vitalidade.",

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
          <MessageContextProvider>
   
          <FullNavbar />
          <div className="flex items-center justify-center flex-col">
            {children}
            <Separator className="bg-foreground/10" />
            <div className="w-full  bg-muted  flex items-center justify-center">
              <div className="max-w-screen-2xl flex items-center justify-center ">
                <FooterCredits  />
              </div>
            </div>
          </div>

          <div id="overlays"></div>
          </MessageContextProvider>
      </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-9PRFLD7EHF" />
    </html>
  );
}
