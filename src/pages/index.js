import React from "react";
import Link from "gatsby-link";
import Crawler from "es6-crawler-detect/src";

import { Col as Column } from "react-bootstrap";
import Section, {
    LowSection,
    DarkSection,
    SectionTitle,
    GreenSection
} from "../components/Section";
import Testimonial from "../components/Testimonials";

import * as querystring from "querystring";

import * as Content from "../content/Content";
import { Toc } from "../content/Cheatsheet";

const FreeKeys = [];

class IndexPage extends React.Component {
    state = {
        showUpto: this.didBuy ? 9 : 1,
        bought: this.didBuy
    };

    get didBuy() {
        const CrawlerDetector = new Crawler();

        if (CrawlerDetector.isCrawler(navigator.userAgent)) {
            return true;
        }

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

    renderSection = ([name, title, Component], i) => {
        const { bought } = this.state;
        const Wrapper = i % 2 == 0 ? Section : DarkSection;

        return (
            <Wrapper key={name}>
                <a name={name} />
                <SectionTitle>{title}</SectionTitle>
                <Component bought={bought} />
            </Wrapper>
        );
    };

    render() {
        const { showUpto, bought } = this.state;

        const sections = Toc.map(this.renderSection);

        const cheatsheet = sections.filter((s, i) => i < showUpto);

        return (
            <div>
                <div className="bg-white-dark padding-small-top" />
                <Content.Header />
                <LowSection className="padding-big-bottom">
                    <Column md={10} mdOffset={1}>
                        <Testimonial which="crocker" />
                        <Testimonial which="tamara" />
                    </Column>
                </LowSection>
                <Content.Intro />
                <GreenSection>
                    <a name="cheatsheet" />
                    <SectionTitle>
                        How to use this ES6, ES2016, and ES2017 cheatsheet
                    </SectionTitle>
                    <Content.HowToRead bought={bought} />
                </GreenSection>

                {cheatsheet}

                <GreenSection>
                    <Content.Footer bought={bought} />
                </GreenSection>
            </div>
        );
    }
}

export default IndexPage;
