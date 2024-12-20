import {Tag} from "./tag.js";

export class Paragraph extends Tag {
    constructor(text) {
        super();
        this.text = text;
    }

    create() {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = this.text;

        this.processAttribute(paragraph);
        this.processChild(paragraph);

        return paragraph;
    }
}