import p5js from "p5";

function sketch(p5: p5js): void {
    p5.setup = () => {
        p5.createCanvas(500, 500);
    }

    p5.draw = () => {
        p5.background(0, 255, 0);
        p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
    }
}

const mySketch = new p5js(sketch);
