import {Tag} from "./tag.js";

export class Script extends Tag {
    constructor(src) {
        super();
        this.defer = "defer";
        this.type = "module";
        this.src = src;
    }
    
    create() {
        const script = document.createElement("script");
        script.defer = this.defer;
        script.type = this.type;
        script.src = this.src;

        this.processAttribute(script);
        this.processChild(script);

        return script;
    }
}