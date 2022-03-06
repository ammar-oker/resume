import React from 'react';

const hostUrl =
  process.env.NEXT_PUBLIC_HOST_URL || 'https://ammar-oker.github.io';

export default function MetaTags() {
  const ogImage = `${hostUrl}/resume/images/ammar-oker-resume.png`;
  const twitterImage = `${hostUrl}/resume/images/ammar-oker-resume-twitter.png`;
  const description =
    'Experienced Javascript Developer with a demonstrated history of working in the internet industry. Skilled in React.js, Express.js, and Full-Stack Development.';
  return (
    <>
      {/* OG tags */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={hostUrl} />
      <meta property="og:title" content="Ammar Oker - Software Engineer" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Ammar Oker - Software Engineer" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* #OG tags */}
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ammar Oker - Software Engineer" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@ammar_oker" />
      <meta name="twitter:creator" content="@ammar_oker" />
      <meta name="twitter:image" content={twitterImage} />
      {/* #Twitter tags */}
      <meta name="description" content={description} />
      <meta name="author" content="Ammar Oker" />
      <link
        itemProp="keywords"
        href="web developer portfolio, nodejs developer, node.js developer, node js developer, fullstack developer, node developer, vue developer, nodejs developer, web developer, frontend developer portfolio, developer profile, react developer, react native developer, javascript developer"
      />
      <meta name="theme-color" content="#003B73" />
      {/* favicons */}
      <link
        rel="shortcut icon"
        href={`${hostUrl}/resume/icons/favicon.ico"`}
      />{' '}
      <link
        rel="icon"
        sizes="16x16 32x32 64x64"
        href={`${hostUrl}/resume/icons/favicon.ico`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href={`${hostUrl}/resume/icons/favicon-192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="160x160"
        href={`${hostUrl}/resume/icons/favicon-160.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`${hostUrl}/resume/icons/favicon-96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href={`${hostUrl}/resume/icons/favicon-64.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${hostUrl}/resume/icons/favicon-32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${hostUrl}/resume/icons/favicon-16.png`}
      />
      <link
        rel="apple-touch-icon"
        href={`${hostUrl}/resume/icons/favicon-57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${hostUrl}/resume/icons/favicon-114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${hostUrl}/resume/icons/favicon-72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${hostUrl}/resume/icons/favicon-144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${hostUrl}/resume/icons/favicon-60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${hostUrl}/resume/icons/favicon-120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${hostUrl}/resume/icons/favicon-76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${hostUrl}/resume/icons/favicon-152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${hostUrl}/resume/icons/favicon-180.png`}
      />
      <meta name="msapplication-TileColor" content="#003B73" />
      <meta
        name="msapplication-TileImage"
        content={`${hostUrl}/resume/icons/favicon-144.png`}
      />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      {/* #favicons */}
      <meta
        name="google-site-verification"
        content="vVippowe29p6icLWSSRXsHMsJLGYRs0hx6hX-0wQSz4"
      />
    </>
  );
}
