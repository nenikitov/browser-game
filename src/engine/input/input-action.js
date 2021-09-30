import { InputBind, MousePositionBind } from './input-bind.js';

export class InputAction {
    /** @private @type {InputBind} */
    _bind;
    /** @private @type {Function} Callback that passes the input */
    _callback;

    /**
     * 
     * @param {InputBind} inputBind 
     * @param {Function} modifyCallback 
     */
    constructor(inputBind, modifyCallback) {
        this._bind = inputBind;
        this._callback = modifyCallback;
    }

    setInputBind(inputBind) {
        this._bind = inputBind;
    }
    getInputBind() {
        return this._bind;
    }

    execute(value) {
        let 
    }
}
