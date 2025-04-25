import { useEffect, useState } from "react";
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
  const [scores, setScores] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    // Static data for testing
    const staticData: PerformanceEntry[] = [
      { date: "2025-04-01", score: 80 },
      { date: "2025-04-02", score: 85 },
      { date: "2025-04-03", score: 90 },
      { date: "2025-04-04", score: 88 },
      { date: "2025-04-05", score: 92 },
      { date: "2025-04-06", score: 87 },
      { date: "2025-04-07", score: 91 },
    ];

    // Sort and set static data
    const sorted = staticData.sort((a, b) => a.date.localeCompare(b.date));
    setScores(sorted.map((entry) => entry.score));
    setDates(sorted.map((entry) => entry.date));
  }, []);

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
