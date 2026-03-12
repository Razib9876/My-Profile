import React, { useRef, useEffect } from "react";

const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let nodes = [];
    const mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const initNodes = () => {
      nodes = [];
      const spacing = 30;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          nodes.push({ x, y, baseX: x, baseY: y });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 100;

        if (distance < maxDist) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${1 - distance / maxDist})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          ctx.fillStyle = "#2563eb";
          ctx.fillRect(node.x - 1, node.y - 1, 2, 2);
        } else {
          ctx.fillStyle = "rgba(37, 99, 235, 0.15)";
          ctx.fillRect(node.x - 1, node.y - 1, 2, 2);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden lg:block relative min-h-[500px]  bg-base-200/20 group">
      <div className="absolute top-6 left-6 z-20 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest pointer-events-none">
        <span className="text-blue-600"></span>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-none"
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
        <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.4em] opacity-30"></p>
      </div>

      <div className="absolute bottom-6 left-6 z-20 font-['JetBrains_Mono'] text-[9px] opacity-30 uppercase"></div>
    </div>
  );
};

export default NeuralCanvas;
