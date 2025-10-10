import { useStepNavigation } from "../utils/useStepNavigation";
import { useState } from "react";

const Step6_Captcha = () => {
  const { next, prev } = useStepNavigation();
  const [captcha, setCaptcha] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Step 6: Captcha Verification</h2>

      <div className="flex items-center gap-3 mb-3">
        <img src="/api/captcha" alt="captcha" className="border rounded-md" />
        <button onClick={() => window.location.reload()} className="text-blue-500 text-sm">
          Refresh
        </button>
      </div>

      <input
        type="text"
        placeholder="Enter Captcha"
        value={captcha}
        onChange={(e) => setCaptcha(e.target.value)}
        className="border rounded-lg w-full p-2 mb-4"
      />

      <div className="flex justify-between">
        <button onClick={prev} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Back</button>
        <button
          disabled={!captcha}
          onClick={next}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Step6_Captcha;
