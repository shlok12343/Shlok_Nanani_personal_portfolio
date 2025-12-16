import {
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
  Collapse,
} from "@mui/material";
import { useRef, useState, memo, useCallback } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ReplayIcon from "@mui/icons-material/Replay";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { motion, AnimatePresence } from "framer-motion";

// Framer Motion Animations
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerCol = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Current Courses (based on Shlok's related coursework)
const currentClasses = [

  { name: "Calculus III", code: "" },
  { name: "Neural Networks & Deep Learning", code: "" },
  { name: "Linear Algebra & Differential Equations", code: "" },
  { name: "Natural Language Processing", code: "" },
];

// Past Courses
const pastClasses = [
  { name: "Artificial Intelligence", code: "" },
  { name: "Algorithms and Data Structures", code: "" },
  { name: "Object-Oriented Design", code: "" },
  { name: "Computer Systems", code: "" },
  { name: "Mathmatics of Data Models", code: "" },
  { name: "Data Science", code: "" },
  { name: "Foundation of CyberSecurity", code: "" },
  { name: "Fundamentals of Computer Science I & II", code: "" },
  { name: "Discrete Structures", code: "" },
  { name: "Mathematical Reasoning", code: "" },
];

// Current Interests
const interests = ["Teaching", "AI & ML", "Hackathons", "Reading", "Fitness"];

// Memoized course chip component (so we dont re-render all the courses every time)
const CourseChip = memo(({ course, isCurrent }) => (
  <Box
    sx={{
      px: { xs: 1.5, sm: 2 },
      py: { xs: 0.75, sm: 1 },
      borderRadius: 1,
      border: isCurrent
        ? "1px solid #00d4ff"
        : "1px solid rgba(255,255,255,0.3)",
      background: isCurrent
        ? "rgba(0, 212, 255, 0.1)"
        : "rgba(255,255,255,0.05)",
      fontSize: {
        xs: "0.75rem",
        sm: "0.85rem",
        md: "0.9rem",
      },
      fontWeight: 500,
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      gap: { xs: 0.25, sm: 0.5 },
      textAlign: "center",
      opacity: isCurrent ? 1 : 0.9,
    }}
  >
    <span>{course.name}</span>
    <span style={{ opacity: 0.7, fontSize: "0.85em" }}>{course.code}</span>
  </Box>
));

CourseChip.displayName = "CourseChip";

// Memoized interest chip component (doesn't really need to be memoized but why not)
const InterestChip = memo(({ chip }) => (
  <Box
    sx={{
      px: 1.5,
      py: 0.5,
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.3)",
      background: "rgba(255,255,255,0.06)",
      fontSize: { xs: "0.875rem", md: "0.95rem" },
      fontWeight: 600,
      backdropFilter: "blur(5px)",
    }}
  >
    {chip}
  </Box>
));

InterestChip.displayName = "InterestChip";

function AboutSection() {
  // State and refs for video and classes toggling
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showClasses, setShowClasses] = useState(false);

  // Video control handlers
  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const handleRestart = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  // Toggle Class handler
  const toggleClasses = useCallback(() => {
    setShowClasses((prev) => !prev);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <Box
      id="about-section"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: { xs: "5vh", sm: "5vh", md: "2vh" },
      }}
    >
      {/* Main container with glow effect */}
      <Box
        sx={{
          height: "100%",
          width: "80vw",
          maxWidth: "1400px",
          color: "white",
          backgroundColor: "#020617",
          border: "2px solid #10b981",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          animation: "glow 2s infinite ease-in-out",
          "@keyframes glow": {
            "0%, 100%": {
              boxShadow:
                "0 0 10px #00d4ff, inset 0 0 20px rgba(0, 212, 255, 0.1)",
            },
            "50%": {
              boxShadow:
                "0 0 20px #00d4ff, inset 0 0 40px rgba(0, 212, 255, 0.2)",
            },
          },
        }}
      >
        {/* Thicker Top Border */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, transparent, #10b981, #10b981, transparent)",
            boxShadow: "0 0 20px #10b981, 0 4px 30px rgba(16, 185, 129, 0.5)",
            borderRadius: "0 0 4px 4px",
            zIndex: 2,
          }}
        />

        {/* Background Circuit Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/CircuitBoard.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, md: 6, lg: 8 },
            py: { xs: 4, md: 6, lg: 8 },
            px: { xs: 3, md: 4, lg: 6 },
          }}
        >
          {/* Left Side - Personal information */}
          <motion.div
            variants={staggerCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ flex: 1, maxWidth: "600px" }}
          >
            <Stack spacing={{ xs: 3, md: 4 }}>
              {/* Section heading */}
              <motion.div variants={fadeUp}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                      lg: "3.5rem",
                    },
                  }}
                >
                  Who Am I?
                </Typography>
              </motion.div>

              {/* Introduction Text */}
              <motion.div variants={fadeUp}>
                <Box sx={{ position: "relative", pl: { sm: 3 } }}>
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: "3px",
                      background: "#10b981",
                      boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
                      display: { xs: "none", sm: "block" },
                    }}
                  />
                  <Stack spacing={2}>
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      My name is{" "}
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 700,
                          background:
                            "linear-gradient(135deg, #00d4ff 0%, #7240d8 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Shlok A. Nanani
                      </Box>
                      , and I'm a computer science student at Northeastern
                      University concentrating in{" "}
                      <Box component="span" sx={{ fontStyle: "italic" }}>
                        Artificial Intelligence
                      </Box>
                      . I enjoy building intelligent systems and tools that turn
                      data into real-world impact.
                    </Typography>
                    <Box
                      sx={{
                        p: 2,
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: 1,
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                          lineHeight: 1.6,
                        }}
                      >
                        I'm currently looking for{" "}
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                          software engineering and AI-focused internship or
                          co-op roles
                        </Box>{" "}
                        where I can apply modern ML and systems skills to
                        impactful problems.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>

              {/* Education section */}
              <motion.div variants={fadeUp}>
                <Stack spacing={2}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    Education
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      border: "2px solid rgba(16,185,129,0.35)",
                      background: "rgba(15,23,42,0.9)",
                      boxShadow: "0 0 10px rgba(16,185,129,0.25) inset",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* University information */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      <Box
                        component="img"
                        src="../../NortheasternLogo.png"
                        alt="Northeastern University Logo"
                        sx={{
                          width: { xs: 60, md: 80 },
                          height: { xs: 60, md: 80 },
                          flexShrink: 0,
                        }}
                      />
                      <Box sx={{ flex: 1, width: "100%" }}>
                        <Stack spacing={1}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: { xs: "center", sm: "center" },
                              justifyContent: {
                                xs: "center",
                                sm: "space-between",
                              },
                              flexDirection: { xs: "column", sm: "row" },
                              gap: 1,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: "1.1rem",
                                  sm: "1.1rem",
                                  md: "1.1rem",
                                },
                                fontWeight: 700,
                              }}
                            >
                              Northeastern University
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: "0.8rem",
                                  md: "0.8rem",
                                  lg: "0.8rem",
                                },
                                opacity: 0.8,
                              }}
                            >
                              Expected: May 2027
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: { xs: "center", sm: "center" },
                              justifyContent: {
                                xs: "center",
                                sm: "space-between",
                              },
                              flexDirection: { xs: "column", sm: "row" },
                              gap: 1,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: { xs: "0.875rem", md: "1rem" },
                                opacity: 0.9,
                              }}
                            >
                              GPA: 3.9/4.0, Dean&apos;s List, AI Concentration
                            </Typography>
                            <Button
                              variant="contained"
                              size="small"
                              onClick={toggleClasses}
                              endIcon={
                                showClasses ? (
                                  <ExpandLessIcon />
                                ) : (
                                  <ExpandMoreIcon />
                                )
                              }
                              sx={{
                                                backgroundColor: "#047857",
                                color: "#FFFFFF",
                                borderBottom: "2px solid white",
                                fontWeight: "bold",
                                transition: "all 0.3s ease",
                                "&:hover": { backgroundColor: "#C77DFF" },
                              }}
                            >
                              Classes
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    </Box>

                    {/* Expandable Classes section */}
                    {showClasses && (
                      <Box
                        sx={{
                          pt: 2,
                          borderTop: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        <Stack spacing={3}>
                          {/* Current courses */}
                          <Box>
                            <Typography
                              sx={{
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                fontWeight: 600,
                                mb: 1.5,
                                color: "#10b981",
                                textAlign: { xs: "center", sm: "left" },
                              }}
                            >
                              Currently Taking
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                                justifyContent: {
                                  xs: "center",
                                  sm: "flex-start",
                                },
                              }}
                            >
                              {currentClasses.map((course) => (
                                <CourseChip
                                  key={course.code}
                                  course={course}
                                  isCurrent={true}
                                />
                              ))}
                            </Box>
                          </Box>

                          {/* Completed courses - No stagger, just simple display */}
                          <Box>
                            <Typography
                              sx={{
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                fontWeight: 600,
                                mb: 1.5,
                                color: "rgba(255,255,255,0.9)",
                                textAlign: { xs: "center", sm: "left" },
                              }}
                            >
                              Completed Courses
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                                justifyContent: {
                                  xs: "center",
                                  sm: "flex-start",
                                },
                              }}
                            >
                              {pastClasses.map((course) => (
                                <CourseChip
                                  key={course.code}
                                  course={course}
                                  isCurrent={false}
                                />
                              ))}
                            </Box>
                          </Box>
                        </Stack>
                      </Box>
                    )}
                  </Box>
                </Stack>
              </motion.div>

              {/* Interests section */}
              <motion.div variants={fadeUp}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>Interests:</Typography>
                  {interests.map((chip) => (
                    <InterestChip key={chip} chip={chip} />
                  ))}
                </Box>
              </motion.div>
            </Stack>
          </motion.div>

          {/* Right column reserved for future intro video */}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(AboutSection);
