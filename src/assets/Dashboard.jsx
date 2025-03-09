import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CustomAudioPlayer() {
  const [audioFile, setAudioFile] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [result, setResult] = useState("No result yet");
  const audioRef = useState(new Audio())[0];
  const navigate = useNavigate(); // For navigation

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      setAudioURL(url);
      audioRef.src = url;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.pause();
    } else {
      audioRef.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Stop audio when navigating away
  useEffect(() => {
    return () => {
      audioRef.pause(); // Pause audio when component unmounts
      audioRef.currentTime = 0; // Reset audio time
      setIsPlaying(false);
    };
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black to-purple-600 relative">
      {/* 🔙 Back to Dashboard Button */}
      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-6 left-6 px-6 py-2 text-white shadow-md transition-all"
      >
         Back to Dashboard
      </motion.button>

      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-2xl w-96 text-center border border-white/20"
      >
        {/* Kani ang header ... give me head */}
        <h1 className="text-2xl font-bold text-white mb-4">
          <span className="underline">Upload and Play Audio</span>
        </h1>

        <label
          className="block mb-2 text-sm font-medium text-gray-300"
          htmlFor="audio_input"
        >
          Choose an audio file:
        </label>
        <input
          className="block w-full text-sm text-white bg-black bg-opacity-50 border border-white/30 rounded-lg cursor-pointer shadow-md focus:outline-none"
          id="audio_input"
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
        />

        {audioFile && (
          <p className="mt-4 text-sm text-gray-200">
            Selected File: <strong>{audioFile.name}</strong>
          </p>
        )}

        {audioURL && (
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center justify-center mx-auto transition-all"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            <span className="ml-2">{isPlaying ? "Pause" : "Play"}</span>
          </motion.button>
        )}

        {/* diri mugawas ang result pero wala paman dataset, as is nalang sa ni ha hehehe */}
        <div className="mt-6 p-4 bg-black bg-opacity-50 rounded-lg shadow-md text-white border border-white/30">
          <h2 className="text-xl font-semibold mb-2">Result</h2>
          {result}
        </div>
      </motion.div>
    </div>
  );
}

export default CustomAudioPlayer;
