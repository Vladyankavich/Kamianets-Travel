import {Div} from "./div.js";
import {Section} from "./section.js";
import {Heading, HeadingType} from "./heading.js";
import {HTMLObject} from "./html-obgect.js";
import {Image} from "./image.js";
import {Link} from "./link.js";
import {Paragraph} from "./paragraph.js";

export class Prologue extends HTMLObject {
    getDescriptionsAboutKamenets() {
        const paragraphs = [
            new Paragraph("— одне з найдавніших міст України, (колишні назви — Кам'янець, у 1795—1944 роках — Кам'янець-Подільськ) — місто на південному-заході України, на Поділлі, одне з двох найбільших міст Хмельницької області, адміністративний, політичний, релігійний центр Кам'янець-Подільського району та Кам'янець-Подільської міської громади. Місто розташоване на берегах річки Смотрич. Місто магдебурзького права, один з головних центрів історичного регіону Поділля."),
            new Paragraph(`Королівське місто в складі Речі Посполитої, історично головна
            адміністративно-територіальна одиниця Західного Поділля, з 22 березня 1919 по листопад 1920 року — столиця УНР, колишній обласний центр Кам'янець-Подільської області (1937—1954), з перервами місто було центром: князівства, воєводства, намісництва, губернії, землі, округу, області, району. Центр римо-католицької церкви Кам'янець-Подільської дієцезії (1378), Кам'янець-Подільської єпархії
            греко-католицької церкви (2015) та Кам'янець-Подільської єпархії православної церкви України (2024). Місто вважають значним українським фестивальним осередком в Західній Україні та неофіційною столицею українського повітроплавання. Входить до всеукраїнської Асоціації міст. Має свій <a class="blue_link" href="https://uk.wikipedia.org/wiki/Герб_Кам%27янця-Подільського">герб</a> та <a class="blue_link"
            href="https://uk.wikipedia.org/wiki/Прапор_Кам%27янця-Подільського">прапор</a>.`),
            new Paragraph("Також у Кам'янці-Подільському знаходяться численні історико-архітектурні пам'ятки — Національний історико-архітектурний заповідник, Історичний музей-заповідник, Фортеця (XIV—XVI століття, перебудована у XVII—XVIII столітті), Петропавлівський кафедральний костел (XVI століття), Костел святого Миколая (XV—XVIII століття), дерев'яна Хрестовоздвиженська церква (XVIII століття), унікальні кам'яниці епохи Ренесансу (XVI—XVIII століття), Дзвіниця святого Степаноса (XV—XVI століття), Башта Стефана Баторія (XVI століття) тощо. Місто занесене до попереднього списку Всесвітньої спадщини ЮНЕСКО.")
        ];

        const link = new Link("https://uk.wikipedia.org/wiki/Кам%27янець-Подільський");
        link.setClass("blue_link").setText("Кам'янець-Подільський");

        const image = new Image("./Image/kamenets.png", "Кам’янець-Подільський");
        image.setClass("image_left_from_text").setClass("image_big");

        const descriptions = [
            new Div().setClass("description").addChild(image).addChild(link).addChild(paragraphs[0]),
            new Div().setClass("description").setClass("description_indent").addChild(paragraphs[1]),
            new Div().setClass("description").setClass("description_indent").addChild(paragraphs[2])
        ]

        return descriptions;
    }

    create() {
        const heading = new Heading(HeadingType.H2, "Кам’янець-Подільський");
        heading.setClass("h_name");

        const section = new Section();
        section.setId("section_prologue").addChild(heading);
        section.addChildren(this.getDescriptionsAboutKamenets());

        return section.create();
    }


}