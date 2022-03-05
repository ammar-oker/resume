import React from 'react';

export default function MetaTags() {
  const description =
    'Experienced Javascript Developer with a demonstrated history of working in the internet industry. Skilled in React.js, Express.js, and Full-Stack Development.';
  return (
    <>
      <meta name="theme-color" content="#003B73" />

      {/* favicons */}
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="icon" sizes="16x16 32x32 64x64" href="/icons/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href="/icons/favicon-192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="160x160"
        href="/icons/favicon-160.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icons/favicon-96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href="/icons/favicon-64.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16.png"
      />
      <link rel="apple-touch-icon" href="/icons/favicon-57.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/icons/favicon-114.png"
      />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/favicon-72.png" />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/favicon-144.png"
      />
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/favicon-60.png" />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icons/favicon-120.png"
      />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/favicon-76.png" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/favicon-152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/favicon-180.png"
      />
      <meta name="msapplication-TileColor" content="#003B73" />
      <meta name="msapplication-TileImage" content="/icons/favicon-144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      {/* #favicons */}

      <link
        itemProp="keywords"
        href="web developer portfolio, nodejs developer, node.js developer, node js developer, fullstack developer, node developer, vue developer, nodejs developer, web developer, frontend developer portfolio, developer profile, react developer, react native developer, javascript developer"
      />

      {/* OG tags */}
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Ammar Oker - Software Engineer" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Ammar Oker - Software Engineer" />
      <meta
        property="og:image"
        content="/resume/images/ammar-oker-resume.webp"
      />
      {/* #OG tags */}

      {/* Twitter tags */}
      <meta name="twitter:title" content="Ammar Oker - Software Engineer" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@ammar_oker" />
      <meta name="twitter:creator" content="@ammar_oker" />
      <meta
        name="twitter:image"
        content="/resume/images/ammar-oker-resume.webp"
      />
      {/* #Twitter tags */}

      <meta
        name="google-site-verification"
        content="vVippowe29p6icLWSSRXsHMsJLGYRs0hx6hX-0wQSz4"
      />
    </>
  );
}
