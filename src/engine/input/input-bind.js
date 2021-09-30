import { KeyboardListener } from "./listeners/keyboard-listener.js";

export const mouseButtons = {
    LEFT_MOUSE_BUTTON: 0,
    MIDDLE_MOUSE_BUTTON: 1,
    RIGHT_MOUSE_BUTTON: 2,
    BACK_MOUSE_BUTTON: 3,
    FORWARD_MOUSE_BUTTON: 4
}



export class GameAction {
    /** @private @type {boolean} */
    limit_;
    /** @private @type {KeyBind[]} */
    keyBinds_;

    constructor(limit, ...keyBinds) {
        this.keyBinds_ = keyBinds;
        this.limit_ = limit;
    }

    value(keyboardListener) {
        let total = 0;

        for (let keyBind of this.keyBinds_) {
            if (keyboardListener.isPressed(keyBind.getKeycode())) {
                total += keyBind.getValue();
            }
        }

        if (this.limit_) {
            return Math.min(1.0, Math.max(-1.0, total));
        }
        else {
            return total;
        }
    }
}


export class KeyBind {
    /** @private @type {Key} The key that should be pressed to trigger the bind */
    key_;
    /** @private @type {number} The value of the key bind when the key is pressed */
    value_;

    /**
     * Init the keyboard bind
     * @param {string} key The name of the key
     * @param {number} value The value of the key bind when the key is pressed
     */
    constructor(key, value) {
        this.key_ = key;
        this.value_ = value;
    }

    /**
     * @returns {string} The name of the key
     */
    getKeycode() {
        return this.key_;
    }
    /**
     * @returns {number} The value of the key when the key is pressed
     */
    getValue() {
        return this.value_;
    }
}












/** @interface */
export class InputBind {}

export class InputValueBind extends InputBind {
    /** @private @type {string[]} The list of keyboard key codes */
    keyboardButtons_;
    /** @private @type {mouseButtons[]} The list of mouse button key codes */
    mouseButtons_;

    /**
     * Init an input bind
     * @param {string[]} keyboardButtons The list of keyboard key codes
     * @param {mouseButtons[]} mouseButtons The list of mouse button key codes
     */
    constructor(keyboardButtons, mouseButtons) {
        this.keyboardButtons_ = keyboardButtons;
        this.mouseButtons_ = mouseButtons;
    }

    /**
     * Rebind keyboard
     * @param {string[]} keyboardButtons  The list of keyboard key codes
     */
    setKeyboardButtons(keyboardButtons) {
        this.keyboardButtons_ = keyboardButtons;
    }
    /**
     * Rebind mouse
     * @param {mouseButtons[]} mouseButtons The list of mouse buttons key codes
     */
    setMouseButtons(mouseButtons) {
        this.mouseButtons_ = mouseButtons;
    }

    /**
     * Get the list of keyboard key codes
     * @returns {string[]}
     */
    getKeyboardButtons() {
        return this.keyboardButtons_;
    }
    /**
     * Get the list of mouse buttons key codes
     * @returns {mouseButtons[]}
     */
    getMouseButtons() {
        return this.mouseButtons_;
    }
}

export class InputMousePositionBind extends InputBind {}

