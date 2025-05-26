import ClientLayout from "./Clientlayout";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Cyberton - A Software Product & Service Supplier Company</title>

    <link rel="canonical" href="https://Cyberton.com/" />
    <meta name="title" content="Cyberton - A Software Product & Service Supplier Company"/>
    <meta name="description" content="A Software Supplier Company is having very good trustability in market.."/>
    <meta name="keywords" content="Cyberton, Cyberton.co.in, Ciberton, Cybertron, Cyber ton, Cyber-ton, Cyberton.in, Cyberton.co.in, Cyberton.com"/>
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="language" content="English"/>
    <meta name="author" content="Cyberton"/>

    <meta property="og:title" content="Cyberton - A Software Service Supplier Company"/>
    <meta property="og:site_name" content="Cyberton"/>
    <meta property="og:url" content="https://Cyberton.com/"/>
    <meta property="og:description" content="Cyberton - A Software Supplier Company is having very good trustability in market.."/>
    <meta property="og:type" content=""/>
    <meta property="og:image" content="https://cyberton.co.in/images/cyberton_icon.png"/>
    {/* twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@cyberton" />
    <meta name="twitter:creator" content="@cyberton" />
{/* favicons */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"/>
    <link href="./output.css" rel="stylesheet"/>
      </head>
      <body>
        <ClientLayout children={children}></ClientLayout>
      </body>
    </html>
  );
}
