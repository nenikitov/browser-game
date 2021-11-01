import { Vector2d } from '../../../utils/vector.js';
import { BaseComponent } from '../component-base.js'
import { PositionComponent } from './component-position.js';

export class TestComponent extends BaseComponent {
    static name = 'test';

    constructor(positionComponent) {
        super(positionComponent);
    }

    tick(deltaTime) {
        this.others.position.position.x += 5 * deltaTime;
    }
}
