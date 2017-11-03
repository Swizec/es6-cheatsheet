import React from "react";
import Link from "gatsby-link";

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
import * as Cheatsheet from "../content/Cheatsheet";

const IndexPage = () => {
    const bought = true,
        showUpto = 100,
        sections = [
            <Declarations key="1" bought={bought} />,
            <Strings key="2" />,
            <Destructuring key="3" />,
            <ArrowFunctions key="4" />,
            <FunctionParams key="5" />,
            <Classes key="6" />,
            <GettersSetters key="7" />,
            <Modules key="8" />,
            <DataStructures key="9" />,
            <Promises key="10" />,
            <Async key="11" />
        ];

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
                <SectionTitle>How to use this ES6 cheatsheet</SectionTitle>
                <Content.HowToRead bought={bought} />
            </GreenSection>

            {cheatsheet}

            <GreenSection>
                <Content.Footer bought={bought} />
            </GreenSection>
        </div>
    );
};

const Declarations = ({ bought }) => {
    if (bought) {
        return (
            <Section key="declarations">
                <a name="declarations" />
                <SectionTitle>Variable Declarations</SectionTitle>
                <Cheatsheet.Declarations />
            </Section>
        );
    } else {
        return (
            <Section
                key="declarations"
                className="App-buy-wrapper padding-small-bottom"
            >
                <a name="declarations" />
                <SectionTitle>Variable Declarations</SectionTitle>
                <Cheatsheet.Declarations />
                <div className="App-buy-overlay">
                    <a className="gumroad-button" href="https://gum.co/kOCPh">
                        <strong style={{ color: "black" }}>I want this!</strong>
                    </a>
                    <br />
                    <em>Pay what you want</em>
                    <p>The whole cheatsheet ($0+) and free updates for life.</p>
                    <p>
                        <small>
                            If you got this cheatsheet in the past, <br />click
                            the link in your email.
                        </small>
                    </p>
                </div>
            </Section>
        );
    }
};

const Strings = () => (
    <DarkSection key="strings">
        <a name="strings" />
        <SectionTitle>String Templates</SectionTitle>
        <Cheatsheet.Strings />
    </DarkSection>
);

const Destructuring = () => (
    <Section key="destructuring">
        <a name="destructuring" />
        <SectionTitle>Destructuring</SectionTitle>
        <Cheatsheet.Destructuring />
    </Section>
);

const ArrowFunctions = () => (
    <DarkSection key="arrow-functions">
        <a name="arrow-functions" />
        <SectionTitle>Arrow Functions</SectionTitle>
        <Cheatsheet.ArrowFunctions />
    </DarkSection>
);

const FunctionParams = () => (
    <Section key="function-params">
        <a name="function-params" />
        <SectionTitle>Function Parameters</SectionTitle>
        <Cheatsheet.FunctionParameters />
    </Section>
);

const Classes = () => (
    <DarkSection key="classes">
        <a name="classes" />
        <SectionTitle>Classes</SectionTitle>
        <Cheatsheet.Classes />
    </DarkSection>
);

const GettersSetters = () => (
    <Section key="getters-setters">
        <a name="getters-setters" />
        <SectionTitle>Getters/Setters</SectionTitle>
        <Cheatsheet.GettersSetters />
    </Section>
);

const Modules = () => (
    <DarkSection key="modules">
        <a name="modules" />
        <SectionTitle>Modules</SectionTitle>
        <Cheatsheet.Modules />
    </DarkSection>
);

const DataStructures = () => (
    <Section key="data-structures">
        <a name="data-structures" />
        <SectionTitle>Data Structures</SectionTitle>
        <Cheatsheet.DataModels />
    </Section>
);

const Promises = () => (
    <DarkSection key="promises">
        <a name="promises" />
        <SectionTitle>Promises</SectionTitle>
        <Cheatsheet.Promises />
    </DarkSection>
);

const Async = () => (
    <Section key="async-await">
        <a name="async-await" />
        <SectionTitle>Async/Await</SectionTitle>
        <Cheatsheet.Async />
    </Section>
);

export default IndexPage;
