/**
 * Component base class
 * @abstract
 */
export class BaseComponent {
    /** Name of the component */
    static compName = 'base';
    /** @protected @type {BaseComponent[]} List of other components that this component can manipulate or interact with */
    others = {};

    /**
     * Initialize base component
     * @param  {...BaseComponent} otherComponents List of other components that this component can manipulate or interact with
     */
    constructor(...otherComponents) {
        for (const component of otherComponents) {
            this.others[component.constructor.name] = component;
        }
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

    /**
     * @abstract Update the component
     * @param {number} deltaTime Delta time between ticks
     */
    tick(deltaTime) {};
}
