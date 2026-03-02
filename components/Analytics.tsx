import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export const Analytics = () => {
  if (!GA_ID && !ADS_ID) {
    return null;
  }

  const configIds = [GA_ID, ADS_ID].filter(Boolean);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${configIds[0]}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configIds.map((id) => `gtag('config', '${id}');`).join("\n")}
        `}
      </Script>
    </>
  );
};
