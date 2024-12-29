import {HTMLObject} from "./html-object.js";
import {Div} from "./div.js";
import {Section} from "./section.js";
import {Heading, HeadingType} from "./heading.js";
import {Image} from "./image.js";
import {Paragraph} from "./paragraph.js";
import {KAFE_BARS_CHAPTER_DATA} from "./chapters-data.js";

export class KafeBarsSection extends HTMLObject {
    getDescriptionsAboutKafeBars() {
        const descriptions = [];

        KAFE_BARS_CHAPTER_DATA.forEach(chapterData => {
            // let indent = false;
            const div = new Div();
            div.setClass("kafe_bar");

            const image = new Image(chapterData.image, chapterData.title);
            image.setClass("kafe_bar_image");

            const heading = new Heading(HeadingType.H3, chapterData.title);
            const kafeBarDescription = new Div();
            kafeBarDescription.setClass("kafe_bar_description");
            kafeBarDescription.addChild(heading);

            chapterData.descriptions.forEach(description => {
                const paragraph = new Paragraph(description);

                kafeBarDescription.addChild(paragraph);
            });

            div.addChild(image).addChild(kafeBarDescription);
            descriptions.push(div);
        });

        return descriptions;
    }

    create() {
        const heading = new Heading(HeadingType.H2, "Кафе та бари");
        heading.setClass("h_name");

        const section = new Section();
        section.setId("section_kafe_bars").addChild(heading);
        section.addChildren(this.getDescriptionsAboutKafeBars());

        return section.create();
    }
}