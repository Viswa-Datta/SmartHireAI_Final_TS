import { useEffect, useState } from "react";
import { db } from "@/config/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "@clerk/clerk-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface PerformanceEntry {
  date: string;
  score: number;
}

const Analytics = () => {
  const { userId } = useAuth();
  const [scores, setScores] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      const userDoc = await getDoc(doc(db, "users", userId));
      const data = userDoc.data();

      if (data?.performanceHistory) {
        const sorted = (data.performanceHistory as PerformanceEntry[]).sort((a, b) =>
          a.date.localeCompare(b.date)
        );
        setScores(sorted.map((entry) => entry.score));
        setDates(sorted.map((entry) => entry.date));
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📊 Your Performance Analytics</h1>
      {scores.length > 0 ? (
        <Line
          data={{
            labels: dates,
            datasets: [
              {
                label: "Average Interview Score",
                data: scores,
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.3)",
              },
            ],
          }}
        />
      ) : (
        <p>No performance data available yet. Start a mock interview to track progress!</p>
      )}
    </div>
  );
};

export default Analytics;