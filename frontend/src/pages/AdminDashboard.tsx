import { useEffect, useState } from "react";
import { getLogs } from "../api/ecourtsApi";
import type { QueryLog } from "../api/types";

const AdminDashboard = () => {
  const [logs, setLogs] = useState<QueryLog[]>([]);

  useEffect(() => {
    getLogs().then(setLogs).catch(console.error);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Query</th>
              <th className="p-2 text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-t">
                <td className="p-2">{log.id}</td>
                <td className="p-2">{log.query}</td>
                <td className="p-2">{new Date(log.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
