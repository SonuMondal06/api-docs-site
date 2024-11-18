import Script from "next/script";

const Controls = () => {
	return (
		<>
			{/* Inline script for setting _iub configuration */}
			<Script id="iubenda-config" strategy="afterInteractive">
				{`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "siteId": 3799209,
            "cookiePolicyId": 69220527,
            "lang": "en",
            "storage": { "useSiteId": true }
          };
        `}
			</Script>

			{/* Autoblocking Script */}
			<Script
				src="https://cs.iubenda.com/autoblocking/3799209.js"
				strategy="afterInteractive"
			/>

			{/* GPP Stub Script */}
			<Script
				src="//cdn.iubenda.com/cs/gpp/stub.js"
				strategy="afterInteractive"
			/>

			{/* Iubenda Cookie Solution Script */}
			<Script
				src="//cdn.iubenda.com/cs/iubenda_cs.js"
				strategy="afterInteractive"
				async
			/>
		</>
	);
};

export default Controls;
