/**
 * Listens to the keyboard input
 * Returns which keys are pressed
 */
export class KeyboardListener {   
    /** @private @type {boolean[]} Hash map of booleans representing if the key is pressed, indexed by the string of key code */
    static _keys = {};

    /** @private */
    static _keyDown = (e) => {
        KeyboardListener._keys[e.code] = true;
    }
    /** @private */
    static _keyUp = (e) => {
        KeyboardListener._keys[e.code] = false;
    }

    /** @private Hack to create a static constructor */
    static _ctor = (() => {
        document.addEventListener('keydown', KeyboardListener._keyDown);
        document.addEventListener('keyup', KeyboardListener._keyUp);
    })();

    /**
     * Is the key pressed
     * @param {string} code Key code
     * @returns {boolean} Key state
     */
    static isPressed(code) {
        return KeyboardListener._keys[code] || false;
    }
}
