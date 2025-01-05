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

        const hotels = document.querySelectorAll(".hotel");
        hotels.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible");
            }
        });

        const hotelImages = document.querySelectorAll(".hotel_image");
        hotelImages.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("image_visible");
            }
        });

        const restaurants = document.querySelectorAll(".restaurant");
        restaurants.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible");
            }
        });

        const restaurantImages = document.querySelectorAll(".restaurant_image");
        restaurantImages.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible_image");
            }
        });

        const cafeBars = document.querySelectorAll(".cafe_bar");
        cafeBars.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible");
            }
        });

        const cafeBarsImages = document.querySelectorAll(".сafe_bar_image");
        cafeBarsImages.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible_image");
            }
        });
    }

    visibility() {
        // Слушаем событие прокрутки
        window.addEventListener('scroll', this.checkVisibility);
        this.checkVisibility();
    }
}