import { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import FrameVisualizer from "../components/FrameVisualizer";
import StatsPanel from "../components/StatsPanel";
import ExplanationPanel from "../components/ExplanationPanel";
import Controls from "../components/Controls";
import Timeline from "../components/Timeline";
import { simulateAPI } from "../services/api";

export default function Home() {
  const [result, setResult] = useState(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const runSimulation = async (data) => {
    const res = await simulateAPI(data);
    setResult(res.data);
    setIndex(0);
  };

  // Auto play
  useEffect(() => {
    if (!playing || !result) return;

    const timer = setInterval(() => {
      setIndex((i) => {
        if (i >= result.steps.length - 1) {
          setPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, 900);

    return () => clearInterval(timer);
  }, [playing, result]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white p-6">

      <h1 className="text-4xl font-bold text-center text-cyan-300 mb-6">
        🧠 Memory Management Visualizer
      </h1>

      {/* Input */}
      <div className="max-w-3xl mx-auto bg-white=/10 p-6 rounded-2xl backdrop-blur-md">
        <InputForm onSubmit={runSimulation} />
      </div>

      {/* Visualization */}
      {result && (
        <div className="max-w-5xl mx-auto mt-8 space-y-6">

          <FrameVisualizer step={result.steps[index]} />

          <Controls
            index={index}
            setIndex={setIndex}
            playing={playing}
            setPlaying={setPlaying}
            total={result.steps.length}
          />

          <Timeline
            steps={result.steps}
            index={index}
            setIndex={setIndex}
          />

          <StatsPanel stats={result} />

          <ExplanationPanel step={result.steps[index]} />
        </div>
      )}
    </div>
  );
}