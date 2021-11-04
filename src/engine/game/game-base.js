import { CanvasHandler } from '../rendering/canvas-handler.js';

export class BaseGame {
    canvasHandler;
    lastTime;
    scene;

    constructor(canvasId, scene) {
        this.canvasHandler = new CanvasHandler(canvasId, 16/9, 1);
        this.lastTime = new Date();
        this.scene = scene;
    }

    tick() {
        const currTime = new Date();
        const deltaTime = (currTime - this.lastTime) / 1000;
        this.lastTime = currTime;

        this.scene.tick(deltaTime);
    }
    render() {
        this.canvasHandler.clear();
        this.scene.render(this.canvasHandler);
    }
}
