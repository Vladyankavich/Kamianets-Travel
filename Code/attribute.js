export class Attribute {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    parseClassNames() {
        const classNames = [];
        let className = "";

        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i] !== " ") {
                className += this.value[i];

            } else if (this.value[i] === " " && className.length > 0) {
                classNames.push(className);
                className = "";
            }

            if (i === (this.value.length - 1) && className.length > 0) {
                classNames.push(className);
                className = "";
            }
        }

        return classNames;
    }

    setValue(value) {
        if (this.type.length > 0) {
            if (this.value.length > 0) {
                this.value += ` ${value}`;
            } else {
                this.value = value;
            }
        }
    }
}