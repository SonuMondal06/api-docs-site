import Script from "next/script";

const ConsentDatabase = () => (
	<>
		<Script
			id="iubenda-consent-database-init"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
          var _iub = _iub || {};
          _iub.cons_instructions = _iub.cons_instructions || [];
          _iub.cons_instructions.push(["init", {api_key: "cbcVp1qJtcxv5dRmlwS8UXNOIqL1SHca"}]);
        `,
			}}
		/>
		<Script
			src="https://cdn.iubenda.com/cons/iubenda_cons.js"
			strategy="afterInteractive"
			async
		/>
	</>
);

export default ConsentDatabase;
