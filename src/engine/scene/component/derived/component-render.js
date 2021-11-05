import { Vector2d } from '../../../utils/vector.js';
import { BaseComponent } from '../component-base.js'

export class RenderComponent extends BaseComponent {
    static compName = 'render';

    constructor(textureAsset) {
        super();

        this.position.copy(initialPosition);
    }
}
