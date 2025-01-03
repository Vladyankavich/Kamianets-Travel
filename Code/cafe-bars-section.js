import {HTMLObject} from "./html-object.js";
import {Div} from "./div.js";
import {Section} from "./section.js";
import {Heading, HeadingType} from "./heading.js";
import {Image} from "./image.js";
import {Paragraph} from "./paragraph.js";
import {CAFE_BARS_CHAPTER_DATA} from "./chapters-data.js";

export class CafeBarsSection extends HTMLObject {
    getDescriptionsAboutCafeBars() {
        const descriptions = [];

        CAFE_BARS_CHAPTER_DATA.forEach(chapterData => {
            // let indent = false;
            const div = new Div();
            div.setClass("сafe_bar");

            const image = new Image(chapterData.image, chapterData.title);
            image.setClass("сafe_bar_image");

            const heading = new Heading(HeadingType.H3, chapterData.title);
            const cafeBarDescription = new Div();
            cafeBarDescription.setClass("сafe_bar_description");
            cafeBarDescription.addChild(heading);

            chapterData.descriptions.forEach(description => {
                const paragraph = new Paragraph(description);

                cafeBarDescription.addChild(paragraph);
            });

            div.addChild(image).addChild(cafeBarDescription);
            descriptions.push(div);
        });

        return descriptions;
    }

    create() {
        const heading = new Heading(HeadingType.H2, "Кафе та бари");
        heading.setClass("h_name");

        const section = new Section();
        section.setId("section_сafe_bars").addChild(heading);
        section.addChildren(this.getDescriptionsAboutCafeBars());

        return section.create();
    }
}