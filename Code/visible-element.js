export class VisibleElement {
    // constructor(className, classList) {
    //     this.className = className;
    //     this.classList = classList;
    // }

    checkVisibility() {
        const hName = document.querySelectorAll(".h_name");
        hName.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible");
            }
        });

        const description = document.querySelectorAll(".description");
        description.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible");
            }
        });

        const imageLeft = document.querySelectorAll(".image_left_from_text");
        imageLeft.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("image_left_visible");
            }
        });

        const imageRight = document.querySelectorAll(".image_right_from_text");
        imageRight.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("image_right_visible");
            }
        });
    }

    visibility() {
        // Слушаем событие прокрутки
        window.addEventListener('scroll', this.checkVisibility);
        this.checkVisibility();
    }
}