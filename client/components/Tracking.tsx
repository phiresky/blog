import Script from "next/script"
import React from "react"

function getGaScript(siteId: string) {
	return `/* yes, I know... fite me */
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='https://www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','${siteId}','auto');ga('send','pageview');
`
}

function Tracking(props: { siteId: string }): React.ReactElement {
	return (
		<div>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${props.siteId}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${props.siteId}');
				`}
			</Script>
		</div>
	)
}

export default Tracking
