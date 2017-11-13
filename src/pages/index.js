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
import { Toc } from "../content/Cheatsheet";

const IndexPage = () => {
    const bought = true,
        showUpto = 100,
        sections = Toc.map(([name, title, Component], i) => {
            const Wrapper = i % 2 == 0 ? Section : DarkSection;

            return (
                <Wrapper key={name}>
                    <a name={name} />
                    <SectionTitle>{title}</SectionTitle>
                    <Component bought={bought} />
                </Wrapper>
            );
        });

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
};

/* const Declarations = ({ bought }) => {
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
   }; */

export default IndexPage;
