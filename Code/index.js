import { Audioplayer } from "./audio-player.js";
import { Border } from "./border.js";
import { BurgerMenu } from "./burger-menu.js";
import { Div } from "./div.js";
import { Header } from "./header.js";
import { Logo } from "./logo.js";
import { Main } from "./main.js";
import { MainMenu } from "./main-menu.js";

window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const header = new Header();
    const headerDiv = new Div();
    const mainMenu = new MainMenu();
    const burgerMenu = new BurgerMenu();
    const logo = new Logo();
    const audioplayer = new Audioplayer();
    const border = new Border();
    const main = new Main();
    
    headerDiv.setClass("header");
    // navigation.setClass("navigation nav--visible");
    headerDiv.addChild(mainMenu).addChild(burgerMenu).addChild(logo).addChild(audioplayer);
    header.addChild(headerDiv); 

    body.append(header.create(), border.create(), main.create());
});