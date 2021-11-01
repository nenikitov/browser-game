import { PositionComponent } from '../../component/derived/component-position.js';
import { TestComponent } from '../../component/derived/component-test.js';
import { BaseSceneObject } from '../object-base.js';

export class BasePlayer extends BaseSceneObject {
    constructor(initialPosition, inputComponentClass) {
        let positionComponent = new PositionComponent(initialPosition);

        super(
            new inputComponentClass(),
            positionComponent,
            new TestComponent(positionComponent)
        );
    };
}
