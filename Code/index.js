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
import {CafeBarsSection} from "./cafe-bars-section.js";
import {Body} from "./body.js";
import {FooterContainer} from "./footer-container.js";
import {ContentAnimator} from "./content-animator.js";

window.addEventListener("DOMContentLoaded", () => {
    const body = new Body();
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
    const cafeBarsSection = new CafeBarsSection();
    const footerContainer = new FooterContainer();
    const contentAnimator = new ContentAnimator();

    headerDiv.setClass("header");
    headerDiv.addChild(mainMenu).addChild(burgerMenu).addChild(logo).addChild(audioplayer);
    header.addChild(headerDiv);
    main.addChild(title).addChild(prologueSection).addChild(interestingPlacesSection);
    main.addChild(hotelsSection).addChild(restaurantsSection).addChild(cafeBarsSection);
    body.addChild(header).addChild(border).addChild(main).addChild(footerContainer);
    body.create();

    window.addEventListener('scroll', contentAnimator.play);
});