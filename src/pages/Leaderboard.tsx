import { useEffect, useState } from "react";

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
    // Simulate loading static data instead of fetching from Firestore
    const staticData: LeaderboardUser[] = [
      { id: "1", name: "Alice", avgRating: 4.8, totalInterviews: 50 },
      { id: "2", name: "Bob", avgRating: 4.5, totalInterviews: 42 },
      { id: "3", name: "Charlie", avgRating: 4.3, totalInterviews: 30 },
      { id: "4", name: "David", avgRating: 4.1, totalInterviews: 28 },
      { id: "5", name: "Eve", avgRating: 4.0, totalInterviews: 26 },
      { id: "6", name: "Frank", avgRating: 3.9, totalInterviews: 24 },
      { id: "7", name: "Grace", avgRating: 3.8, totalInterviews: 22 },
      { id: "8", name: "Hannah", avgRating: 3.7, totalInterviews: 20 },
      { id: "9", name: "Isaac", avgRating: 3.6, totalInterviews: 18 },
      { id: "10", name: "Jack", avgRating: 3.5, totalInterviews: 15 },
    ];

    setTimeout(() => {
      setUsers(staticData);
      setLoading(false);
    }, 1000); // Simulate a delay (like fetching from an API)
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
