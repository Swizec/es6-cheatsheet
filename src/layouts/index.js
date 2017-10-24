import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.css";
import "../css/bootstrap-override.css";
import "../css/bootstrap-custom-utils.css";
import "../css/salesbury-lilac.css";
import "./index.css";

const TemplateWrapper = ({ children }) => (
    <div className="cheatsheet">
        <Helmet>
            <script async src="//assets.codepen.io/assets/embed/ei.js" />
            <script async src="https://gumroad.com/js/gumroad.js" />

            <meta name="author" content="Swizec Teller" />
            <meta name="description" content="Interactive ES6 cheatsheet." />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />

            <meta property="og:url" content="https://es6cheatsheet.com" />
            <meta property="og:title" content="Interactive ES6 cheatsheet" />
            <meta
                property="og:image"
                content="https://es6cheatsheet.com/cover.png"
            />
            <meta
                property="og:description"
                content="This is an interactive ES6 cheatsheet. 9 sections, 31 runnable code samples."
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@swizec" />
            <meta name="twitter:creator" content="@swizec" />
            <meta name="twitter:title" content="Interactive ES6 cheatsheet" />
            <meta
                name="twitter:image"
                content="https://es6cheatsheet.com/cover.png"
            />
            <meta
                name="twitter:description"
                content="This is an interactive ES6 cheatsheet. 9 sections, 31 runnable code samples."
            />
        </Helmet>
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
