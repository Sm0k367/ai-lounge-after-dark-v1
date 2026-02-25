'use client';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface CanvasProps {
  params: {
    speed: number;
    scale: number;
    color: string;
    style: string;
    intensity: number;
  };
}

export default function Canvas({ params }: CanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up previous instance
    if (sketchRef.current) {
      sketchRef.current.remove();
    }

    const sketch = (p: p5) => {
      p.setup = function () {
        const container = containerRef.current;
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        p.createCanvas(width, height);
        p.noStroke();
      };

      p.draw = function () {
        // Background
        p.background(10, 14, 39);

        // Get hex color and convert to RGB
        const hexColor = params.color.replace('#', '');
        const r = parseInt(hexColor.substring(0, 2), 16);
        const g = parseInt(hexColor.substring(2, 4), 16);
        const b = parseInt(hexColor.substring(4, 6), 16);

        // Animated gradient background
        for (let i = 0; i < p.height; i++) {
          const hue = p.map(i, 0, p.height, 0, 360);
          const sat = p.map(p.sin(p.frameCount * 0.01 * params.speed), -1, 1, 50, 100);
          p.colorMode(p.HSB);
          p.stroke(hue, sat, 100, 50);
          p.line(0, i, p.width, i);
        }

        p.colorMode(p.RGB);
        p.noStroke();

        // Draw animated shapes based on style
        if (params.style === 'smooth') {
          drawSmoothShapes(p, r, g, b);
        } else if (params.style === 'geometric') {
          drawGeometricShapes(p, r, g, b);
        } else if (params.style === 'organic') {
          drawOrganicShapes(p, r, g, b);
        }

        // Draw info
        p.fill(0, 217, 255);
        p.textSize(12);
        p.text(`FPS: ${p.frameRate().toFixed(0)}`, 10, 20);
      };

      p.windowResized = function () {
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        p.resizeCanvas(width, height);
      };

      function drawSmoothShapes(p: p5, r: number, g: number, b: number) {
        for (let i = 0; i < 5; i++) {
          const x =
            p.width / 2 +
            p.cos((p.frameCount * 0.01 * params.speed + i) * 0.5) * 150 * params.scale;
          const y =
            p.height / 2 +
            p.sin((p.frameCount * 0.01 * params.speed + i) * 0.5) * 150 * params.scale;
          const size = (50 + p.sin((p.frameCount * 0.02 * params.speed + i) * 0.5) * 30) * params.scale;

          p.fill(r, g, b, 100 * params.intensity);
          p.circle(x, y, size);
        }
      }

      function drawGeometricShapes(p: p5, r: number, g: number, b: number) {
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate((p.frameCount * 0.01 * params.speed) * 0.1);

        for (let i = 0; i < 6; i++) {
          const angle = (p.TWO_PI / 6) * i;
          const x = p.cos(angle) * 100 * params.scale;
          const y = p.sin(angle) * 100 * params.scale;

          p.fill(r, g, b, 150 * params.intensity);
          p.rect(x - 20, y - 20, 40, 40);
        }

        p.pop();
      }

      function drawOrganicShapes(p: p5, r: number, g: number, b: number) {
        p.fill(r, g, b, 80 * params.intensity);

        for (let i = 0; i < 20; i++) {
          const x =
            p.width / 2 +
            p.noise(i * 0.1, p.frameCount * 0.01 * params.speed) * 200 * params.scale -
            100 * params.scale;
          const y =
            p.height / 2 +
            p.noise(i * 0.1 + 100, p.frameCount * 0.01 * params.speed) * 200 * params.scale -
            100 * params.scale;
          const size = p.random(10, 40) * params.scale;

          p.circle(x, y, size);
        }
      }
    };

    sketchRef.current = new p5(sketch, containerRef.current);

    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove();
      }
    };
  }, [params]);

  return <div ref={containerRef} className="w-full h-full" />;
}
