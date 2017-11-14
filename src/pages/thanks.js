import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";

const TwitterBribe = () => (
    <Script url="https://www.smartbribe.com/scripts/0ca266a06fd18d24d41e00f54ba51b42.js" />
);

const FacebookBribe = () => (
    <Script url="https://www.smartbribe.com/scripts/bb9bb9ca101b258595f8c77985b884cb.js" />
);

const ThanksPage = () => (
    <div>
        <h1>Thanks for grabbing the cheatsheet!</h1>
        {Math.random() > 0.5 ? <TwitterBribe /> : <FacebookBribe />}
    </div>
);

export default ThanksPage;
