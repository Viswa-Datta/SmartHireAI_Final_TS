import { useEffect, useState } from "react";
import { db } from "@/config/firebase.config";

import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

interface LeaderboardUser {
  id: string;
  name: string;
  avgRating: number;
  totalInterviews: number;
}

const Leaderboard = () => {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, orderBy("avgRating", "desc"), limit(10));
        const snapshot = await getDocs(q);
        const topUsers: LeaderboardUser[] = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name || "Anonymous",
          avgRating: doc.data().avgRating || 0,
          totalInterviews: doc.data().totalInterviews || 0,
        }));
        setUsers(topUsers);
      } catch (error) {
        console.error("Error loading leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🏆 Leaderboard</h1>
      {loading ? (
        <p>Loading leaderboard...</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">Rank</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Avg. Rating</th>
              <th className="border border-gray-300 px-4 py-2">Interviews</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.avgRating.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">{user.totalInterviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;