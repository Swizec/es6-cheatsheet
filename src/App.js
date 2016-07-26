import React, { Component } from 'react';
import logo from './logo.svg';

import './css/bootstrap-override.css';
import './css/bootstrap-custom-utils.css';
import './css/salesbury-lilac.css';

import { Row, Col as Column } from 'react-bootstrap';
import Section, { LowSection, FluffySection, DarkSection, SectionTitle, GreenSection } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn } from './Columns';
import Testimonial from './Testimonials';

import * as Content from './Content';
import * as Cheatsheet from './Cheatsheet';

class App extends Component {
  render() {
    return (
        <div>
            <div className="bg-white-dark padding-small-top"></div>
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
                <Content.HowToRead />
            </GreenSection>
            <Section>
                <a name="declarations" />
                <SectionTitle>Variable Declarations</SectionTitle>
                <Cheatsheet.Declarations />
            </Section>
            <DarkSection>
                <a name="strings" />
                <SectionTitle>String Templates</SectionTitle>
                <Cheatsheet.Strings />
            </DarkSection>
            <Section>
                <a name="destructuring" />
                <SectionTitle>Destructuring</SectionTitle>
                <Cheatsheet.Destructuring />
            </Section>
            <DarkSection>
                <a name="arrow-functions" />
                <SectionTitle>Arrow Functions</SectionTitle>
                <Cheatsheet.ArrowFunctions />
            </DarkSection>

            <Section>
                <a name="function-params" />
                <SectionTitle>Function Parameters</SectionTitle>
                <Cheatsheet.FunctionParameters />
            </Section>
            <DarkSection>
                <a name="classes" />
                <SectionTitle>Classes</SectionTitle>
                <Cheatsheet.Classes />
            </DarkSection>
            <Section>
                <a name="getters-setters" />
                <SectionTitle>Getters/Setters</SectionTitle>
                <Cheatsheet.GettersSetters />
            </Section>
            <DarkSection>
                <a name="modules" />
                <SectionTitle>Modules</SectionTitle>
                <Cheatsheet.Modules />
            </DarkSection>
            <Section>
                <a name="data-structures" />
                <SectionTitle>Data Structures</SectionTitle>
                <Cheatsheet.DataModels />
            </Section>
            <GreenSection>
                <Content.Footer />
            </GreenSection>
        </div>
    );
  }
}

export default App;
