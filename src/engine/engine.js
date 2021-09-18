import { CanvasHandler } from './rendering/canvas-handler.js'
import { Vector2d } from './utils/vector.js';
import { KeyboardListener } from './input/keyboard-listener.js'

const canvasHandler = new CanvasHandler('renderSurface', 16/9, 1);
const keyboardListener = new KeyboardListener(['KeyW']);


let position = new Vector2d(128, 128);

let size = new Vector2d(128, 128);
const sprite = new Image();
sprite.src = './res/textures/test_char.png'


window.requestAnimationFrame(tick);

function tick() {
    canvasHandler.clear();

    const move = new Vector2d(
        256 + (Math.random() - 0.5) * 500,
        128 + (Math.random() - 0.5) * 500,
    );

    const resize = new Vector2d(
        (Math.random() - 0.5) * 700,
        (Math.random() - 0.5) * 700,
    );

    position.set(move)
    size.set(resize)
    
    canvasHandler.drawImage(sprite, position, size);

    window.requestAnimationFrame(tick);
}
