
import React from 'react';
import { Row, Col as Column, Image, Input, ButtonInput, Carousel, CarouselItem } from 'react-bootstrap';

import Section, { SectionTitle, Panel, LowSection } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn, MiddleColumn, HalfColumn } from './Columns';

import HipsterMan from './img/happy-hipster-man.jpg';
import SwizecPic from './img/swizec.png';

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Column md={10} mdOffset={1}>
                <h1>How's your ES6?</h1>
                <p className="lead">Learn enough to get by with this interactive cheatsheet.</p>
            </Column>
        </Row>
    </header>
);


export const Intro = ({ className }) => (
    <LowSection className={className}>
        <LeftColumn>
            <p>
                Sound like you? Keep scrolling.
            </p>
            <p>
                This is an <strong>interactive ES6 cheatsheet</strong>. It uses a series of small examples to teach you the important bits of new JavaScript syntax.
            </p>
            <p>
                In <em>5 minutes</em> you will be able to <strong>read and understand modern JavaScript</strong> code. Using it on your own might take longer, but you can do it! :)
            </p>
            <p>
                Come back any time you're stuck.
            </p>
            <p>
                <strong><em><a href="#cheatsheet">Start learning ES6<span className="glyphicon glyphicon-chevron-down" /></a></em></strong>
            </p>
        </LeftColumn>
        <RightColumn>
            <figure className="text-center">
                <img src={HipsterMan} className="img-thumbnail" itemProp="image" />
            </figure>
        </RightColumn>
    </LowSection>
);

export const Footer = () => (
    <Row className="padding-big-top">
        <WideLeftColumn>
            <h1>Swizec Teller</h1>
        </WideLeftColumn>
        <NarrowRightColumn>
            <Image src={SwizecPic} circle />
        </NarrowRightColumn>
    </Row>
);
