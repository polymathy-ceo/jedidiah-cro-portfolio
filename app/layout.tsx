import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jedidiah Solomon | CRO Specialist",
  description: "Turning website traffic into measurable business growth through clearer digital experiences and thoughtful conversion optimization.",
  applicationName: "Jedidiah Solomon",
  openGraph: {
    title: "Jedidiah Solomon | CRO Specialist",
    description: "Thoughtful analysis. Clear direction. Better digital experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f1e8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
