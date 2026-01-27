import { Layout } from "./Layout";

export function Dashboard() {
    return (
        <Layout >

            <div className=" space-y-6 m-auto">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Admin Dashboard
                </h1>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
                        <h2 className="text-sm">Total Users</h2>
                        <p className="text-3xl font-bold mt-2">124</p>
                    </div>

                    <div className="bg-blue-400 text-white p-6 rounded-xl shadow">
                        <h2 className="text-sm">Appointments</h2>
                        <p className="text-3xl font-bold mt-2">38</p>
                    </div>

                    <div className="bg-blue-300 text-white p-6 rounded-xl shadow">
                        <h2 className="text-sm">Pending Requests</h2>
                        <p className="text-3xl font-bold mt-2">5</p>
                    </div>
                </div>

                {/* Recent activity */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-4">
                        Recent Activity
                    </h2>

                    <ul className="space-y-3 text-gray-600">
                        <li>✔ New appointment booked</li>
                        <li>✔ Profile updated</li>
                        <li>✔ Appointment approved</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}