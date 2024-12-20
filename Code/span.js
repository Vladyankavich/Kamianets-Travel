import { Tag } from "./tag.js";

export class Span extends Tag {
    constructor() {
        super();
        this.text = "";
    }

    setText(value) {
        this.text = value;
    }

    create() {
        const span = document.createElement("span");
        span.innerHTML = this.text;

        this.processAttribute(span);
        this.processChild(span);

        return span;
    }
}