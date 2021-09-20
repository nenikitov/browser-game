export class Vector2d {
    x;
    y;

    constructor(x, y) {
        this.set(x, y);
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
    copy(other) {
        this.x = other.x;
        this.y = other.y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
}
