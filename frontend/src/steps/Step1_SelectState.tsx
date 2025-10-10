import { useStepNavigation } from "../utils/useStepNavigation";
import { useEffect, useState } from "react";
import { getMetaData } from "../api/ecourtsApi";

const Step1_SelectState = () => {
  const { next, setMeta, meta } = useStepNavigation();
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    (async () => {
      if (!meta) {
        const data = await getMetaData();
        setMeta(data);
      }
    })();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Step 1: Select State</h2>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="border rounded-lg w-full p-2 mb-4"
      >
        <option value="">Select State</option>
        {meta?.states.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <button
        disabled={!selectedState}
        onClick={next}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Step1_SelectState;
