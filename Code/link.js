import { Tag } from "./tag.js";

export class Link extends Tag {
    constructor(href) {
        super();
        this.text = "";
        this.setAttribute("href", href);
    }

    setText(value) {
        this.text = value;
    }

    create() {
        const link = document.createElement("a");
        link.innerHTML = this.text;

        this.processAttribute(link);
        this.processChild(link);

        return link;
    }
}