import { useState, useEffect, useRef } from "react";
import { css } from "../../styled-system/css";

class Point {
  x: number;
  y: number;
  fixedY: number;
  speed: number;
  cur: number;
  max: number;

  constructor(index: number, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.005;
    this.cur = index;
    this.max = Math.random() * 20 + 60;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(10 * this.cur) * this.max;
  }
}

class Wave {
  index: number;
  totalPoints: number;
  color: string;
  points: Point[];
  stageWidth: number = 0;
  stageHeight: number = 0;
  centerX: number = 0;
  centerY: number = 0;
  pointGap: number = 0;

  constructor(index: number, totalPoints: number, color: string) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [];
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY);
      this.points[i] = point;
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;
      ctx.quadraticCurveTo(prevX, prevY, cx, cy);
      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}

class WaveGroup {
  totalWaves: number;
  totalPoints: number;
  color: string[];
  waves: Wave[];
  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 6;
    this.color = ["#FFAE63", "#FFDFAE", "white"];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth: number, stageHeight: number) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}

const WaveCanvas = () => {
  const [canvasSize, setCanvasSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const resizeHandler = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: 400,
      });
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const waveGroup = new WaveGroup();
    waveGroup.resize(window.innerWidth, 400);

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, 400);
      waveGroup.draw(ctx);
      requestAnimationFrame(draw);
    };

    const animationFrameId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationFrameId);
  }, [canvasSize]);

  return (
    <canvas
      ref={canvasRef}
      className={css({
        zIndex: "1000",
        pointerEvents: "none",
      })}
      width={canvasSize.width}
      height={canvasSize.height}
    />
  );
};

export default WaveCanvas;
