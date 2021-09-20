/**
 * Listens to the keyboard input
 * Returns which keys are pressed
 */
export class KeyboardListener {
    /** @private @type {boolean[]} Hash map of booleans representing if the key is pressed or no, indexed by the string key code */
    keys_;

    /**
     * Init the keyboard handler
     */
    constructor() {
        this.keys_ = {};

        document.addEventListener('keydown', this.keyDown_);
        document.addEventListener('keyup', this.keyUp_);
    }

    /** @private */
    keyDown_ = (e) => {
        this.keys_[e.code] = true;
    }
    /** @private */
    keyUp_ = (e) => {
        this.keys_[e.code] = false;
    }

    /**
     * Is the key pressed
     * @param {string} code Key code
     * @returns {boolean} Key state
     */
    isPressed(code) {
        return this.keys_[code] || false;
    }
}
