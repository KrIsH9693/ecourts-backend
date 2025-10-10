import { useStepNavigation } from "../utils/useStepNavigation";
import { useState } from "react";

const Step2_SelectDistrict = () => {
  const { meta, next, prev } = useStepNavigation();
  const [selectedDistrict, setSelectedDistrict] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Step 2: Select District</h2>

      <select
        value={selectedDistrict}
        onChange={(e) => setSelectedDistrict(e.target.value)}
        className="border rounded-lg w-full p-2 mb-4"
      >
        <option value="">Select District</option>
        {meta?.districts.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <div className="flex justify-between">
        <button onClick={prev} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Back</button>
        <button
          disabled={!selectedDistrict}
          onClick={next}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2_SelectDistrict;
