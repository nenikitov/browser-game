import { PositionComponent } from '../../component/derived/component-position.js';
import { BaseSceneObject } from '../object-base.js';

export class BasePlayer extends BaseSceneObject {
    constructor(initialPosition, inputComponentClass) {
        let positionComponent = new PositionComponent(initialPosition);

        super(
            new inputComponentClass(),
            positionComponent
        );
    };
}
