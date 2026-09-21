import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata={
  title:{default:"Miniature Worlds Studio",template:"%s — Miniature Worlds Studio"},
  description:"Custom-made miniature worlds, atmospheric dioramas, historical scenes, interiors, cities, and exhibition-scale projects.",
  metadataBase:new URL("https://miniature-worlds-studio.vercel.app"),
  openGraph:{title:"Miniature Worlds Studio",description:"Small in scale. Complete in feeling.",type:"website"}
};

export default function RootLayout({children}){
  return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>;
}
