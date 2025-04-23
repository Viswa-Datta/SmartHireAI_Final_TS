import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";

const CertificateViewer = () => {
  const { userId } = useAuth();
  const [eligible, setEligible] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkEligibility = async () => {
      if (!userId) return;

      const docRef = doc(db, "users", userId);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const data = snap.data();
        setUserName(data.name || "User");

        const score = data.avgRating || 0;
        const count = data.totalInterviews || 0;
        if (score >= 7 && count >= 5) {
          setEligible(true);
        }
      }
    };

    checkEligibility();
  }, [userId]);

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
      startY: 100
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