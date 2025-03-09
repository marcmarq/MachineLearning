import { useState } from "react";
import { Play, Pause } from "lucide-react"; 

function CustomAudioPlayer() {
    const [audioFile, setAudioFile] = useState(null);
    const [audioURL, setAudioURL] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [result, setResult] = useState("No result yet");
    const audioRef = useState(new Audio())[0];

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

    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-96 mx-auto text-center">
            {/* Heading */}
            <h1 className="text-2xl font-bold underline text-gray-900 dark:text-white mb-4">
                Upload and Play Audio
            </h1>

            {/* File Upload Input */}
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="audio_input"
            >
                Choose an audio file:
            </label>
            <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="audio_input"
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
            />

            {/* Show selected file name */}
            {audioFile && (
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    Selected File: <strong>{audioFile.name}</strong>
                </p>
            )}

            {/* Custom Play Button */}
            {audioURL && (
                <button
                    onClick={togglePlay}
                    className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center justify-center mx-auto"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    <span className="ml-2">{isPlaying ? "Pause" : "Play"}</span>
                </button>
            )}

            {/* Result Box */}
            <div className="mt-6 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
                <h2 className="text-xl font-semibold mb-2">Result</h2>
                {result}
            </div>
        </div>
    );
}

export default CustomAudioPlayer;
