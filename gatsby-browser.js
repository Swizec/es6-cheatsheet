const FBPixel = require("react-facebook-pixel");
const ReactGA = require("react-ga");
const querystring = require("querystring");

const FreeKeys = ["mailing-list", "bundler"];

function updateBought() {
    let query = querystring.parse(window.location.search.replace(/^\?/, "")),
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

exports.onClientEntry = function() {
    FBPixel.init(714190382013726);
    FBPixel.pageView();

    ReactGA.initialize("UA-1464315-27");
    ReactGA.pageview(window.location.pathname + window.location.search);

    updateBought();
};
