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

import { Toc } from "./Cheatsheet";

import HipsterMan from "../img/swizec-at-writethedocs.jpg";
import SwizecPic from "../img/swizec.png";

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Column md={10} mdOffset={1}>
                <h1>How are your ES6, ES2016, and ES2017?</h1>
                <p className="lead">
                    Learn enough modern JavaScript to get by with this
                    interactive cheatsheet.
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
                This is an{" "}
                <strong>interactive ES6, ES2016, and ES2017 cheatsheet</strong>.
                It uses a series of small examples to show you the important
                parts of modern JavaScript. All{" "}
                <strong>code is editable and runnable</strong> so you can play
                with it all you want.
            </p>
            <p>
                Many of my{" "}
                <strong>readers and workshop attendees complained</strong> that
                modern JavaScript looks weird at first. They could understand
                what I was saying, but couldn't read the code. So I built this
                cheatsheet to fix that.
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
                                Learn ES6 and beyond{" "}
                                <span className="glyphicon glyphicon-chevron-down" />
                            </a>
                        </big>
                    </em>
                </strong>
            </p>
        </LeftColumn>
        <RightColumn>
            <figure className="text-center">
                <a href="https://swizec.com/blog">
                    <img
                        src={HipsterMan}
                        className="img-thumbnail"
                        itemProp="image"
                        role="presentation"
                    />
                </a>
                <p>That's me at WriteTheDocs Prague 2014</p>
            </figure>
        </RightColumn>
    </LowSection>
);

const TOC = ({ bought }) => {
    const listing = Toc.map(([name, label], i) => {
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
                Welcome to the interactive ES6+ Cheatsheet. It's organized into{" "}
                <strong>13 sections and 45 code samples</strong>. Each section
                has two columns: <strong>On the left</strong>, there's the old
                way of doing things. It uses the JavaScript you already know.{" "}
                <strong>On the right</strong>, there's the new way of doing
                things. It uses ES6, ES2016, and ES2017 to show you how to get
                the same result with modern syntax.
            </p>
            <p>
                Code samples have two tabs. The first shows you the code, the
                second shows you what happens when you run it.{" "}
                <strong>You can and should edit the code</strong>. It runs
                straight away :)
            </p>
            <p>
                This modern JavaScript cheatsheet is not an exhaustive list of
                new features. It's meant to show you the features you're most
                likely to run across in the wild. The ones you can use to make
                your code better.
            </p>
            <h3>Table of Contents</h3>
            <TOC bought={bought} />
            <p>
                The full cheatsheet uses lazy loading to show 45 Codepen
                iframes. You might seeempty spaces while scrolling until they
                load.
            </p>
            <p>
                <small>
                    PS: this website works better with JavaScript enabled
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
                        Thank you for reading my ES6, ES2016, and ES2017
                        cheatsheet. I hope it's helped you make sense of modern
                        JavaScript syntax and behavior.
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
                    <p>
                        If you find a mistake, you can{" "}
                        <a href="https://github.com/Swizec/es6-cheatsheet">
                            submit an issue or a PR on Github
                        </a>
                    </p>
                </WideLeftColumn>
                <NarrowRightColumn className="text-center">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <a href="https://swizec.com/blog">
                        <Image src={SwizecPic} circle />
                    </a>
                </NarrowRightColumn>
            </Row>
        );
    } else {
        return (
            <Row className="padding-big-top">
                <WideLeftColumn>
                    <h1>Swizec Teller</h1>
                    <p>
                        Hey, I built this cheatsheet because people at my
                        workshops and readers of my books said they struggled
                        with modern ES6, ES2016, ES2017 syntax. It's meant to
                        give you the basics in about 5 minutes.
                    </p>
                    <p>That's me on the right. Modeling my new sunglasses.</p>
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
                <NarrowRightColumn className="text-center">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <a href="https://swizec.com/blog">
                        <Image src={SwizecPic} circle />
                    </a>
                </NarrowRightColumn>
            </Row>
        );
    }
};
