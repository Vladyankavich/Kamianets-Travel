import { Tag } from "./tag.js";

export class HeadingType {
    static H1 = "h1";
    static H2 = "h2";
    static H3 = "h3";
    static H4 = "h4";
    static H5 = "h5";
    static H6 = "h6";
}

export class Heading extends Tag {
    constructor(type, text) {
        super();
        this.type = type;
        this.text = text;
    }

    create() {
        const heading = document.createElement(this.type);
        heading.innerHTML = this.text;

        this.processAttribute(heading);
        this.processChild(heading);

        return heading;
    }
}