import { Vector2d } from '../../../utils/vector.js';
import { BaseComponent } from '../component-base.js'

export class PositionComponent extends BaseComponent {
    static compName = 'position';

    position = new Vector2d(0, 0);

    constructor(initialPosition = new Vector2d(0, 0)) {
        super();

        this.position.copy(initialPosition);
    }
}
