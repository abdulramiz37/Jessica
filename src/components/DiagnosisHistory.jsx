import DiagnosisCard from "./mini-components/DiagnosisCard";
import respiratory_rate from "../assets/respiratory rate.svg";
import temperature from "../assets/temperature.svg";
import HeartBPM from "../assets/HeartBPM.svg";
import DiagnosisChart from "./mini-components/DiagnosisChart";

export default function DiagnosisHistory() {
  return (
    <div className="mt-7 p-5 bg-white rounded-2xl">

      <div className="text-2xl font-bold text-[#072635]">Diagnosis History</div>

      <DiagnosisChart />

      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-4">
          <DiagnosisCard
            backgroundColor="bg-[#E0F3FA]"
            imgSrc={respiratory_rate}
            title="Respiratory Rate"
            value="20 bpm"
            levels="normal"
          />
        </div>
        <div className="col-span-4">
          <DiagnosisCard
            backgroundColor="bg-[#FFE6E9]"
            imgSrc={temperature}
            title="Temperature"
            value="20 F"
            levels="normal"
          />
        </div>
        <div className="col-span-4">
          <DiagnosisCard
            backgroundColor="bg-[#FFE6F1]"
            imgSrc={HeartBPM}
            title="Heart Rate"
            value="20 bpm"
            levels="normal"
          />
        </div>
      </div>
    </div>
  );
}