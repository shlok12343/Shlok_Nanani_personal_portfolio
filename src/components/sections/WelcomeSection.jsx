import { Typography, Box } from "@mui/material";
import Particles from "../react-bits-components/Particles";
import { Fade } from "react-awesome-reveal";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function BouncingIntroObjects() {
  const containerRef = useRef(null);
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createInitialObjects = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width || 800;
      const height = rect.height || 500;

      const baseObjects = [
        {
          id: "img-1",
          type: "image",
          src: "/OpeningProfile1.png",
          radius: 80,
        },
        {
          id: "img-2",
          type: "image",
          src: "/OpeningProfile2.png",
          radius: 80,
        },
        {
          id: "img-3",
          type: "image",
          src: "/team_picture.png",
          radius: 90,
        },
        {
          id: "txt-welcome",
          type: "text",
          text: "Hello There!",
          radius: 90,
        },
        {
          id: "txt-name",
          type: "text",
          text: "I'm Shlok",
          radius: 100,
        },
      ];

      const centerX = width / 2;
      const centerY = height / 2;

      const initialized = baseObjects.map((obj, index) => {
        const angle = (index / baseObjects.length) * Math.PI * 2;
        const radiusSpread = Math.min(width, height) / 4;
        const x = centerX + Math.cos(angle) * radiusSpread * 0.5;
        const y = centerY + Math.sin(angle) * radiusSpread * 0.5;
        const speed = 80 + Math.random() * 80;
        const dirAngle = Math.random() * Math.PI * 2;

        return {
          ...obj,
          x,
          y,
          vx: Math.cos(dirAngle) * speed,
          vy: Math.sin(dirAngle) * speed,
        };
      });

      setObjects(initialized);
    };

    createInitialObjects();

    let animationFrameId;
    let lastTime = performance.now();

    const update = (timestamp) => {
      animationFrameId = requestAnimationFrame(update);
      const dt = Math.min((timestamp - lastTime) / 1000, 0.03);
      lastTime = timestamp;

      setObjects((prev) => {
        if (!containerRef.current || prev.length === 0) return prev;

        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width || 800;
        const height = rect.height || 500;

        const next = prev.map((o) => {
          let x = o.x + o.vx * dt;
          let y = o.y + o.vy * dt;
          let vx = o.vx;
          let vy = o.vy;
          const r = o.radius;
          const margin = 40;
        
          if (x - r < margin) {
            x = margin + r;
            vx *= -1;
          } else if (x + r > width - margin) {
            x = width - margin - r;
            vx *= -1;
          }
        
          if (y - r < margin) {
            y = margin + r;
            vy *= -1;
          } else if (y + r > height - margin) {
            y = height - margin - r;
            vy *= -1;
          }
        
          return { ...o, x, y, vx, vy };
        });

        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const o1 = next[i];
            const o2 = next[j];
            const dx = o2.x - o1.x;
            const dy = o2.y - o1.y;
            const dist = Math.hypot(dx, dy);
            const minDist = o1.radius + o2.radius;

            if (dist > 0 && dist < minDist) {
              const nx = dx / dist;
              const ny = dy / dist;
              const overlap = minDist - dist + 1;

              o1.x -= (nx * overlap) / 2;
              o1.y -= (ny * overlap) / 2;
              o2.x += (nx * overlap) / 2;
              o2.y += (ny * overlap) / 2;

              const vx1 = o1.vx;
              const vy1 = o1.vy;
              o1.vx = o2.vx;
              o1.vy = o2.vy;
              o2.vx = vx1;
              o2.vy = vy1;
            }
          }
        }

        return next.map((o) => ({ ...o }));
      });
    };

    animationFrameId = requestAnimationFrame(update);

    const handleResize = () => {
      createInitialObjects();
      lastTime = performance.now();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {objects.map((obj) => {
        if (obj.type === "image") {
          return (
            <Box
              key={obj.id}
              component="img"
              src={obj.src}
              alt={obj.id}
              sx={{
                position: "absolute",
                left: obj.x,
                top: obj.y,
                transform: "translate(-50%, -50%)",
                width:
                  obj.id === "img-1"
                    ? "40vh" // OpeningProfile1 size
                    : obj.id === "img-2"
                      ? "25vh" // OpeningProfile2 size
                      : obj.id === "img-3"
                        ? "40vh" // team_picture size
                        : "18vh",
                height: "auto",
                borderRadius: obj.id === "img-3" ? "1.5vh" : "999px",
                boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
                border: "2px solid rgba(16,185,129,0.6)",
                backgroundColor: "#020617",
              }}
            />
          );
        }

        return (
          <Box
            key={obj.id}
            sx={{
              position: "absolute",
              left: obj.x,
              top: obj.y,
              transform: "translate(-50%, -50%)",
              padding: "1.5vh 4vh",
              background: "rgba(15,23,42,0.9)",
              borderRadius: "1.2vh",
              border: "1px solid rgba(16,185,129,0.7)",
              boxShadow: "0 18px 45px rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "180px",
            }}
          >
            <Typography
              sx={{
                fontSize: obj.id === "txt-welcome" ? "5vh" : "4.5vh",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#ecfdf5",
              }}
            >
              {obj.text}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default function WelcomeSection() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: { xs: "70vh", sm: "90vh" },
        overflow: "hidden",
      }}
    >
      {/* Animated Scroll More Indicator */}
      <Fade delay={3000} duration={1500} triggerOnce>
        <motion.div
          animate={{
            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "7.5vh",
              left: "51%",
              transform: "translateX(-50%)",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2em",
                color: "#ffffff",
                textAlign: "center",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 300,
                textShadow: "0 0 30px rgba(15, 23, 42, 0.9)",
              }}
            >
              ↓ Scroll Below To Explore More About Me ↓
            </Typography>
          </Box>
        </motion.div>
      </Fade>

      {/* Particle background effect (react-bits) */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#022c22", "#065f46", "#10b981"]}
          particleCount={900}
          particleSpread={8}
          speed={0.06}
          particleBaseSize={70}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </Box>

      {/* Main Bouncing Content */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <BouncingIntroObjects />
      </Box>
    </Box>
  );
}
