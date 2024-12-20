import { Tag } from "./tag.js";

export class Main extends Tag {
    constructor() {
        super();
    }

    create() {
        const main = document.createElement("main");
        
        this.processAttribute(main);
        this.processChild(main);

        return main;
    }
}