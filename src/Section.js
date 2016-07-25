
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Row } from 'react-bootstrap';

class Section extends Component {
    render() {
        return (
            <div className={classNames(this.props.className, 'container')}>
                <Row className="margin-big-top">
                    {this.props.children}
                </Row>
            </div>
        );
    }
};

export class LowSection extends Component {
    render() {
        return (
            <div className={classNames(this.props.className, 'container')}>
                <Row className="margin-small-top">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}

export class FluffySection extends Section {
    render() {
        return (
            <Section className={classNames(this.props.className, 'container-pattern padding-big-bottom')}>
                {this.props.children}
            </Section>
        )
    }
};

export class DarkSection extends Section {
    render() {
        return (
            <div className={classNames(this.props.className, 'bg-white-dark padding-big-bottom')}>
	        <div className="container">
	            <Row>
                        {this.props.children}
                    </Row>
                </div>
            </div>
        )
    }
};

export class GreenSection extends Section {
    render() {
        let inside = null

        if (this.props.nocontainer) {
            inside = (<Row>{this.props.children}</Row>);
        }else{
            inside = (
                <div className="container">
	            <Row>
                        {this.props.children}
                    </Row>
                </div>
            )
        }

        return (
             <div className={classNames(this.props.className, 'bg-white-dark-example padding-big-bottom')} style={{background: 'rgba(235,251,225,0.9)', borderTop: '#cad9bf', borderBottom: '#cad9bf'}}>
	        {inside}
             </div>
        );
    }
}

export class SectionTitle extends Component {
    render() {
        let md = this.props.md,
            mdOffset = this.props.mdOffset,
            className = classNames(this.props.className,
                                   `col-md-${md} col-md-offset-${mdOffset} col-xs-12 col-xs-offset-1`,
                                   this.props.nomargin ? 'margin-bottom-none' : '');
        return (
            <h2 className={className}>
                {this.props.children}
            </h2>
        )
    };
}
SectionTitle.propTypes = { nomargin: PropTypes.bool };
SectionTitle.defaultProps = { md: 10, mdOffset: 1 }

export class Panel extends Component {
    render() {
        return (
            <div className={classNames(this.props.className, 'panel panel-default padding-medium-top padding-medium-bottom')}>
                <div className="panel-body text-center">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Section;
