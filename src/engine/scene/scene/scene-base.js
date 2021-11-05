import { BaseSceneObject } from '../scene-object/scene-object-base.js';

export class BaseScene {
    sceneObjects;

    constructor(sceneObjects = []) {
        this.sceneObjects = sceneObjects;
    }

    tick(deltaTime) {

    }
    render(canvasHandler) {

    }

    /**
     * 
     * @param { BaseSceneObject } object 
     */
    addObject(object) {
        
    }
}