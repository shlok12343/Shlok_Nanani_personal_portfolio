import { Typography, Box, Chip } from "@mui/material";
import { useState, useRef, memo, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";

// Projects data (GUI cards) - ordered list
const PROJECTS = [
  {
    emoji: "📄🤖",
    title: "Extractive & Abstractive Text Summarization Research",
    description:
      "Researched and implemented ML models for both extractive and abstractive text summarization, comparing approaches on real-world corpora.",
    techStack: ["Python", "NLP", "ML Models"],
    githubUrl:
      "https://github.com/shlok12343/extractive-and-abstractive-text-summarization-with-ML-models-research",
  },
  {
    emoji: "🎯",
    title: "Q-Learning Project",
    description:
      "Built a Q-learning agent that learns optimal policies through trial and error in a reinforcement learning environment.",
    techStack: ["Python", "Reinforcement Learning"],
    githubUrl: "https://github.com/shlok12343/Q_learning_project",
  },
  {
    emoji: "🧠",
    title: "CNN & FNN for Image Classification",
    description:
      "Implemented and compared feedforward and convolutional neural networks on image classification tasks.",
    techStack: ["Python", "Neural Networks", "CNN/FNN"],
    githubUrl:
      "https://github.com/shlok12343/Neural-Networks-CNN-FNN-for-the-task-of-image-classification",
    },
  {
    emoji: "✈️🦅",
    title: "Aviation Wildlife EDA & Modeling",
    description:
      "Exploratory data analysis and predictive modeling on aviation–wildlife incidents to understand risk and patterns.",
    techStack: ["Python", "Pandas", "EDA", "Modeling"],
    githubUrl:
      "https://github.com/shlok12343/AVIATION-WILDLIFE-EDA-AND-MODELING",
    },
  {
    emoji: "💬",
    title: "Social Question Answer Application",
        description:
      "A social Q&A application where users can post questions, answer, and interact over shared topics.",
    techStack: ["Java", "Data Structures", "Backend Logic"],
    githubUrl:
      "https://github.com/shlok12343/Social-Question-Answer-Application",
  },
  {
    emoji: "📈",
    title: "Stock Trading Model",
        description:
      "Modeled and evaluated trading strategies using historical stock data and quantitative features.",
    techStack: ["Python", "Time Series", "Finance"],
    githubUrl: "https://github.com/shlok12343/Stock-Trading-Model",
  },
  {
    emoji: "🐶",
    title: "Robot Dog",
        description:
      "Designed and programmed behavior for a robot dog, exploring control logic and interactive movement.",
    techStack: ["Python", "Robotics", "Control Logic"],
    githubUrl: "https://github.com/shlok12343/robot-dog",
        },
  {
    emoji: "🍳",
    title: "Recipe Generator",
        description:
      "An AI-assisted recipe generator that suggests dishes based on ingredients and preferences.",
    techStack: ["Python", "NLP", "Recommendation"],
    githubUrl: "https://github.com/shlok12343/Recipe-Generator",
  },
];

// Floating code snippets data
const snippets = [
  "const server = express();",
  "const agent = new LLMChain();",
  "app.listen(PORT, () => {});",
  "useEffect(() => fetch(), []);",
  "router.post('/api', handler);",
  "const data = await response.json();",
  "export default Component;",
  "vectorStore.similaritySearch(query);",
];

// Floating background animation component
const FloatingBg = memo(() => {
  const delays = [0, 8, 14, 2, 16, 10, 4, 12];
  const speeds = [30, 22, 35, 18, 40, 25, 32, 20];

  return (
    <>
      {snippets.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: i === 8 ? "105vh" : `${20 + i * 11}vh`,
            left: i % 2 === 0 ? "-40vh" : "100%",
            zIndex: 1,
            opacity: 0.15,
          }}
          animate={{
            x:
              i % 2 === 0
                ? ["0vh", "calc(100vw + 40vh)"]
                : ["0vh", "calc(-100vw - 40vh)"],
          }}
          transition={{
            x: {
              duration: speeds[i],
              ease: "linear",
              repeat: Infinity,
              delay: delays[i],
            },
          }}
        >
          <Box
            sx={{
              padding: { xs: "6px 12px", md: "0.8vh 1.5vh" },
              border: "1px solid rgba(16, 185, 129, 0.25)",
              borderRadius: "0.5vh",
              background: "rgba(15, 23, 42, 0.9)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "2.5vh" },
                color: "#6ee7b7",
                fontFamily: "Consolas, monospace",
                whiteSpace: "nowrap",
              }}
            >
              {s}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </>
  );
});

export default function ProjectsSection() {
  return (
    <Box
      id="projects-section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "90vh",
        overflow: "hidden",
      }}
    >
      <FloatingBg />

      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
                boxShadow: "0 0 10px rgba(16,185,129,0.4)",
            }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "8vw", sm: "6vw", md: "3.5vw" },
              whiteSpace: "nowrap",
            }}
          >
            Projects
          </Typography>
          <Box
            sx={{
              width: { xs: "20vw", sm: "25vw", md: "30vw" },
              height: "3px",
                background: "linear-gradient(90deg, #10b981, transparent)",
              borderRadius: "2px",
                boxShadow: "0 0 10px rgba(16,185,129,0.4)",
            }}
          />
        </Box>
      </motion.div>

      {/* Projects GUI container */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "6vh",
          paddingBottom: "10vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "90vw", sm: "85vw", md: "80vw", lg: "75vw" },
            maxWidth: "1400px",
            background: "rgba(15, 23, 42, 0.9)",
            borderRadius: { xs: "8px", md: "0.8vh" },
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
            border: "1px solid rgba(30, 64, 175, 0.4)",
            position: "relative",
            padding: { xs: "16px", md: "3vh" },
          }}
            >
          {/* Projects grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 3, md: 4 },
                }}
              >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.githubUrl}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                >
                <Box
                  sx={{
                    height: "100%",
                    background: "rgba(15,23,42,0.95)",
                    borderRadius: 2,
                    border: "1px solid rgba(16,185,129,0.5)",
                    padding: { xs: 2, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                    transition: "box-shadow 0.2s ease",
                    "&:hover": {
                      boxShadow: "0 16px 40px rgba(0,0,0,0.75)",
                    },
                        }}
                      >
                <Box
                  sx={{
                    display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      mb: 0.5,
                        }}
                      >
                          <Typography
                            sx={{
                        fontSize: "1.8rem",
                            }}
                          >
                      {project.emoji}
                          </Typography>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1rem", md: "1.05rem" },
                        color: "#ecfeff",
                        }}
                    >
                      {project.title}
                      </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      color: "rgba(226,232,240,0.9)",
                      lineHeight: 1.5,
                      flexGrow: 0,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                      mt: 0.5,
                    }}
                  >
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: "0.7rem",
                          height: "auto",
                          paddingY: 0.25,
                          borderRadius: "999px",
                          backgroundColor: "rgba(15,118,110,0.3)",
                          border: "1px solid rgba(34,197,94,0.5)",
                          color: "#bbf7d0",
                        }}
                      />
                    ))}
                </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: "auto",
                    }}
                  >
                    <Box
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        paddingX: 1.75,
                        paddingY: 0.75,
                        borderRadius: "999px",
                        border: "1px solid rgba(16,185,129,0.7)",
                        backgroundColor: "rgba(6,78,59,0.65)",
                        textDecoration: "none",
                        color: "#ecfdf5",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        transition: "background-color 0.2s ease, border-color 0.2s ease",
                        "&:hover": {
                          backgroundColor: "rgba(5,150,105,0.9)",
                          borderColor: "rgba(52,211,153,1)",
                        },
                      }}
                    >
                      <GitHubIcon sx={{ fontSize: "1rem" }} />
                      <span>View on GitHub</span>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
