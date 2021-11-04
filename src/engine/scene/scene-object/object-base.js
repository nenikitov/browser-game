export class BaseSceneObject {
    components = {};

    constructor(...components) {
        for (const component of components) {
            this.components[component.constructor.compName] = component;
        }
    }

    tick(deltaTime) {
        for (const component of Object.values(this.components)) {
            component.tick(deltaTime);
        }
    }
}
