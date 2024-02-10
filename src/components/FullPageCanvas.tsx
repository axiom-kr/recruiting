import { useState, useEffect, useRef } from "react";
import { css } from "../../styled-system/css";

const FullPageCanvas = () => {
  const [canvasSize, setCanvasSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [stars, setStars] = useState<
    { x: number; y: number; speed: number; size: number }[]
  >([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const resizeHandler = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
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
    const initialStars = [];
    for (let i = 0; i < 50; i++) {
      initialStars.push({
        x: Math.random() * canvasSize.width,
        y: Math.random() * canvasSize.height,
        speed: Math.random() * 1 + 0.5,
        size: Math.random() * 2 + 1,
      });
    }
    setStars(initialStars);
  }, [canvasSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateStars = () => {
      setStars((prevStars) => {
        return prevStars.map((star) => ({
          ...star,
          x: (star.x + star.speed) % canvasSize.width,
        }));
      });
      animationRef.current = requestAnimationFrame(updateStars);
    };

    updateStars();

    return () => cancelAnimationFrame(animationRef.current);
  }, [canvasSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.fillStyle = "#FFAE63";
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animationFrameId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationFrameId);
  }, [stars, canvasSize]);

  return (
    <canvas
      ref={canvasRef}
      className={css({
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "9999",
        pointerEvents: "none",
      })}
      width={canvasSize.width}
      height={canvasSize.height}
    />
  );
};

export default FullPageCanvas;
