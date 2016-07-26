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
    constructor(params) {
        super(params);

        this.state = {showUpto: 9};
    }

    get declarations() {
        return <Section key="declarations">
                    <a name="declarations" />
                    <SectionTitle>Variable Declarations</SectionTitle>
                    <Cheatsheet.Declarations />
                </Section>;
    }

    get strings() {
        return <DarkSection key="strings">
                    <a name="strings" />
                    <SectionTitle>String Templates</SectionTitle>
                    <Cheatsheet.Strings />
                </DarkSection>;
    }

    get destructuring() {
        return <Section key="destructuring">
                    <a name="destructuring" />
                    <SectionTitle>Destructuring</SectionTitle>
                    <Cheatsheet.Destructuring />
                </Section>;
    }

    get arrowFunctions() {
        return <DarkSection key="arrow-functions">
                    <a name="arrow-functions" />
                    <SectionTitle>Arrow Functions</SectionTitle>
                    <Cheatsheet.ArrowFunctions />
                </DarkSection>;
    }

    get functionParams() {
        return <Section key="function-params">
                    <a name="function-params" />
                    <SectionTitle>Function Parameters</SectionTitle>
                    <Cheatsheet.FunctionParameters />
                </Section>;
    }

    get classes() {
        return  <DarkSection key="classes">
                    <a name="classes" />
                    <SectionTitle>Classes</SectionTitle>
                    <Cheatsheet.Classes />
                </DarkSection>;
    }

    get gettersSetters() {
        return <Section key="getters-setters">
                    <a name="getters-setters" />
                    <SectionTitle>Getters/Setters</SectionTitle>
                    <Cheatsheet.GettersSetters />
                </Section>;
    }

    get modules() {
        return <DarkSection key="modules">
                    <a name="modules" />
                    <SectionTitle>Modules</SectionTitle>
                    <Cheatsheet.Modules />
                </DarkSection>;
    }

    get dataStructures() {
        return  <Section key="data-structures">
                    <a name="data-structures" />
                    <SectionTitle>Data Structures</SectionTitle>
                    <Cheatsheet.DataModels />
                </Section>;
    }

    componentDidMount() {
        for (let i = this.state.showUpto; i < 9; i++) {
            setTimeout(() => this.setState({showUpto: this.state.showUpto+1}),
                       i*300);
        }
    }

    render() {
        const sections = [this.declarations, this.strings, this.destructuring,
                          this.arrowFunctions, this.functionParams, this.classes,
                          this.gettersSetters, this.modules, this.dataStructures];

        const cheatsheet = sections.filter((s, i) => i < this.state.showUpto);

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

                {cheatsheet}

                <GreenSection>
                    <Content.Footer />
                </GreenSection>
            </div>
        );
    }
}

export default App;
