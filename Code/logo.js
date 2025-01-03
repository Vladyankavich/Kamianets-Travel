import { HTMLObject } from "./html-object.js";
import { Image } from "./image.js";
import { Div } from "./div.js";
import {Link} from "./link.js";

export class Logo extends HTMLObject {
    create() {
        const image = new Image("./Image/Logo/logo.png", "muzeum");

        const link = new Link("#");
        link.setClass("header_button_logo");
        link.addChild(image);
        
        const div = new Div();
        div.setClass("header_logo");
        div.addChild(link);

        return div.create();
    }
}