import {HTMLObject} from "./html-object.js";
import {Div} from "./div.js";
import {Section} from "./section.js";
import {Heading, HeadingType} from "./heading.js";
import {Image} from "./image.js";
import {Paragraph} from "./paragraph.js";
import {
    HOTELS_CHAPTER_DATA, IMAGE_SIZE_BIG, IMAGE_SIZE_SMALL
} from "./chapters-data.js";

export class HostelsSection extends HTMLObject {
    getDescriptionsAboutHostels() {
        const descriptions = [];

        HOTELS_CHAPTER_DATA.forEach(chapterData => {
            // let indent = false;
            const div = new Div();
            div.setClass("hotel");

            const image = new Image(chapterData.image, chapterData.title);
            image.setClass("hotel_image");

            switch (chapterData.imageSize) {
                case IMAGE_SIZE_BIG: {
                    image.setClass("width_image_big");
                    break;
                }
                case IMAGE_SIZE_SMALL: {
                    image.setClass("width_image_small");
                    break;
                }
            }

            const heading = new Heading(HeadingType.H3, chapterData.title);
            const hotelDescription = new Div();
            hotelDescription.setClass("hotel_description");
            hotelDescription.addChild(heading);

            chapterData.descriptions.forEach(description => {
                const paragraph = new Paragraph(description);

                hotelDescription.addChild(paragraph);
            });

            div.addChild(image).addChild(hotelDescription);
            descriptions.push(div);
        });

        return descriptions;
    }

    create() {
        const heading = new Heading(HeadingType.H2, "Готелі");
        heading.setClass("h_name");

        const section = new Section();
        section.setId("section_hotels").addChild(heading);
        section.addChildren(this.getDescriptionsAboutHostels());

        return section.create();
    }
}

