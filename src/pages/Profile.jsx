export function Profile() {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center">User Profile</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold">Name:</h3>
                        <p className="text-gray-700">John Doe</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Email:</h3>
                        <p className="text-gray-700">
                            john.doe@example.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}