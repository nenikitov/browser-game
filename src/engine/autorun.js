import { CanvasHandler } from './rendering/canvas-handler.js'
import { Vector2d } from './utils/vector.js';
import { AssetHandler } from './loading/asset-handler.js';
import { GameAction, KeyBind } from './input/input-bind.js';

const canvasHandler = new CanvasHandler('renderSurface', 16/9, 1);

const image = AssetHandler.get('image', './res/textures/test_char.png').asset();
const size = new Vector2d(128, 128);

// TODO Remove this, test
import { SideScrollerPlayer } from '../game/side-scroller-player/side-scroller-player.js';
const player = new SideScrollerPlayer(new Vector2d(25, 25));

window.requestAnimationFrame(tick);

let lastTime = new Date();
function tick() {
    // Get the FPS
    let currTime = new Date();
    const deltaTime = (currTime - lastTime) / 1000;
    lastTime = currTime;
    player.tick(deltaTime);

    // Game logic
    canvasHandler.clear();
    canvasHandler.drawImage(image, player.components.position.position, size);

    window.requestAnimationFrame(tick);
}
