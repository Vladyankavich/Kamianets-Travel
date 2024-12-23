import {HTMLObject} from "./html-object.js";
import {Div} from "./div.js";
import {Section} from "./section.js";
import {Heading, HeadingType} from "./heading.js";
import {Image} from "./image.js";
import {Link} from "./link.js";
import {Paragraph} from "./paragraph.js";
import {
    IMAGE_POSITION_LEFT,
    IMAGE_POSITION_RIGHT,
    IMAGE_SIZE_BIG,
    IMAGE_SIZE_SMALL,
    INTERESTING_PLACES_CHAPTER_DATA
} from "./chapters-data.js";

export class InterestingPlaces extends HTMLObject {
    getDescriptionsAboutInterestingPlaces() {
        const descriptions = [];

        INTERESTING_PLACES_CHAPTER_DATA.forEach(chapterData => {
            let indent = false;

            chapterData.descriptions.forEach(description => {
                const paragraph = new Paragraph(description);

                const div = new Div();
                div.setClass("description");

                if (indent) {
                    div.setClass("description_indent");
                } else {
                    const link = new Link(chapterData.link);
                    link.setClass("blue_link").setText(chapterData.title);

                    const image = new Image(chapterData.image, chapterData.title);

                    switch (chapterData.imageSize) {
                        case IMAGE_SIZE_BIG: {
                            image.setClass("image_big");
                            break;
                        }
                        case IMAGE_SIZE_SMALL: {
                            image.setClass("image_small");
                            break;
                        }
                    }

                    switch (chapterData.imagePosition) {
                        case IMAGE_POSITION_LEFT: {
                            image.setClass("image_left_from_text");
                            break;
                        }
                        case IMAGE_POSITION_RIGHT: {
                            image.setClass("image_right_from_text");
                            break;
                        }
                    }

                    div.addChild(image).addChild(link);
                    indent = true;
                }

                div.addChild(paragraph);
                descriptions.push(div);
            });
        });

        return descriptions;
    }

    create() {
        const heading = new Heading(HeadingType.H2, "Цікаві місця");
        heading.setClass("h_name");

        const section = new Section();
        section.setId("section_interesting_places").addChild(heading);
        section.addChildren(this.getDescriptionsAboutInterestingPlaces());

        return section.create();
    }


}