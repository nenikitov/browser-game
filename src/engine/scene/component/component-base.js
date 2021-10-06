/**
 * Component base class
 * @abstract
 */
export class BaseComponent {
    /** @type {BaseComponent[]} References to required components */
    comps;

    constructor(allComponents, requiredComponents) {
        if (requiredComponents) {
            console.log(requiredComponents, allComponents)
            if (! BaseComponent.checkRequired(requiredComponents, allComponents)) {
                const missingComponents = this.checkRequired(allComponents);
                // Error, this component needs another ones to work
                const errorMessageConstructor = (result, current) => { result + current.name };
                throw 'The component is missing ' + missingComponents.reduce(errorMessageConstructor);
            }
        }
    }

    /**
     * Check if this component has all required components in component list
     * @param {BaseComponent[]} allComponents The list of components
     * @returns {BaseComponent[]} All required components that need to be created
     */
    static checkRequired(requiredComponents, allComponents) {
        if (requiredComponents) {
            let missingComponents = [];

            for (let required of requiredComponents) {
                if (! BaseComponent.hasComponent(required, allComponents)) {
                    missingComponents.push(required);
                }
            }

            return missingComponents;
        }

        return [];
    }

    /**
     * Check if the component is in the list
     * @param {BaseComponent} target The type of component that should be searched for
     * @param {BaseComponent[]} componentList The list of components
     * @returns {boolean} If the component is in the list
     */
    static hasComponent(target, componentList) {
        for (let component of componentList) {
            if (component instanceof target) {
                return true;
            }
        }

        return false;
    }

    tick(deltaTime) {};
}
