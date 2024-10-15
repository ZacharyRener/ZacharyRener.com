import React from "react";

const Wysiwyg = ({ content }) => {
    return (
        <div className="wysiwyg">
            <div class="p-inner">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </div>
    );
};

export default Wysiwyg;
