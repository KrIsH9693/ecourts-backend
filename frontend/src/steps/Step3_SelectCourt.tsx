import { useStepNavigation } from "../utils/useStepNavigation";
import { useState } from "react";

const Step3_SelectCourt = () => {
  const { meta, next, prev } = useStepNavigation();
  const [selectedCourt, setSelectedCourt] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Step 3: Select Court</h2>

      <select
        value={selectedCourt}
        onChange={(e) => setSelectedCourt(e.target.value)}
        className="border rounded-lg w-full p-2 mb-4"
      >
        <option value="">Select Court</option>
        {meta?.courts.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div className="flex justify-between">
        <button onClick={prev} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Back</button>
        <button
          disabled={!selectedCourt}
          onClick={next}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3_SelectCourt;
