import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "../ui/wavy-background";

const BASE_URL = import.meta.env.BASE_URL || "/";

// Framer Motion animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function ExperienceSection() {
  // Preset selected experience
  const [selectedExperience, setSelectedExperience] = useState("wayfair");

  // Experience data (updated for Shlok)
  const experienceData = {
    wayfair: {
      title: "Wayfair - SWE Intern",
      logo: `${BASE_URL}WayfairLogo.png`,
      description:
        "Wayfair is a global e-commerce company for home goods. On the Knowledge and Generative AI Acceleration team, I evaluate and productionize AI platforms to power internal tools and customer service automation. I work across retrieval, LLM evaluation, clustering, and cloud orchestration.",
      techStack: [
        "Python",
        "Vertex AI",
        "LangChain",
        "LangGraph",
        "Google Cloud Platform",
        "BigQuery",
        "Apache Airflow",
        "Terraform",
      ],
      achievements: [
        "Evaluated enterprise AI platforms (Glean, Google Agentspace, Moveworks) using LLM-as-a-judge for internal tools.",
        "Engineered an end-to-end clustering pipeline with 40+ model combinations; achieved a Silhouette Score of 0.76.",
        "Improved categorization accuracy of service tickets by 25% with Vertex AI prompt optimization.",
        "Provisioned cloud infrastructure and deployed containerized AI services on GCP (GKE, BigQuery).",
      ],
    },
    validus: {
      title: "Validus Capital - SWE Intern",
      logo: `${BASE_URL}ValidusLogo.png`,
      description:
        "Validus Capital is a fintech platform for SME lending. I worked on digital loan signing workflows, building and testing backend modules that ensure reliability and compliance during the signing process.",
      techStack: ["Java", "Spring/Maven", "MySQL", "Postman"],
      achievements: [
        "Designed and tested full-stack modules for error detection in digital loan signing workflows.",
        "Implemented functions to validate inputs and throw meaningful exceptions during signing.",
        "Queried MySQL to authenticate users and debug production issues across multi-API integrations.",
      ],
    },
    ta: {
      title: "Teaching Assistant – Computer Systems",
      logo: `${BASE_URL}KhouryLogo.png`,
      description:
        "As a Teaching Assistant for Computer Systems at Northeastern, I help students understand low-level software concepts, from C and assembly to memory, concurrency, and performance.",
      techStack: ["C", "Assembly", "Linux", "Computer Systems"],
      achievements: [
        "Grade homework and assessments for a large undergraduate cohort.",
        "Help students debug systems code and deepen their understanding during office hours.",
      ],
    },
    oasis: {
      title: "Oasis - Lead and Director",
      logo: `${BASE_URL}OasisLogo.png`,
      description:
        "Oasis is Northeastern's software project incubator. As Outreach Director and E-Board member, I connect teams, clubs, and mentors to help student builders ship impactful software, with a special focus on AI and UX projects.",
      techStack: ["Product", "Leadership", "Event Planning"],
      achievements: [
        "Organized cross-club events to foster interdisciplinary software projects.",
        "Mentored student teams on scoping, design decisions, and AI/UX tradeoffs.",
      ],
    },
  };

  const currentExperience = selectedExperience
    ? experienceData[selectedExperience]
    : null;

  return (
    <WavyBackground
      id="experience-section"
      containerClassName="w-full h-auto overflow-x-hidden"
      className="w-full"
      colors={["#022c22", "#065f46", "#0f766e", "#10b981"]}
      waveOpacity={0.35}
      speed="slow"
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "90vh",
          overflow: "hidden",
          gap: "4vh",
          marginBottom: { xs: "4.5vh", sm: "5vh", md: "7.5vh" },
          zIndex: 1,
        }}
      >
        {/* Section title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{ width: "100%", maxWidth: "1400px", zIndex: 2 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "3vw", sm: "2vw" },
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: { xs: "20vw", sm: "25vw", md: "30vw" },
                height: "3px",
                background: "linear-gradient(90deg, transparent, #10b981)",
                borderRadius: "2px",
                boxShadow: "0 0 10px #00d4ff66",
              }}
            />

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "8vw", sm: "6vw", md: "3.5vw" },
                whiteSpace: "nowrap",
              }}
            >
              Experience
            </Typography>

            <Box
              sx={{
                width: { xs: "20vw", sm: "25vw", md: "30vw" },
                height: "3px",
                background: "linear-gradient(90deg, #10b981, transparent)",
                borderRadius: "2px",
                boxShadow: "0 0 10px #00d4ff66",
              }}
            />
          </Box>
        </motion.div>

        {/* Main content container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            width: "80vw",
            maxWidth: "1400px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "4vw", md: "6vw", lg: "6vw" },
            }}
          >
            {/* Experience Selector*/}
            <motion.div variants={slideInLeft} style={{ zIndex: 3 }}>
              <Box
                sx={{
                  border: "2px solid rgba(16, 185, 129, 0.4)",
                  borderRadius: "15px",
                  width: { xs: "80vw", sm: "70vw", md: "25vw", lg: "25vw" },
                  maxWidth: "500px",
                  height: { xs: "30vh", md: "50vh" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "stretch",
                  padding: 0,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(34, 211, 238, 0.1)",
                  background: "rgb(15, 15, 25)",
                  backgroundColor: "rgb(15, 15, 25)",
                  backdropFilter: "blur(20px)",
                  isolation: "isolate",
                  position: "relative",
                  zIndex: 10,
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 32px rgba(16, 185, 129, 0.2)",
                      borderColor: "rgba(16, 185, 129, 0.7)",
                  },
                }}
              >
                {/* Experience list items */}
                {Object.keys(experienceData).map((key, index, arr) => (
                  <Box
                    key={key}
                    onClick={() => setSelectedExperience(key)}
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom:
                        index !== arr.length - 1
                          ? "1px solid rgba(15,23,42,0.8)"
                          : "none",
                      padding: "0 2vw",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      background:
                        selectedExperience === key
                          ? "rgba(16, 185, 129, 0.12)"
                          : "rgb(15, 23, 42)",
                      borderLeft:
                        selectedExperience === key
                          ? "3px solid #10b981"
                          : "3px solid transparent",
                        "&:hover": {
                          backgroundColor: "rgba(15,23,42, 0.9)",
                        cursor: "pointer",
                        paddingLeft: "2.5vw",
                        borderLeft: "3px solid #22d3ee",
                        "& .arrow": {
                          transform: "translateX(8px)",
                          color: "#10b981",
                        },
                        "& .text": {
                          color: "#22d3ee",
                        },
                      },
                    }}
                  >
                    <Typography
                      className="text"
                      sx={{
                        fontWeight: "500",
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "1.8vw",
                          lg: "1.8vw",
                        },
                        color:
                          selectedExperience === key
                            ? "#10b981"
                            : "rgba(255, 255, 255, 0.9)",
                        transition: "color 0.3s ease",
                        letterSpacing: "0.8px",
                        fontFamily: "'Inter', 'Segoe UI', sans-serif",
                      }}
                    >
                      {experienceData[key].title}
                    </Typography>
                    <Typography
                      className="arrow"
                      sx={{
                        fontSize: { xs: "1.4vw", md: "1.2vw", lg: "1vw" },
                        color:
                          selectedExperience === key
                            ? "#10b981"
                            : "rgba(148, 163, 184, 0.8)",
                        transition: "all 0.3s ease",
                        fontWeight: "300",
                        transform:
                          selectedExperience === key
                            ? "translateX(8px)"
                            : "none",
                      }}
                    >
                      ▶
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>

            {/* Experience details */}
            <motion.div variants={slideInRight} style={{ zIndex: 3 }}>
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%)",
                  width: { xs: "80vw", sm: "70vw", md: "43vw", lg: "46vw" },
                  maxWidth: "1000px",
                  height: { xs: "auto", md: "70vh" },
                  minHeight: { xs: "60vh", md: "70vh" },
                  maxHeight: { xs: "90vh", md: "70vh" },
                  overflowY: { xs: "auto" },
                  borderRadius: "20px",
                  border: "1px solid rgba(30, 64, 175, 0.4)",
                  padding: { xs: "4vw", md: "2vw" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "2vh",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  isolation: "isolate",
                  zIndex: 10,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                    "&::before": {
                      content: '\"\"',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.6), transparent)",
                    },
                }}
              >
                {!currentExperience ? (
                  /* Empty state when no experience selected (this should never be the case but just in case) */
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2vh",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(34, 211, 238, 0.3)",
                        fontSize: { xs: "2.5vw", md: "2vw", lg: "1.8vw" },
                        fontWeight: "300",
                        marginBottom: "1vh",
                      }}
                    >
                      ←
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: { xs: "1.1vw", md: "1vw", lg: "0.9vw" },
                        fontWeight: "400",
                        textAlign: "center",
                        maxWidth: "80%",
                        lineHeight: "1.6",
                      }}
                    >
                      Select an experience to view details
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(34, 211, 238, 0.4)",
                        fontSize: { xs: "0.8vw", md: "0.7vw", lg: "0.65vw" },
                        marginTop: "1vh",
                        fontStyle: "italic",
                      }}
                    >
                      Click any option to explore my professional journey
                    </Typography>
                  </Box>
                ) : (
                  /* Experience details display */
                  <>
                    {/* Logo section */}
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: "80px", sm: "120px", md: "26%" },
                        minHeight: "80px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "2px solid rgba(34, 211, 238, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(34, 211, 238, 0.05)",
                        position: "relative",
                        boxShadow:
                          "0 0 20px rgba(34, 211, 238, 0.2), inset 0 0 20px rgba(34, 211, 238, 0.1)",
                      }}
                    >
                      <Box
                        component="img"
                        src={currentExperience.logo}
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                          display: "block",
                        }}
                        alt={`${currentExperience.title} Logo`}
                      />
                    </Box>

                    {/* Title and description */}
                    <Box
                      sx={{
                        flex: "0 0 auto",
                        padding: "1.5vh 0",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#10b981",
                          fontSize: {
                            xs: "18px",
                            sm: "20px",
                            md: "1.5vw",
                            lg: "1.5vw",
                          },
                          fontWeight: "600",
                          marginBottom: "1vh",
                          letterSpacing: "1px",
                        }}
                      >
                        {currentExperience.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(209, 213, 219, 0.9)",
                          fontSize: {
                            xs: "12px",
                            sm: "13px",
                            md: "0.85vw",
                            lg: "1vw",
                          },
                          lineHeight: "1.6",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {currentExperience.description}
                      </Typography>
                    </Box>

                    {/* Tech stack and achievements */}
                    <Box
                      sx={{
                        flex: 1,
                        display: "flex",
                        gap: "1.5vw",
                        marginTop: "auto",
                      }}
                    >
                      {/* Tech stack card */}
                      <Box
                        sx={{
                          flex: 1,
                          background: "rgba(15,23,42,0.9)",
                          borderRadius: "10px",
                          padding: "1.5vh 1.2vw",
                          border: "1px solid rgba(34, 211, 238, 0.1)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "rgba(16, 185, 129, 0.9)",
                            fontSize: {
                              xs: "12px",
                              sm: "13px",
                              md: "0.9vw",
                              lg: "0.85vw",
                            },
                            fontWeight: "500",
                            marginBottom: "1.5vh",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                          }}
                        >
                          Tech Stack
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.4vw",
                          }}
                        >
                          {currentExperience.techStack.map((tech) => (
                            <Box
                              key={tech}
                              sx={{
                                padding: "0.3vh 0.6vw",
                                background: "rgba(15,23,42, 0.9)",
                                border: "1px solid rgba(16, 185, 129, 0.4)",
                                borderRadius: "5px",
                                color: "rgba(209, 213, 219, 0.95)",
                                fontSize: {
                                  xs: "11px",
                                  sm: "12px",
                                  md: "0.9vw",
                                  lg: "0.9vw",
                                },
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  background: "rgba(16, 185, 129, 0.15)",
                                  borderColor: "rgba(16, 185, 129, 0.6)",
                                  transform: "translateY(-2px)",
                                },
                              }}
                            >
                              {tech}
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Achievements card */}
                      <Box
                        sx={{
                          flex: 1,
                          background: "rgba(15,23,42,0.9)",
                          borderRadius: "10px",
                          padding: "1.5vh 1.2vw",
                          border: "1px solid rgba(168, 85, 247, 0.15)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "rgba(52, 211, 153, 0.9)",
                            fontSize: {
                              xs: "12px",
                              sm: "13px",
                              md: "0.9vw",
                              lg: "0.85vw",
                            },
                            fontWeight: "500",
                            marginBottom: "1.5vh",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                          }}
                        >
                          Achievements
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.8vh",
                          }}
                        >
                          {currentExperience.achievements.map(
                            (achievement, index) => (
                              <Typography
                                key={index}
                                sx={{
                                  color: "rgba(255, 255, 255, 0.7)",
                                  fontSize: {
                                    xs: "11px",
                                    sm: "12px",
                                    md: "0.9vw",
                                    lg: "0.9vw",
                                  },
                                  lineHeight: "1.4",
                                  paddingLeft: "0.4vw",
                                  borderLeft:
                                    "2px solid rgba(16, 185, 129, 0.5)",
                                }}
                              >
                                {achievement}
                              </Typography>
                            )
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </WavyBackground>
  );
}
