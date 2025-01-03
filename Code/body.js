import {Tag} from "./tag.js";
import {Script} from "./script.js";

export class Body extends Tag {
    constructor() {
        super();
    }

    getImportedScripts() {
        const scripts = [
            new Script("./Code/chapters-data.js"),
            new Script("./Code/html-object.js"),
            new Script("./Code/attribute.js"),
            new Script("./Code/tag.js"),
            new Script("./Code/body.js"),
            new Script("./Code/header.js"),
            new Script("./Code/border.js"),
            new Script("./Code/main.js"),
            new Script("./Code/image.js"),
            new Script("./Code/div.js"),
            new Script("./Code/span.js"),
            new Script("./Code/button.js"),
            new Script("./Code/paragraph.js"),
            new Script("./Code/visible-element.js"),
            new Script("./Code/navigation.js"),
            new Script("./Code/section.js"),
            new Script("./Code/heading.js"),
            new Script("./Code/burger-menu.js"),
            new Script("./Code/logo.js"),
            new Script("./Code/audio-player.js"),
            new Script("./Code/main-menu.js"),
            new Script("./Code/title.js"),
            new Script("./Code/prologue-section.js"),
            new Script("./Code/interesting-places-section.js"),
            new Script("./Code/hotels-section.js"),
            new Script("./Code/restaurants-section.js"),
            new Script("./Code/cafe-bars-section.js"),
            new Script("./Code/footer.js"),
            new Script("./Code/footer-container.js")
        ];

        return scripts;
    }
    
    create() {
        const body = document.querySelector("body");

        this.processAttribute(body);
        this.processChild(body);
        this.getImportedScripts().forEach((script) => {
            body.append(script.create());
        });

        return body;
    }
}