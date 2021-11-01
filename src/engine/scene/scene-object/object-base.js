export class BaseSceneObject {
    components = {};

    constructor(...components) {
        for (const component of components) {
            this.components[component.constructor.name] = component;
        }
    }

    tick(deltaTime) {
        for (const component of Object.values(this.components)) {
            component.tick(deltaTime);
        }
    }
}
