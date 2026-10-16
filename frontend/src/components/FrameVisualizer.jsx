import { motion } from "framer-motion";

export default function FrameVisualizer({ step }) {
  if (!step) return null;

  return (
    <div className="text-center">

      <h2 className="text-xl mb-4">
        Step {step.step} → Page {step.page}
      </h2>

      <div className="flex justify-center gap-4">

        {step.frames.map((f, i) => (
          <motion.div
            key={i}
            className={`w-20 h-20 flex items-center justify-center rounded-xl text-xl font-bold
              ${step.fault ? "bg-red-500/20 border-red-500" : "bg-green-500/20 border-green-400"}
              border-2`}
            animate={{ scale: [0.8, 1] }}
          >
            {f ?? "-"}
          </motion.div>
        ))}

      </div>
    </div>
  );
}