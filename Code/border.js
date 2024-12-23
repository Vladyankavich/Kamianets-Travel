import { HTMLObject } from "./html-object.js";
import { Div } from "./div.js";

export class Border extends HTMLObject{
    create() {
        const border = new Div()

        border.setClass("border");

        return border.create();
    }
}