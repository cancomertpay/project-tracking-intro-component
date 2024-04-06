// description: This is the root layout for the application

//  Typography is a library that allows you to use custom fonts in the website. It is a part of the Next.js framework.
import Typography from "@/lib/fonts";

// globalcss is a file that contains global styles for the website.
import "./globals.css";

//  MainHeader is the main header of the website.
import MainHeader from "@/components/main-header/header";

//  MainContent is the main content container of the website.
import MainContent from "@/components/content/main";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white select-none ${Typography.body.className}`}>
        <MainHeader />

        {/* modal is a div that will be used to display react portal items onto sm devices screen */}
        <div id="modal"></div>

        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
