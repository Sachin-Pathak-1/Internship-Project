import { Layout } from "./Layout";

export function Appointments() {
  return (
    <Layout>
        <div className="max-w-4xl m-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Appointments
            </h1>

            <div className="bg-white rounded-xl shadow overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-blue-100 text-gray-700">
                        <tr>
                            <th className="p-3">User</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-t">
                            <td className="p-3">Rahul</td>
                            <td className="p-3">25 Jan 2026</td>
                            <td className="p-3">10:30 AM</td>
                            <td className="p-3 text-green-600">Approved</td>
                        </tr>

                        <tr className="border-t">
                            <td className="p-3">Sneha</td>
                            <td className="p-3">26 Jan 2026</td>
                            <td className="p-3">12:00 PM</td>
                            <td className="p-3 text-yellow-600">Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>    
        </Layout> 
  );
}
