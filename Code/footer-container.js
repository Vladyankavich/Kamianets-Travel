import {HTMLObject} from "./html-object.js";
import {Image} from "./image.js";
import {Footer} from "./footer.js";
import {Div} from "./div.js";
import {Button} from "./button.js";
import {Link} from "./link.js";

export class FooterContainer extends HTMLObject {
    create() {
        const footer = new Footer();

        const footer_container = new Div();
        footer_container.setClass("footer_container");

        const button_1 = new Button();
        button_1.setClass("footer_button");
        const link_1 = new Link("https://mail.google.com/");
        const  image_1 = new Image("./Image/Logo/e-mail.svg", "E-mail");
        image_1.setClass("footer_image");
        link_1.addChild(image_1);
        button_1.addChild(link_1);

        const button_2 = new Button();
        button_2.setClass("footer_button");
        const link_2 = new Link("https://telegram.org/");
        const  image_2 = new Image("./Image/Logo/telegram.svg", "Telegram");
        image_2.setClass("footer_image");
        link_2.addChild(image_2);
        button_2.addChild(link_2);

        const button_3 = new Button();
        button_3.setClass("footer_button");
        const link_3 = new Link("https://www.instagram.com/");
        const  image_3 = new Image("./Image/Logo/instagram.svg", "Instagram");
        image_3.setClass("footer_image");
        link_3.addChild(image_3);
        button_3.addChild(link_3);

        footer_container.addChild(button_1).addChild(button_2).addChild(button_3);

        footer.addChild(footer_container);

        return footer.create();
    }
}