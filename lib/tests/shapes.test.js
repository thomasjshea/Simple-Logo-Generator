const Shape = require('../shapes')

describe('Shape', () => {
    describe('Circle', () => {
        it('returns whether or not SVG contains characters from user input', () => {
            const newLogo = new Shape.Circle('TJS', 'orange', 'blue');
            const newFile = newLogo.drawShape();
            expect(newFile).toContain('TJS');
        })
    })
})

describe('Shape', () => {
    describe ('Square', () => {
        it('returns the color of the text selected by the user', () => {
            const newLogo = new Shape.Square('TJS', 'orange', 'blue');
            const newFile = newLogo.drawShape();
            expect(newFile).toContain('orange')
        })
    })
})

describe('Shape', () => {
    describe('Triangle', () => {
        it('returns the background color of the logo', () => {
            const newLogo = new Shape.Triangle('TJS', 'orange', 'blue');
            const newFile = newLogo.drawShape();
            expect(newFile).toContain('blue');
        })
    })
})