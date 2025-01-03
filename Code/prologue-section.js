import {HTMLObject} from "./html-object.js";
import {Div} from "./div.js";
import {Section} from "./section.js";
import {Heading, HeadingType} from "./heading.js";
import {Image} from "./image.js";
import {Link} from "./link.js";
import {Paragraph} from "./paragraph.js";
import {CITY_CHAPTER_DATA, IMAGE_POSITION_LEFT, IMAGE_POSITION_RIGHT} from "./chapters-data.js";
import {VisibleElement} from "./visible-element.js";

export class PrologueSection extends HTMLObject {
    getDescriptionsAboutKamenets() {
        const descriptions = [];

        CITY_CHAPTER_DATA.forEach(chapterData => {
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
                    image.setClass("image_big");

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
        const heading = new Heading(HeadingType.H2, "Кам’янець-Подільський");
        heading.setClass("h_name");


        const section = new Section();
        section.setId("section_prologue").addChild(heading);
        section.addChildren(this.getDescriptionsAboutKamenets());

        const visibleElement = new VisibleElement();
        visibleElement.visibility();

        return section.create();
    }


}