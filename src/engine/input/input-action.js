import { InputBind, MousePositionBind } from './input-bind.js';

export class InputAction {
    /** @private @type {InputBind} */
    bind_;
    /** @private @type {Function} Callback that passes the input */
    callback_;

    /**
     * 
     * @param {InputBind} inputBind 
     * @param {Function} modifyCallback 
     */
    constructor(inputBind, modifyCallback) {
        this.bind_ = inputBind;
        this.callback_ = modifyCallback;
    }

    setInputBind(inputBind) {
        this.bind_ = inputBind;
    }
    getInputBind() {
        return this.bind_;
    }

    execute(value) {
        let 
    }
}
