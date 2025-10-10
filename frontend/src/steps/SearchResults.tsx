import { useStepNavigation } from "../utils/useStepNavigation";
import { useEffect } from "react";
import { getCaseDetails } from "../api/ecourtsApi";

const SearchResults = () => {
  const { prev, caseResult, setCaseResult } = useStepNavigation();

  useEffect(() => {
    if (!caseResult) {
      getCaseDetails({ caseNumber: "1234" }).then(setCaseResult);
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Search Results</h2>

      {caseResult ? (
        <div className="space-y-2">
          <p><strong>Case Number:</strong> {caseResult.caseNumber}</p>
          <p><strong>Parties:</strong> {caseResult.parties.join(", ")}</p>
          <p><strong>Status:</strong> {caseResult.status}</p>
          <p><strong>Next Hearing:</strong> {caseResult.nextHearing}</p>
        </div>
      ) : (
        <p>Loading case details...</p>
      )}

      <button onClick={prev} className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-lg">
        Back
      </button>
    </div>
  );
};

export default SearchResults;
