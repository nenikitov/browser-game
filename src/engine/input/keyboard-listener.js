/**
 * Listens to the keyboard input
 * Returns which keys are pressed
 */
export class KeyboardListener {
    /** @private @type {boolean[]} Hash map of booleans representing if the key is pressed or no, indexed by the string key code */
    states_;

    /**
     * Init the keyboard handler
     */
    constructor() {
        this.states_ = {};

        document.addEventListener('keydown', this.keyDown_);
        document.addEventListener('keyup', this.keyUp_);
    }

    /** @private */
    keyDown_ = (e) => {
        this.states_[e.code] = true;
    }
    /** @private */
    keyUp_ = (e) => {
        this.states_[e.code] = false;
    }

    /**
     * Is the key pressed
     * @param {string} code Key code
     * @returns {boolean} Key state
     */
    isPressed(code) {
        return this.states_[code] || false;
    }
}
