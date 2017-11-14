import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import FBPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import * as querystring from "querystring";

import "bootstrap/dist/css/bootstrap.css";
import "../css/bootstrap-override.css";
import "../css/bootstrap-custom-utils.css";
import "../css/salesbury-lilac.css";
import "./index.css";

class TemplateWrapper extends React.Component {
    onInitialClientRender() {
        FBPixel.init(714190382013726);
        FBPixel.pageView();

        ReactGA.initialize("UA-1464315-27");
        ReactGa.pageview(window.location.pathname + window.location.search);

        this.updateBought();
    }

    updateBought() {
        let query = querystring.parse(
                window.location.search.replace(/^\?/, "")
            ),
            stored = window.localStorage.getItem("es6cheatsheet");

        let { product_id, product_permalink, sale_id, key } = query,
            bought = false;

        if (product_permalink === "kOCPh" && product_id && sale_id) {
            bought = true;
        } else if (FreeKeys.includes(key)) {
            bought = true;
        } else if (stored === "kiwi is my bird") {
            bought = true;
        }

        if (bought) {
            localStorage.setItem("es6cheatsheet", "kiwi is my bird");
        }

        return bought;
    }

    render() {
        const { children } = this.props;

        return (
            <div className="cheatsheet">
                <Helmet>
                    <script
                        async
                        src="//assets.codepen.io/assets/embed/ei.js"
                    />
                    <script async src="https://gumroad.com/js/gumroad.js" />

                    <meta name="author" content="Swizec Teller" />
                    <meta
                        name="description"
                        content="Interactive ES6, ES2016, and ES2017 cheatsheet."
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

                    <meta property="og:url" content="https://es2017.io" />
                    <meta
                        property="og:title"
                        content="Interactive ES6, ES2016, and ES2017 cheatsheet"
                    />
                    <meta
                        property="og:image"
                        content="https://es2017.io/cover.png"
                    />
                    <meta
                        property="og:description"
                        content="This is an interactive ES6+ cheatsheet. 13 sections, 47 runnable code samples."
                    />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@swizec" />
                    <meta name="twitter:creator" content="@swizec" />
                    <meta
                        name="twitter:title"
                        content="Interactive ES6, ES2016, and ES2017 cheatsheet"
                    />
                    <meta
                        name="twitter:image"
                        content="https://es2017.io/cover.png"
                    />
                    <meta
                        name="twitter:description"
                        content="This is an interactive ES6+ cheatsheet. 13 sections, 47 runnable code samples."
                    />
                    <title>
                        Interactive JavaScript ES6, ES2016, and ES2017
                        cheatsheet
                    </title>
                </Helmet>
                {children()}
            </div>
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
