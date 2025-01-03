import { HTMLObject } from "./html-object.js";
import { Image } from "./image.js";
import { Div } from "./div.js";
import { Span } from "./span.js";
import { Button } from "./button.js";

export class BurgerMenu extends HTMLObject {
    create() {
        const span = new Span();
        span.setText("Menu");
        span.setClass("header__label");

        const image = new Image("./Image/Logo/burger-menu.png", "burger-menu");

        const div = new Div();
        div.setClass("header_burger");
        div.addChild(image);

        const button = new Button();
        button.setClass("header_toggle");
        button.addChild(span).addChild(div);

        button.subscribeToClickEvent(() => {
            const navigation = document.querySelector(".navigation");            
            const closeButton = document.querySelector(".close_button");
            const closeButtonCross = document.querySelector(".close_button__cross");
            const closeButtonCircle = document.querySelector(".close_button__circle");

            navigation.classList.add("nav_visible");
            closeButton.classList.add("close_button__visible");
            closeButtonCross.classList.add("close_button__visible");
            closeButtonCircle.classList.add("close_button__visible");
        })

        return button.create();
    }
}

