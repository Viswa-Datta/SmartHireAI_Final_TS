import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const CertificateViewer = () => {
  const [eligible, setEligible] = useState(false);
  const [userName, setUserName] = useState("John Doe"); // Static name for now

  useEffect(() => {
    // Simulate fetching static data (replace with Firebase logic later)
    const staticData = {
      avgRating: 8, // Example score
      totalInterviews: 6, // Example count
      name: "John Doe",
    };

    setUserName(staticData.name);

    const { avgRating, totalInterviews } = staticData;

    // Check eligibility: avgRating >= 7 and totalInterviews >= 5
    if (avgRating >= 7 && totalInterviews >= 5) {
      setEligible(true);
    }
  }, []);

  const downloadCertificate = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(24);
    pdf.text("Certificate of Interview Readiness", 20, 40);
    pdf.setFontSize(16);
    pdf.text(`This certifies that ${userName}`, 20, 60);
    pdf.text("has successfully completed SmartHire AI's interview program", 20, 70);
    pdf.text("and demonstrated strong communication and preparation skills.", 20, 80);
    autoTable(pdf, {
      head: [["Date Issued"]],
      body: [[new Date().toLocaleDateString()]],
      startY: 100,
    });
    pdf.save("SmartHire_Certificate.pdf");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🎓 Interview Readiness Certificate</h1>
      {eligible ? (
        <>
          <p className="mb-4">Congratulations {userName}! You are eligible for a certificate.</p>
          <button
            onClick={downloadCertificate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Download Certificate
          </button>
        </>
      ) : (
        <p>You are not yet eligible. Complete 5+ interviews with avg rating ≥ 7 to earn a certificate.</p>
      )}
    </div>
  );
};

export default CertificateViewer;
