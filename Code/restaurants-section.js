import {HTMLObject} from "./html-object.js";
import {Div} from "./div.js";
import {Section} from "./section.js";
import {Heading, HeadingType} from "./heading.js";
import {Image} from "./image.js";
import {Paragraph} from "./paragraph.js";
import {RESTAURANTS_CHAPTER_DATA} from "./chapters-data.js";

export class RestaurantsSection extends HTMLObject {
    getDescriptionsAboutRestaurants() {
        const descriptions = [];

        RESTAURANTS_CHAPTER_DATA.forEach(chapterData => {
            // let indent = false;
            const div = new Div();
            div.setClass("restaurant");

            const image = new Image(chapterData.image, chapterData.title);
            image.setClass("restaurant_image");

            const heading = new Heading(HeadingType.H3, chapterData.title);
            const restaurantDescription = new Div();
            restaurantDescription.setClass("restaurant_description");
            restaurantDescription.addChild(heading);

            chapterData.descriptions.forEach(description => {
                const paragraph = new Paragraph(description);

                restaurantDescription.addChild(paragraph);
            });

            div.addChild(image).addChild(restaurantDescription);
            descriptions.push(div);
        });

        return descriptions;
    }

    create() {
        const heading = new Heading(HeadingType.H2, "Ресторани");
        heading.setClass("h_name");

        const section = new Section();
        section.setId("section_restaurants").addChild(heading);
        section.addChildren(this.getDescriptionsAboutRestaurants());

        return section.create();
    }
}