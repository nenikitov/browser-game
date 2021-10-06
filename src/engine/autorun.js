import { CanvasHandler } from './rendering/canvas-handler.js'
import { Vector2d } from './utils/vector.js';
import { AssetHandler } from './loading/asset-handler.js';
import { GameAction, KeyBind } from './input/input-bind.js';

const moveRightBind = new KeyBind('KeyD', 1.0);
const moveLeftBind = new KeyBind('KeyA', -1.0);
const moveRightAction = new GameAction(true, moveRightBind, moveLeftBind);

const moveUpBind = new KeyBind('KeyW', 1.0);
const moveDownBind = new KeyBind('KeyS', -1.0);
const moveUpAction = new GameAction(true, moveUpBind, moveDownBind);

const canvasHandler = new CanvasHandler('renderSurface', 16/9, 1);

const image = AssetHandler.get('image', './res/textures/test_char.png').asset();
const pos = new Vector2d(128, 128);
const size = new Vector2d(128, 128);

// TODO Remove this, test
import { PositionComponent } from './scene/component/derived/component-position.js'
import { TestComponent } from './scene/component/derived/component-test.js';

let components = [];

const posComp = new PositionComponent(components);
const tstComp = new TestComponent(components);

window.requestAnimationFrame(tick);

let lastTime = new Date();
function tick() {
    // Get the FPS
    let currTime = new Date();
    const fps = 1000 / (currTime - lastTime);
    lastTime = currTime;

    // Game logic
    const right = moveRightAction.value();
    const up = moveUpAction.value();

    pos.add(new Vector2d(right, -up));

    canvasHandler.clear();
    canvasHandler.drawImage(image, pos, size);

    window.requestAnimationFrame(tick);
}
