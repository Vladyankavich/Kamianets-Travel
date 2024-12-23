import { HTMLObject } from "./html-object.js";
import { Image } from "./image.js";
import { Div } from "./div.js";

export class Logo extends HTMLObject {
    create() {
        const image = new Image("./Image/logo.png", "muzeum");
        
        const div = new Div();
        div.setClass("header_logo");
        div.addChild(image);

        return div.create();
    }
}