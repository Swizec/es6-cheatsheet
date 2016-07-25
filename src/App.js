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
            <LowSection>
                <Column md={10} mdOffset={1}>
                    <Testimonial which="crocker" />
                    <Testimonial which="tamara" />
                </Column>
            </LowSection>
            <Content.Intro />
            <Section>
                <a name="cheatsheet" />
                <SectionTitle>Variable Declarations</SectionTitle>
            </Section>
            <DarkSection>
                <SectionTitle>Destructuring</SectionTitle>
            </DarkSection>
            <Section>
                <SectionTitle>Arrow Functions</SectionTitle>
            </Section>
            <DarkSection>
                <SectionTitle>Function Parameters</SectionTitle>
            </DarkSection>
            <Section>
                <SectionTitle>Classes</SectionTitle>
            </Section>
            <DarkSection>
                <SectionTitle>Getters/Setters</SectionTitle>
            </DarkSection>
            <Section>
                <SectionTitle>Modules</SectionTitle>
            </Section>

        </div>
    );
  }
}

export default App;
