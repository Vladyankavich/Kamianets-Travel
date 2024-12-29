import {Audioplayer} from "./audio-player.js";
import {Border} from "./border.js";
import {BurgerMenu} from "./burger-menu.js";
import {Div} from "./div.js";
import {Header} from "./header.js";
import {Logo} from "./logo.js";
import {Main} from "./main.js";
import {MainMenu} from "./main-menu.js";
import {Title} from "./title.js";
import {PrologueSection} from "./prologue-section.js";
import {InterestingPlacesSection} from "./interesting-places-section.js";
import {HostelsSection} from "./hotels-section.js";
import {RestaurantsSection} from "./restaurants-section.js";
import {KafeBarsSection} from "./kafe-bars-section.js";

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
    const title = new Title();
    const prologueSection = new PrologueSection();
    const interestingPlacesSection = new InterestingPlacesSection();
    const hotelsSection = new HostelsSection();
    const restaurantsSection = new RestaurantsSection();
    const кafeBarsSection = new KafeBarsSection();
    
    headerDiv.setClass("header");
    headerDiv.addChild(mainMenu).addChild(burgerMenu).addChild(logo).addChild(audioplayer);
    header.addChild(headerDiv);
    main.addChild(title).addChild(prologueSection).addChild(interestingPlacesSection);
    main.addChild(hotelsSection).addChild(restaurantsSection).addChild(кafeBarsSection);

    body.append(header.create(), border.create(), main.create());
});