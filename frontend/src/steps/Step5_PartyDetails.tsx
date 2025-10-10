import { useStepNavigation } from "../utils/useStepNavigation";
import { useState } from "react";

const Step5_PartyDetails = () => {
  const { next, prev } = useStepNavigation();
  const [partyName, setPartyName] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Step 5: Party Details</h2>

      <input
        type="text"
        placeholder="Enter Party Name"
        value={partyName}
        onChange={(e) => setPartyName(e.target.value)}
        className="border rounded-lg w-full p-2 mb-4"
      />

      <div className="flex justify-between">
        <button onClick={prev} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Back</button>
        <button
          disabled={!partyName}
          onClick={next}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step5_PartyDetails;
