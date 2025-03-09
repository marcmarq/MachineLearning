import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
};

function App() {
  const navigate = useNavigate(); 

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-purple-700"
    >
      <motion.button
        whileHover={{
          scale: 1.15,
          boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.7)",
          textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/dashboard")}
        className="px-12 py-6 text-4xl font-bold text-white rounded-2xl bg-black bg-opacity-50 backdrop-blur-md border border-white/30 shadow-xl transition-all duration-300"
      >
         Emotion Detector
      </motion.button>
    </motion.div>
  );
}

export default App;
