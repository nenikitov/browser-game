import { CanvasHandler } from './rendering/canvas-handler.js'
import { Vector2d } from './utils/vector.js';
import { AssetHandler } from './loading/asset-handler.js';
import { MouseListener } from './input/listeners/mouse-listener.js';

const mouseListener = new MouseListener();
const canvasHandler = new CanvasHandler('renderSurface', 16/9, 1);

const image = AssetHandler.get('image', './res/textures/test_char.png').asset();
const pos = new Vector2d(0, 0);
const size = new Vector2d(128, 128);

window.requestAnimationFrame(tick);

function tick() {
    pos.copy(mouseListener.pos_);
    canvasHandler.clear();
    canvasHandler.drawImage(image, pos, size);

    window.requestAnimationFrame(tick);
}
