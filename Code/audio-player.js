import { HTMLObject } from "./html-object.js";
import { Image } from "./image.js";
import { Button } from "./button.js";

export class Audioplayer extends HTMLObject {
    create() {
        const image = new Image("./Music/1781569.svg", "music");
        image.setClass("music_button");

        const audio = new Audio("./Music/medieval_1.mp3");
        audio.setAttribute("loop", "");

        const button = new Button();
        button.setText("Music");
        button.setClass("music");
        button.addChild(image);
        button.subscribeToClickEvent(() => {
            if (audio.currentTime > 0) {
                audio.pause();
                audio.currentTime = 0;
            } else {
                audio.play();
            }
        });
        
        return button.create();
    }
}