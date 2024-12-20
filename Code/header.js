import { Tag } from "./tag.js";

export class Header extends Tag {
    constructor() {
        super();
    }

    create() {
        const header = document.createElement("header");
        
        this.processAttribute(header);
        this.processChild(header);

        return header;
    }
}