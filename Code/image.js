import { Tag } from "./tag.js";

export class Image extends Tag {
    constructor(src, alt) {
        super();
        this.setAttribute("src", src);
        this.setAttribute("alt", alt);
    }

    create() {
        const image = document.createElement("img");
        
        this.processAttribute(image);
        this.processChild(image);

        return image;
    }
}