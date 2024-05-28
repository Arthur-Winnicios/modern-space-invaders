class Projectile {
    constructor({ position, velocity, color = "red" }) {
        this.position = position;
        this.velocity = velocity;
        this.color = color;
        this.radius = 4;
    }
}