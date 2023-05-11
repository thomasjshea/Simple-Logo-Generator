class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
}

class Circle extends Shape {
    drawShape = function() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${data.shapeFill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textFill}">${data.text}</text>
        </svg>`; 
    }
}

class Square extends Shape {
    drawShape = function() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="150" height="150" fill="${data.shapeFill}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.textFill}">${data.text}</text>
        </svg>`
    }
}

class Triangle extends Shape {
    drawShape = function() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon point="0, 0 100, 200 200 ,0" fill="${data.shapeFill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textFill}">${data.text}</text>
        </svg>`
    }
}

module.exports = {
    Circle: Circle,
    Square: Square,
    Triangle: Triangle,
};

