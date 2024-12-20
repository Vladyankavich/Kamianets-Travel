import { Tag } from "./tag.js";

export class Navigation extends Tag {
    constructor() {
        super();
    }

    create() {
        const nav = document.createElement("nav");

        this.processAttribute(nav);
        this.processChild(nav);

        return nav;
    }
}