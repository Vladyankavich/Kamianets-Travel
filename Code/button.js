import { Tag } from "./tag.js";

class ButtonEvent {
    constructor(type) {
        this.type = type;
        this.callbacks = [];
    }

    addCallback(callback) {
        this.callbacks.push(callback);
    }
}

export class Button extends Tag {
    constructor() {
        super();
        this.text = "";
        this.events = [];
    }

    setText(value) {
        this.text = value;
    }

    subscribeToClickEvent(callback) {
        let status = false;

        this.events.forEach(event => {
            if(event.type === "click") {
                event.addCallback(callback);
                status = true;

                return;
            }
        });

        if(!status) {
            const clickEvent = new ButtonEvent("click");
            clickEvent.addCallback(callback);

            this.events.push(clickEvent);
        }
    }

    create() {
        const button = document.createElement("button");
        button.innerHTML = this.text;

        this.processAttribute(button);
        this.processChild(button);

        this.events.forEach(event => {
            event.callbacks.forEach(callback => {
                button.addEventListener(event.type, callback);
            });
        });

        return button;
    }
}