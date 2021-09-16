export class KeyboardListener {
    states;

    constructor() {
        this.states = {};

        document.addEventListener('keydown', this.keyDown);
        document.addEventListener('keyup', this.keyUp);
    }

    keyDown = (e) => {
        this.states[e.code] = true;
    }
    keyUp = (e) => {
        this.states[e.code] = false;
    }

    getKeyState(code) {
        return this.states[code] || false;
    }
}
