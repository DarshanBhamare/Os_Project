export default function ExplanationPanel({ step }) {
  if (!step) return null;

  return (
    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md"> 

      <h2 className="text-cyan-300 font-bold mb-2">
        🧠 Explanation
      </h2>

      {step.fault ? (
        <p>
          Page <b>{step.page}</b> caused a <span className="text-red-400">Page Fault</span>.
          It was loaded into memory (replacement may have occurred).
        </p>
      ) : (
        <p>
          Page <b>{step.page}</b> was found in memory →{" "}
          <span className="text-green-400">Page Hit</span>.
        </p>
      )}

    </div>
  );
}