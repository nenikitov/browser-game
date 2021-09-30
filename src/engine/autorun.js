import { CanvasHandler } from './rendering/canvas-handler.js'
import { Vector2d } from './utils/vector.js';
import { AssetHandler } from './loading/asset-handler.js';
import { KeyboardListener } from './input/listeners/keyboard-listener.js';
import { GameAction, KeyBind } from './input/input-bind.js';

const moveRightBind = new KeyBind ('KeyD', 1.0);
const moveRightBindA = new KeyBind ('ArrowRight', 1.0);
const moveLeftBind = new KeyBind ('KeyA', -1.0);
const moveRightAction = new GameAction(false, moveRightBind, moveLeftBind, moveRightBindA)


const moveUpBind = new KeyBind ('KeyW', 1.0);
const moveDownBind = new KeyBind ('KeyS', -1.0);
const moveUpAction = new GameAction(true, moveUpBind, moveDownBind);


const keyboardListener = new KeyboardListener();
const canvasHandler = new CanvasHandler('renderSurface', 16/9, 1);

const image = AssetHandler.get('image', './res/textures/test_char.png').asset();
const pos = new Vector2d(128, 128);
const size = new Vector2d(128, 128);

window.requestAnimationFrame(tick);



function tick() {
    const right = moveRightAction.value(keyboardListener);
    const up = moveUpAction.value(keyboardListener);

    pos.add(new Vector2d(right, -up));
    canvasHandler.clear();
    canvasHandler.drawImage(image, pos, size);

    window.requestAnimationFrame(tick);
}
