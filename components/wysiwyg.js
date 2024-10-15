import React from "react";

const Wysiwyg = ({ content }) => {
    return (
        <div className="wysiwyg">
            <div class="p-inner">
                <div
                    uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small zr-animation;delay:0; repeat: false;"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </div>
        </div>
    );
};

export default Wysiwyg;
