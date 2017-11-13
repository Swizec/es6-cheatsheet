import React from "react";

export const Codepen = ({ id, title, height = 307 }) => (
    <div>
        <iframe
            height={height || 307}
            scrolling="no"
            src={`//codepen.io/swizec/embed/${id}/?height=${height ||
                307}&theme-id=light&default-tab=js&embed-version=2&editable=true`}
            frameBorder="no"
            allowTransparency="true"
            allowFullScreen="true"
            style={{ width: "100%" }}
            title={title}
        >
            See the Pen{" "}
            <a href={`http://codepen.io/swizec/pen/${id}/`}>{title}</a> by
            Swizec Teller (<a href="http://codepen.io/swizec">@swizec</a>) on{" "}
            <a href="http://codepen.io">CodePen</a>.
        </iframe>
    </div>
);
