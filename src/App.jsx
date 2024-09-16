import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";
import Navbar from "./components/Navbar";
import PatientData from "./components/PatientData";
import PatientsSidebar from "./components/PatientsSidebar";

export default function App() {
  return (
    <>
      <div className="bg-neutral-100 p-5">
        <Navbar />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <PatientsSidebar />
          </div>
          <div className="col-span-6">
            <DiagnosisHistory />
            <DiagnosticList />
          </div>
          <div className="col-span-3">
          <PatientData />
          <LabResults />
          </div>
        </div>
      </div>
    </>
  );
}
