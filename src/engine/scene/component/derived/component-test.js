import { BaseComponent } from '../component-base.js'
import { PositionComponent } from './component-position.js';

export class TestComponent extends BaseComponent {
    static requiredComponents = [ PositionComponent ];

    constructor(allComponents) {
        super(allComponents, TestComponent.requiredComponents);
    }
}
