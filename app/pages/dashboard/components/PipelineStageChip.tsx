import DiscoveryMeeting from "public/icons/DiscoveryMeeting";
import Negotiation from "public/icons/Negotiation";
import ProductEvaluation from "public/icons/ProductEvaluation";
import SearchUser from "public/icons/SearchUser";
import ShakeHandMoney from "public/icons/ShakeHandMoney";
import { BsBox } from "react-icons/bs";

const PipelineStageChip = ({ stage }: { stage: string }) => {
  const stages = {
    "Discovery Meeting": {
      icon: <DiscoveryMeeting />,
      label: "Discovery Meeting",
    },
    "Product Evaluation": {
      icon: <ProductEvaluation />,
      label: "Product Evaluation",
    },
    Prospecting: {
      icon: <ShakeHandMoney />,
      label: "Prospecting",
    },
    "Product Demo": {
      icon: <BsBox className='text-xl' />,
      label: "Product Demo",
    },
    "Negotiation/Legal": {
      icon: <Negotiation />,
      label: "Negotiation",
    },
    "Closed Won": {
      icon: <SearchUser />,
      label: "Closed Won",
    },
  };

  return (
    <div className='flex justify-center min-w-0 items-center gap-2 font-roobert-pro px-4 py-[9px] large:py-1.5 bg-[#ebebeb] rounded-xl'>
      <span>{stages[stage as keyof typeof stages].icon}</span>
      <span className='text-center text-sm whitespace-nowrap w-[124px]'>
        {stages[stage as keyof typeof stages].label}
      </span>
    </div>
  );
};

export default PipelineStageChip;
