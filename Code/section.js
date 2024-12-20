import { Tag } from "./tag.js";

export class Section extends Tag {
    constructor() {
        super();
    }

    create() {
        const section = document.createElement("section");
        
        this.processAttribute(section);
        this.processChild(section);

        return section;
    }
}