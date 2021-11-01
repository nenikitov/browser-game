import { KeyboardListener } from "./listeners/keyboard-listener.js";

export class GameAction {
    /** @private @type {boolean} */
    _limit;
    /** @private @type {KeyBind[]} */
    _keyBinds;

    /**
     * Init the game action
     * @param {boolean} limit If the input should be limited to values from -1 to 1
     * @param  {...KeyBind} keyBinds List of key bindings
     */
    constructor(limit, ...keyBinds) {
        this._keyBinds = keyBinds;
        this._limit = limit;
    }

    value() {
        let total = 0;

        for (let keyBind of this._keyBinds) {
            if (KeyboardListener.isPressed(keyBind.getKeycode())) {
                total += keyBind.getValue();
            }
        }

        if (this._limit) {
            return Math.min(1.0, Math.max(-1.0, total));
        }
        else {
            return total;
        }
    }
}


export class KeyBind {
    /** @private @type {Key} The key that should be pressed to trigger the bind */
    _key;
    /** @private @type {number} The value of the key bind when the key is pressed */
    _value;

    /**
     * Init the keyboard bind
     * @param {string} key The name of the key
     * @param {number} value The value of the key bind when the key is pressed
     */
    constructor(key, value) {
        this._key = key;
        this._value = value;
    }

    /**
     * @returns {string} The name of the key
     */
    getKeycode() {
        return this._key;
    }
    /**
     * @returns {number} The value of the key when the key is pressed
     */
    getValue() {
        return this._value;
    }
}
