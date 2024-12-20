import { Tag } from "./tag.js";

export class Div extends Tag {
    constructor() {
        super();
        this.text = "";
    }

    setText(value) {
        this.text = value;

        return this;
    }

    create() {
        const div = document.createElement("div");
        div.innerHTML = this.text;

        this.processAttribute(div);
        this.processChild(div);

        return div;
    }
}