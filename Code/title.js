import { Div } from "./div.js";
import {Section} from "./section.js";
import {Heading, HeadingType} from "./heading.js";
import {HTMLObject} from "./html-object.js";

export class Title extends HTMLObject {
    create() {
        const heading = new Heading(HeadingType.H2, "СТАРА ФОРТЕЦЯ");

        const div = new Div();
        div.setClass("background");
        div.addChild(heading);

        const section = new Section();
        section.setId("section_title");
        section.addChild(div);

        return section.create();
    }
}