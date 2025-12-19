import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const RECOMMENDATIONS = [
  {
    name: "Jordan Silbert",
    title: "Senior Software Engineer at Wayfair",
    relationship: "Senior teammate on the Knowledge and Generative AI Acceleration team at Wayfair",
    quote:
      "I had the pleasure of overseeing Shlok during his time as a co-op at Wayfair. From the start, he demonstrated a strong desire to learn and get involved, never shying away from larger, more complex tasks. Shlok is incredibly thorough and detail-oriented, and his natural curiosity was a huge asset. This was especially clear in his proactive interest in experimenting with new tooling and staying current with the ever-evolving AI space. His work on new documentation wasn't just about reading; he truly understood the material and was able to ask insightful questions and make educated suggestions that directly benefited our team's decision-making. In addition to his strong work ethic and attention to detail, Shlok's adaptability was truly impressive. He joined a newly formed team that was still figuring out its processes and direction, and handled several pivots with a consistently positive attitude. His combination of a strong work ethic and a proactive, adaptable attitude makes him a standout.",
  },
  {
    name: "Saurabh K Singh",
    title: "Lead Data Engineer at Wayfair",
    relationship: "Senior teammate on the Knowledge and Generative AI Acceleration team at Wayfair",
    quote:
      "I had the pleasure of working with Shlok during his co-op term on our team, and he made a strong impression right from the start. He was a quick learner who onboarded swiftly and contributed meaningfully by building several evaluations early on. His dedication, curiosity, and eagerness to learn made him a true asset to the team. Shlok consistently showed interest in exploring new tools and staying up to date with AI trends, often asking thoughtful and insightful questions. I’m confident he has a bright future ahead and would be a great addition to any team.",
  },
];

export default function RecommendationsSection() {
  return (
    <Box
      id="recommendations-section"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mb: { xs: "6vh", sm: "7vh", md: "8vh" },
      }}
    >
      <Box
        sx={{
          width: "80vw",
          maxWidth: "1400px",
          borderRadius: "16px",
          border: "1px solid rgba(16,185,129,0.5)",
          background:
            "radial-gradient(circle at top left, rgba(16,185,129,0.15), transparent 55%), #020617",
          boxShadow: "0 18px 45px rgba(15,23,42,0.8)",
          px: { xs: 3, md: 4, lg: 6 },
          py: { xs: 4, md: 5, lg: 6 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section title */}
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: "3vw", sm: "2vw" },
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: { xs: "18vw", sm: "22vw", md: "26vw" },
                  height: "3px",
                  background: "linear-gradient(90deg, transparent, #10b981)",
                  borderRadius: "2px",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "7vw", sm: "5.5vw", md: "3vw" },
                  whiteSpace: "nowrap",
                }}
              >
                Recommendations
              </Typography>
              <Box
                sx={{
                  width: { xs: "18vw", sm: "22vw", md: "26vw" },
                  height: "3px",
                  background: "linear-gradient(90deg, #10b981, transparent)",
                  borderRadius: "2px",
                }}
              />
            </Box>
          </motion.div>

          {/* Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3, md: 4 },
            }}
          >
            {RECOMMENDATIONS.map((rec) => (
              <motion.div key={rec.name} variants={fadeInUp}>
                <Box
                  sx={{
                    height: "100%",
                    borderRadius: "14px",
                    border: "1px solid rgba(148,163,184,0.5)",
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.98))",
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1.05rem", md: "1.15rem" },
                      fontWeight: 700,
                      color: "#e5e7eb",
                    }}
                  >
                    {rec.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.9rem", md: "0.95rem" },
                      color: "rgba(209,213,219,0.9)",
                    }}
                  >
                    {rec.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", md: "0.85rem" },
                      color: "rgba(148,163,184,0.9)",
                      fontStyle: "italic",
                    }}
                  >
                    {rec.relationship}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      lineHeight: 1.6,
                      color: "rgba(226,232,240,0.95)",
                    }}
                  >
                    “{rec.quote}”
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* View more on LinkedIn */}
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                mt: { xs: 4, md: 5 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/shlok-nanani-91608a219/details/recommendations/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    px: 3,
                    py: 1.25,
                    borderRadius: "999px",
                    border: "1px solid rgba(16,185,129,0.8)",
                    backgroundColor: "rgba(6,78,59,0.8)",
                    color: "#ecfdf5",
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    boxShadow: "0 10px 25px rgba(16,185,129,0.35)",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#10b981",
                      borderColor: "#a7f3d0",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  View Full Recommendations on LinkedIn
                </Box>
              </a>
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}


