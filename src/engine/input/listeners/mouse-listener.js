import { Vector2d } from '../../utils/vector.js';

export class MouseListener {
    pos_;
    keys_;

    constructor() {
        this.pos_ = new Vector2d(0, 0);
        this.keys_ = {};

        document.addEventListener('mousemove', this.mouseMove_);
    }

    mouseMove_ = (e) => {
        this.pos_.set(e.offsetX, e.offsetY);
    }
}
