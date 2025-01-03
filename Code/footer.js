import { Tag } from "./tag.js";

export class Footer extends Tag {
    constructor() {
        super();
    }

    create() {
        const footer = document.createElement("footer");

        this.processAttribute(footer);
        this.processChild(footer);

        return footer;
    }
}