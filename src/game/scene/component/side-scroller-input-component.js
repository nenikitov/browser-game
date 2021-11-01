import { GameAction, KeyBind } from '../../../engine/input/input-bind.js';
import { InputComponent } from '../../../engine/scene/component/derived/component-input.js';

export class SideScrollerInputComponent extends InputComponent {
    actions = {
        moveHorizontal: new GameAction(
            true,
            new KeyBind('KeyA',      -1),
            new KeyBind('KeyD',       1),
            new KeyBind('ArrowLeft', -1),
            new KeyBind('ArrowRight', 1)
        ),
        jump: new GameAction(
            true,
            new KeyBind('KeyW',    1),
            new KeyBind('Space',   1),
            new KeyBind('ArrowUp', 1),
            // TODO remove this later
            new KeyBind('KeyS',        -1),
            new KeyBind('ControlLeft', -1),
            new KeyBind('ArrowDown',   -1),
        )
    }

    constructor() {
        super();
    }
}
