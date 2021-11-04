import { BasePlayer } from '../../engine/scene/scene-object/derived/player-base.js'
import { SideScrollerInputComponent } from './side-scroller-input-component.js'

export class SideScrollerPlayer extends BasePlayer {
    position;
    inputs;

    constructor(initialPos) {
        super(initialPos, SideScrollerInputComponent);

        this.position = this.components['position'].position;
    }

    tick(deltaTime) {
        super.tick(deltaTime);

        this.inputs = this.components['input'].inputs();

        this.position.x += deltaTime * 0.2 * this.inputs['moveHorizontal'];
        this.position.y -= deltaTime * 0.2 * this.inputs['jump'];
    }
}