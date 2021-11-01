import { GameAction } from '../../../input/input-bind.js';
import { BaseComponent } from '../component-base.js'

export class InputComponent extends BaseComponent {
    static name = 'input';

    /** @private @type {GameAction} list of all actions */
    actions;


    constructor() {
        super("input");

        if (! this.actions) {
            this.actions = {};
        }
    }

    /**
     * Get the value of all the inputs
     * @returns {number[]} String indexed array with values of game actions
     */
    inputs() {
        let inputValues = {};

        for (let [actionName, gameAction] of Object.entries(this.actions)) {
            inputValues[actionName] = gameAction.value();
        }

        return inputValues;
    }
}
