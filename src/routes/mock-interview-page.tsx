import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import LoaderPage from "./loader-page";
import { QuestionSection } from "@/components/question-section";

export const MockInterviewPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interviewData, setInterviewData] = useState<Interview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterview = async () => {
      if (!interviewId) return;

      try {
        const ref = doc(db, "interviews", interviewId);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          setInterviewData({
            id: docSnap.id,
            ...docSnap.data(),
          } as Interview);
        }
      } catch (error) {
        console.error("Error fetching interview:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, [interviewId]);

  if (loading) return <LoaderPage className="w-full h-[70vh]" />;

  return (
    <div className="w-full p-6">
      {interviewData && (
        <QuestionSection
          questions={interviewData.questions || []}
          interviewId={interviewData.id}
        />
      )}
    </div>
  );
};
