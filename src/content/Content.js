import React from "react";
import { Row, Col as Column, Image } from "react-bootstrap";

import { LowSection } from "../components/Section";
import {
    LeftColumn,
    WideLeftColumn,
    RightColumn,
    NarrowRightColumn,
    SingleColumn
} from "../components/Columns";

import HipsterMan from "../img/swizec-at-writethedocs.jpg";
import SwizecPic from "../img/swizec.png";

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Column md={10} mdOffset={1}>
                <h1>How's your ES6?</h1>
                <p className="lead">
                    Learn enough to get by with this interactive cheatsheet.
                </p>
            </Column>
        </Row>
    </header>
);

export const Intro = ({ className }) => (
    <LowSection className={className}>
        <LeftColumn>
            <p>Sound like you? Keep scrolling.</p>
            <p>
                This is an <strong>interactive ES6 cheatsheet</strong>. It uses
                a series of small examples to show you the important parts of
                new JavaScript syntax. All{" "}
                <strong>code is editable and runnable</strong> so you can play
                with it all you want.
            </p>
            <p>
                Many of my{" "}
                <strong>readers and workshop attendees complained</strong> that
                modern JavaScript syntax looks weird at first. They could
                understand what I was saying, but couldn't read the code. So I
                built this cheatsheet to fix that.
            </p>
            <p>
                In <em>5 minutes</em> you will be able to{" "}
                <strong>read and understand modern JavaScript</strong> code.
                Using it on your own might take longer, but you can do it! :)
            </p>
            <p>Come back any time you're stuck.</p>
            <p>
                <strong>
                    <em>
                        <big>
                            <a href="#cheatsheet">
                                Learn ES6{" "}
                                <span className="glyphicon glyphicon-chevron-down" />
                            </a>
                        </big>
                    </em>
                </strong>
            </p>
        </LeftColumn>
        <RightColumn>
            <figure className="text-center">
                <img
                    src={HipsterMan}
                    className="img-thumbnail"
                    itemProp="image"
                    role="presentation"
                />
                <p>That's me at WriteTheDocs Prague 2014</p>
            </figure>
        </RightColumn>
    </LowSection>
);

const TOC = ({ bought }) => {
    const toc = [
        ["declarations", "Variable Declarations"],
        ["strings", "String Templates"],
        ["destructuring", "Destructuring"],
        ["arrow-functions", "Arrow Functions"],
        ["function-params", "Function Parameters"],
        ["classes", "Classes"],
        ["getters-setters", "Getters/Setters"],
        ["modules", "Modules"],
        ["data-structures", "Data Structures"]
    ];

    const listing = toc.map(([name, label], i) => {
        if (bought) {
            return (
                <li key={i}>
                    <a href={`#${name}`}>{label}</a>
                </li>
            );
        } else {
            return <li key={i}>{label}</li>;
        }
    });

    return <ol>{listing}</ol>;
};

export const HowToRead = ({ bought }) => (
    <Row>
        <SingleColumn>
            <p>
                Welcome to the interactive ES6 Cheatsheet. It's organized into{" "}
                <strong>9 sections and 31 code samples</strong>. Each section
                has two columns: <strong>On the left</strong>, there's the old
                way of doing things. It uses the JavaScript you already know to
                do something simple. <strong>On the right</strong>, there's the
                new way of doing things. It uses ES6 to show you how the same
                result can be achieved with better syntax.
            </p>
            <p>
                Code samples have two tabs. The first shows you the code, the
                second shows you what happens when you run it.{" "}
                <strong>You can and should edit the code</strong>. It runs
                straight away :)
            </p>
            <p>
                This ES6 cheatsheet is not an exhaustive list of new features in
                JavaScript. It's meant to show you the most commonly used
                features. And yes, ES7/ES2016 became an official standard about
                40 days ago. I will add those features soon.
            </p>
            <h3>Table of Contents</h3>
            <TOC bought={bought} />
            <p>
                <small>
                    PS: this website doesn't work without JavaScript enabled
                </small>
            </p>
        </SingleColumn>
    </Row>
);

export const Footer = ({ bought }) => {
    if (bought) {
        return (
            <Row className="padding-big-top">
                <WideLeftColumn>
                    <h1>Swizec Teller</h1>
                    <p>
                        Thank you for reading my ES6 cheatsheet. I hope it's
                        helped make sense of modern JavaScript syntax and
                        behavior. When I update it for ES7, you will get an
                        email.
                    </p>
                    <p>That's me on the right.</p>
                    <p>
                        I've published a couple of JavaScript books and am
                        listed as a reference on{" "}
                        <a href="https://en.wikipedia.org/w/index.php?search=swizec+teller&title=Special:Search&go=Go&searchToken=96oe3hbecvgravy12pae129an">
                            2 wikipedia articles
                        </a>. You can find out more about me,{" "}
                        <a href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=swizec%20teller">
                            by googling my name
                        </a>.
                    </p>
                </WideLeftColumn>
                <NarrowRightColumn>
                    <Image src={SwizecPic} circle />
                </NarrowRightColumn>
            </Row>
        );
    } else {
        return (
            <Row className="padding-big-top">
                <WideLeftColumn>
                    <h1>Swizec Teller</h1>
                    <p>
                        Hey, I built this cheatsheet because a lot of people at
                        my workshops and readers of my books said they struggled
                        with ES6 syntax. It's meant to give you the basics in
                        about 5 minutes.
                    </p>
                    <p>That's me on the right. Modeling my new glasses.</p>
                    <p>
                        I've published a couple of JavaScript books, given talks
                        at many conferences and am listed as a reference on{" "}
                        <a href="https://en.wikipedia.org/w/index.php?search=swizec+teller&title=Special:Search&go=Go&searchToken=96oe3hbecvgravy12pae129an">
                            2 wikipedia articles
                        </a>. You can find out more about me,{" "}
                        <a href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=swizec%20teller">
                            by googling my name
                        </a>.
                    </p>
                </WideLeftColumn>
                <NarrowRightColumn>
                    <Image src={SwizecPic} circle />
                </NarrowRightColumn>
            </Row>
        );
    }
};
