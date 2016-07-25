
import React from 'react';
import { Row } from 'react-bootstrap';

import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn, MiddleColumn, HalfColumn } from './Columns';

const Codepen = ({ id, title }) => (
    <div>
        <p data-height="307" data-theme-id="0" data-slug-hash={id} data-default-tab="js,result" data-user="swizec" data-embed-version="2" data-editable="true" className="codepen">See the Pen <a href={`https://codepen.io/swizec/pen/${id}`}>{title}</a> by Swizec Teller (<a href="http://codepen.io/swizec">@swizec</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    </div>
);

export const Declarations = () => (
    <Row>
        <WideLeftColumn>
            <Codepen id="qNYoxO" title="Variable Declarations - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="XKqExA" title="Variable Declarations - ES6" />
            <Codepen id="NArYoL" title="Variable Declarations - ES6, const" />
            <Codepen id="WxJzWY" title="Variable Declarations - ES6, const2" />
        </RightColumn>
    </Row>
);
