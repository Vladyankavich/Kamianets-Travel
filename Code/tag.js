import { HTMLObject } from "./html-obgect.js";
import { Attribute } from "./attribute.js";

export class Tag extends HTMLObject {
    constructor() {
        super();
        this.attributes = [];
        this.children = [];
    }

    setAttribute(type, value) {
        let status = false;

        this.attributes.forEach(attribute => {
            if(attribute.type === type) {
                attribute.setValue(value);
                status = true;

                return;
            }
        });

        if(!status) {
            const attribute = new Attribute(type, value);
            this.attributes.push(attribute);
        }
    }

    setClass(value) {
        this.setAttribute("class", value);
    }

    processAttribute(element) {
        this.attributes.forEach(attribute => {
            if (attribute.type !== "class") {
                element.setAttribute(attribute.type, attribute.value);
            } else {
                const classNames = attribute.parseClassNames();
                
                classNames.forEach(className => {
                    element.classList.add(className);
                });
            }
        });
    }

    addChild(object) {
        this.children.push(object);

        return this;
    }

    processChild(element) {
        this.children.forEach(child => {
            element.append(child.create());
        });
    }
}