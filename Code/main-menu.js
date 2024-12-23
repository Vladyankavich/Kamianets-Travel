import {HTMLObject} from "./html-object.js";
import {Div} from "./div.js";
import {Button} from "./button.js";
import {Span} from "./span.js";
import {Link} from "./link.js";
import {Navigation} from "./navigation.js";

export class MainMenu extends HTMLObject {
    create() {
        const navigation = new Navigation();
        navigation.setClass("navigation");

        const navWrapper = new Div();
        navWrapper.setClass("nav_wrapper");

        const close = new Button();        
        close.setClass("close_button");
        close.setText(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10"
            class="close_button__cross">
            <path d="M1.41431.707107l7.7781746 7.7781746-.70710679.70710677-7.7781746-7.77817459z">
            </path>
            <path d="M.707351 8.48535L8.4855256.7071754l.70710677.70710679-7.77817459 7.7781746z">
            </path>
        </svg>`)

        const spanClose = new Span();
        spanClose.setClass("close_button__circle_wrapper");
        spanClose.setText(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"
                                class="close_button__circle">
                                <circle cx="20" cy="20" r="19.5" opacity=".5"></circle>
                            </svg>`);

        const navigationMain = new Div();
        navigationMain.setClass("navigation_main");

        const button_1 = new Button();
        const link_1 = new Link("#");
        link_1.setText("Про Кам’янець");
        button_1.addChild(link_1);

        const button_2 = new Button();
        const link_2 = new Link("#");
        link_2.setText("Цікаві місця");
        button_2.addChild(link_2);

        const button_3 = new Button();
        const link_3 = new Link("#");
        link_3.setText("Готелі");
        button_3.addChild(link_3);

        const button_4 = new Button();
        const link_4 = new Link("#");
        link_4.setText("Ресторани");
        button_4.addChild(link_4);

        const button_5 = new Button();
        const link_5 = new Link("#");
        link_5.setText("Кафе та бари");
        button_5.addChild(link_5);

        close.addChild(spanClose);
        navigationMain.addChild(button_1).addChild(button_2).addChild(button_3).addChild(button_4).addChild(button_5);
        navWrapper.addChild(close).addChild(navigationMain);

        navigation.addChild(navWrapper);

        close.subscribeToClickEvent(() => {
            const navigation = document.querySelector(".navigation");            
            const closeButton = document.querySelector(".close_button");
            const closeButtonCross = document.querySelector(".close_button__cross");
            const closeButtonCircle = document.querySelector(".close_button__circle");

            navigation.classList.remove("nav_visible");
            closeButton.classList.remove("close_button__visible");
            closeButtonCross.classList.remove("close_button__visible");
            closeButtonCircle.classList.remove("close_button__visible");
        })

        return navigation.create();
    }
}