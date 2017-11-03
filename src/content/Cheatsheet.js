import React from "react";
import { Row } from "react-bootstrap";

import {
    WideLeftColumn,
    RightColumn,
    SingleColumn
} from "../components/Columns";

const Codepen = ({ id, title, height = 307 }) => (
    <div>
        <iframe
            height={height || 307}
            scrolling="no"
            src={`//codepen.io/swizec/embed/${id}/?height=${height ||
                307}&theme-id=light&default-tab=js&embed-version=2`}
            frameBorder="no"
            allowTransparency="true"
            allowFullScreen="true"
            style={{ width: "100%" }}
        >
            See the Pen{" "}
            <a href={`http://codepen.io/swizec/pen/${id}/`}>{title}</a> by
            Swizec Teller (<a href="http://codepen.io/swizec">@swizec</a>) on{" "}
            <a href="http://codepen.io">CodePen</a>.
        </iframe>
    </div>
);

export const Declarations = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    One of the biggest sources of bugs and confusion in
                    JavaScript has been variable scoping. Without{" "}
                    <code>var</code> everything was global, with{" "}
                    <code>var</code> it was better but still weird. ES6 brings
                    us <code>let</code> and <code>const</code> with proper{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping"
                        target="_blank"
                    >
                        lexical scoping
                    </a>, which makes it easier to understand where a variable
                    is and isn't defined.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="qNYoxO" title="Variable Declarations - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="XKqExA" title="Variable Declarations - ES6" />
            <p>
                Constants follow the same scoping rules, but their value cannot
                be reassigned. <code>const</code> protects you against
                accidentally changing variables. It's good to use it for
                everything by default.
            </p>
            <Codepen id="NArYoL" title="Variable Declarations - ES6, const" />
            <p>
                Careful, though. Constants are tricky with arrays and objects.
                The <i>reference</i> becomes constant, but the value does not.
            </p>
            <Codepen id="WxJzWY" title="Variable Declarations - ES6, const2" />
        </RightColumn>
    </Row>
);

/* eslint-disable no-template-curly-in-string */
export const Strings = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    String templates are one of my favorite ES6 features.
                    They're amazing! They make it easy to put variables into
                    strings, which often comes handy. Just wrap something in
                    backticks <code>`</code> and you can insert any JavaScript
                    code with <code>{"${...}"}</code>. Just don't get carried
                    away.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="ZOodXw" title="No string templates - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="QEAXOA" title="String templates - ES6" />
        </RightColumn>
    </Row>
);
/* eslint-enable no-template-curly-in-string */

export const Destructuring = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    Destructuring is another magnificent feature. It gives you a
                    convenient syntax to extract values from objects and arrays.
                    Using it feels kind of like drawing the shape of your
                    object, and JavaScript filling-in the blanks.{" "}
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="JKvmRB" title="Variable Destructuring - ES5" />
            <Codepen id="akGgNx" title="Object Destructuring - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="GqdYNV" title="Array Destructuring - ES6" />
            <Codepen id="VjxEPg" title="Object Destructuring - ES6" />
            <p>
                I consider the spread operator a subset of destructuring. It's a
                convenient way to get "everything else that remains". This is
                more commonly needed in pure functional programming, but it's
                useful to have available.
            </p>
            <Codepen id="ZOoqZa" title="Spread Operator - ES6" />
        </RightColumn>
    </Row>
);

export const ArrowFunctions = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    Now this, this is the workhorse of modern JavaScript! The
                    trusty arrow function. The thing that got everyone so
                    excited when ES6 first started shaping up.
                </p>
                <p>
                    So what's the deal? <code>this</code> has historically been
                    one of the trickiest parts of using JavaScript. Because of{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Scope_(computer_science)#Dynamic_scoping"
                        target="_blank"
                    >
                        dynamic scoping
                    </a>{" "}
                    you could never quite tell what <code>this</code> would
                    point to in a function. It points to "current scope", which
                    is different than the scope in which you defined your
                    function. To many (most?) this is confusing.
                </p>
                <p>
                    Several more or less elegant ways emerged to deal with the
                    confusion. Using <code>.bind()</code> is perhaps the best
                    approach. But with arrow functions, you don't need any of
                    that. An arrow function is always bound to the scope it's
                    defined in. That means you can pass it around and its{" "}
                    <code>this</code> variable will always point the same.
                </p>
                <p>
                    Arrow functions also use cleaner syntax, which makes them
                    nicer to use as iterators. Which just so happens to be the
                    most common reason you need binding.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="AXaGXY" title="Function Definitions - ES5" />
            <Codepen id="OXkZbm" title="This binding - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="yJjdrx" title="Fat arrow functions - ES6" />
            <Codepen id="RRyzpG" title="Lexical this - ES6" />
        </RightColumn>
    </Row>
);

export const FunctionParameters = () => (
    <Row>
        <Row>
            <SingleColumn>
                <a name="function-params" />
                <p>
                    Function parameters in ES6 are sort of a special case of
                    destructuring. All that icky stuff we used to do to achieve
                    named params, default params, and optional params? No need.
                    ES6 has you covered.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="dXZBdr" title="Schleppy default params - ES5" />
            <p>
                <br />
                <br />
            </p>
            <Codepen id="pbVXLx" title="Schleppy rest params - ES5" />
            <p>
                A common pattern for named params has been to pass around an
                object. If you can't remember which keys a function expects,
                tough.<br />
            </p>
            <Codepen id="BzxgVJ" title="Schleppy named params - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="OXkZvx" title="Default params - ES6" />
            <p>
                The spread operator in params is especially useful when you need
                something like <code>(a, b, ...everythingElse)</code>.
            </p>
            <Codepen id="zBjVjg" title="Rest params - ES6" />
            <p>
                Behind the scenes, named params are just an object that's passed
                around. You can keep your old function calls, and just change
                the functions.
            </p>
            <Codepen id="dXZBjX" title="Named params - ES6" />
        </RightColumn>
    </Row>
);

export const Classes = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    I am personally both a fan of classes <i>and</i> think they
                    were the wrong step for JavaScript to take. Yes, they make
                    object oriented programming (OOP) a whole lot nicer, which
                    is good, but they also encourage it. I like to use objects
                    as bags-of-methods, and avoid traditional OOP architectures.
                </p>
                <p>
                    That said, classes <i>are</i> useful and ES6 syntax sugar{" "}
                    <i>does</i> make them much easier to use. The biggest
                    improvement is to class inheritance.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="EyLBzj" title="Classes - ES5" />
            <p>
                Class inheritance in ES5 is particularly painful. Calling parent
                methods involves dynamic scoping shenanigans with{" "}
                <code>.call</code>, and you have to be careful when defining
                your constructor.
            </p>
            <Codepen id="OXkZKk" title="Inheritance - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="qNYZEq" title="Classes - ES6" />
            <p>
                ES6 improves class inheritance with <code>extends</code>. And{" "}
                <code>super</code> lets you refer to the parent object at any
                time. Please don't get carried away with class hierarchies.
            </p>
            <Codepen id="WxJVbL" title="Inheritance - ES6" />
        </RightColumn>
    </Row>
);

export const GettersSetters = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    I'm still not sure how <i>useful</i> getters and setters
                    are, but they definitely look cool. There's nothing like it
                    in ES5, but similar features do exist in other languages.
                </p>
                <p>
                    The concept is simple: you define an object property that is
                    actually a function, or a pair of functions. With getters,
                    it's a neat way to manipulate data when it's accessed. With
                    setters, it's a neat way to validate data when it's set.
                </p>
                <p>
                    You <i>could</i> just use functions directly, but this is a
                    nice abstraction.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn />
        <RightColumn>
            <Codepen id="AXaZWj" title="Getters/Setters - ES6" height={507} />
        </RightColumn>
    </Row>
);

export const Modules = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    ES6 gave us a native way to organize our code into modules:{" "}
                    <code>import</code> and <code>export</code>. It's a cleaner
                    and more feature-full way of doing <code>require()</code>,
                    which was never part of the official spec anyway.
                </p>
                <p>
                    What I like about modules, is that you can explicitly define{" "}
                    <i>what</i> you're taking out of a file. Look at the top of
                    the file and you know exactly what it uses. No more fishing
                    around to find actual use cases.
                </p>
                <p>
                    Another nice feature is that you can give your own names to
                    imported things. This is especially useful when semantic
                    meaning of a function or class differs between modules. It
                    happens more than you'd think.
                </p>
                <p>
                    These code samples don't work in CodePen, so you'll have to
                    take my word for it.
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="zBjgBA" title="require() - ES5" height={407} />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="rLvXrN" title="modules - ES6" height={407} />
        </RightColumn>
    </Row>
);

export const DataModels = () => (
    <Row>
        <Row>
            <SingleColumn>
                <p>
                    JavaScript finally got real hashmaps and sets. No longer
                    will we have to rely on pretending that objects are hashes,
                    and, well, sets didn't even exist. So yeah ...
                </p>
                <p>
                    Both give you some nice ways to interact with your data, are
                    generally more robust against weird things happening (I'm
                    looking at you object values that become functions by
                    accident), and are almost never used in real code. Not that
                    I've seen at least.
                </p>
                <p>
                    Sets aren't that handy in most frontend web development, and
                    the terser syntax of "objects as hashes" means most people
                    keep using them. But these are good features that made many
                    people excited so here we are. :)
                </p>
            </SingleColumn>
        </Row>
        <WideLeftColumn>
            <Codepen id="akGZJB" title="hash - ES5" />
        </WideLeftColumn>
        <RightColumn>
            <Codepen id="dXZxRV" title="Hash - ES6" />
            <Codepen id="wWjVpO" title="Set - ES6" />
        </RightColumn>
    </Row>
);

export const Promises = () => (
    <Row>
        <Row>
            <SingleColumn />
        </Row>
        <WideLeftColumn />
        <RightColumn />
    </Row>
);

export const Async = () => (
    <Row>
        <Row>
            <SingleColumn />
        </Row>
        <WideLeftColumn />
        <RightColumn />
    </Row>
);
