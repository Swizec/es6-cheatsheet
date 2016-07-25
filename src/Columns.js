
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export class LeftColumn extends Component {
    render() {
        let md = this.props.md || 4;

        return (
            <Col xs={12} md={md} mdOffset={1} {...this.props}>
            {this.props.children}
            </Col>
        );
    }
}

export class WideLeftColumn extends Component {
    render() {
        return (
            <LeftColumn md={6} {...this.props}>
                {this.props.children}
            </LeftColumn>
        )
    }
}

export class HalfColumn extends Component {
    render() {
        return (
            <LeftColumn md={6} mdOffset={0} {...this.props}>
                {this.props.children}
            </LeftColumn>
        )
    }
}

export class FullColumn extends Component {
    render() {
        return (
            <LeftColumn md={12} mdOffset={0} {...this.props}>
                {this.props.children}
            </LeftColumn>
        )
    }
}

export class RightColumn extends Component {
    render() {
        let md = this.props.md || 6;

        return (
            <Col xs={12} md={md} {...this.props}>
            {this.props.children}
            </Col>
        );
    }
}

export class NarrowRightColumn extends Component {
    render() {
        return (
            <RightColumn md={4} {...this.props}>
                {this.props.children}
            </RightColumn>
        );
    }
}

export class SingleColumn extends Component {
    render() {
        return (
            <Col md={10} mdOffset={1} {...this.props}>
            {this.props.children}
            </Col>
        );
    }
}

export class MiddleColumn extends Component {
    render() {
        return (
            <Col md={6} mdOffset={3} {...this.props}>
            {this.props.children}
            </Col>
        );
    }
}
