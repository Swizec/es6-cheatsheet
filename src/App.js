import React, { Component } from 'react';
import logo from './logo.svg';

import './css/bootstrap-override.css';
import './css/bootstrap-custom-utils.css';
import './css/salesbury-lilac.css';
import './App.css';

import { Row, Col as Column } from 'react-bootstrap';
import Section, { LowSection, FluffySection, DarkSection, SectionTitle, GreenSection } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn } from './Columns';
import Testimonial from './Testimonials';

import * as querystring from 'querystring';

import * as Content from './Content';
import * as Cheatsheet from './Cheatsheet';

const FreeKeys = ['ForwardJS', 'will'];

class App extends Component {
    constructor(params) {
        super(params);

        this.state = {showUpto: this.didBuy ? 9 : 1,
                      bought: this.didBuy};
    }

    get didBuy() {
        let query = querystring.parse(window.location.search.replace(/^\?/, '')),
            stored = window.localStorage.getItem("es6cheatsheet");

        let { product_id, product_permalink, sale_id, key } = query,
            bought = false;

        if (product_permalink == 'kOCPh' && product_id && sale_id) {
            bought = true;
        }else if (FreeKeys.includes(key)) {
            bought = true;
        }else if (stored == 'kiwi is my bird') {
            bought = true;
        }

        if (bought) {
            localStorage.setItem("es6cheatsheet", 'kiwi is my bird');
        }

        return bought;
    }

    get declarations() {
        if (this.state.bought) {
            return <Section key="declarations">
                    <a name="declarations" />
                    <SectionTitle>Variable Declarations</SectionTitle>
                    <Cheatsheet.Declarations />
                </Section>;
        }else{
            return <Section key="declarations" className="App-buy-wrapper padding-small-bottom">
                    <a name="declarations" />
                    <SectionTitle>Variable Declarations</SectionTitle>
                    <Cheatsheet.Declarations />
                    <div className="App-buy-overlay">
                        <a className="gumroad-button" href="https://gum.co/kOCPh">
                        <strong style={{color: 'black'}}>I want this!</strong></a>
                        <br />
                        <em>Pay what you want</em>
                        <p>The whole cheatsheet ($0+) and free updates for life.</p>
                        <p><small>If you got this cheatsheet in the past, <br/>click the link in your email.</small></p>
                    </div>
            </Section>;
        }
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
        if (window.location.pathname == '/thanks') {
            const script = document.createElement('script');
            script.src = '//smartbribe.herokuapp.com/script/c161aef18948e557c0d91dd6d7ab8aef.js';

            this.refs.main.appendChild(script);
        }
    }

    render() {
        const sections = [this.declarations, this.strings, this.destructuring,
                          this.arrowFunctions, this.functionParams, this.classes,
                          this.gettersSetters, this.modules, this.dataStructures];

        const cheatsheet = sections.filter((s, i) => i < this.state.showUpto);

        return (
            <div ref="main">
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
                    <Content.Footer bought={this.state.bought} />
                </GreenSection>
            </div>
        );
    }
}


export default App;
