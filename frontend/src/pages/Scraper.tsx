import { useStepNavigation } from "../utils/useStepNavigation";
import Step1_SelectState from "../steps/Step1_SelectState";
import Step2_SelectDistrict from "../steps/Step2_SelectDistrict";
import Step3_SelectCourt from "../steps/Step3_SelectCourt";
import Step4_CaseDetails from "../steps/Step4_CaseDetails";
import Step5_PartyDetails from "../steps/Step5_PartyDetails";
import Step6_Captcha from "../steps/Step6_Captcha";
import SearchResults from "../steps/SearchResults";

const Scraper = () => {
  const { currentStep } = useStepNavigation();

  const steps = [
    <Step1_SelectState />,
    <Step2_SelectDistrict />,
    <Step3_SelectCourt />,
    <Step4_CaseDetails />,
    <Step5_PartyDetails />,
    <Step6_Captcha />,
    <SearchResults />,
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">eCourts Scraper</h1>
      {steps[currentStep - 1]}
    </div>
  );
};

export default Scraper;
