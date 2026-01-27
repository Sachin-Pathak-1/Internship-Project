import { Layout } from "./Layout";
export function Profile() {
    return (
        <Layout>
            <div className="w-full max-w-4xl mx-auto">
                {/* Page title */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Admin Profile
                </h1>

                <div className="bg-white rounded-xl shadow overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-500 h-28 flex items-center px-6">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-500 text-2xl font-bold shadow">
                            A
                        </div>

                        <div className="ml-4 text-white">
                            <h2 className="text-xl font-semibold">Admin User</h2>
                            <p className="text-sm opacity-90">Administrator</p>
                        </div>
                    </div>

                    {/* Profile details */}
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value="Admin User"
                                disabled
                                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value="admin@example.com"
                                disabled
                                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Role
                            </label>
                            <input
                                type="text"
                                value="Administrator"
                                disabled
                                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Phone
                            </label>
                            <input
                                type="text"
                                value="+91 98765 43210"
                                disabled
                                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="px-6 pb-6 flex justify-end gap-3">
                        <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                            Cancel
                        </button>

                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

