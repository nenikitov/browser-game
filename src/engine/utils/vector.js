export class Vector2d {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    mulitplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
    set(other) {
        this.x = other.x;
        this.y = other.y;
    }
}
