export function ServicesSection() {
    return(
        <section id="services" className="h-screen py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Service 1</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We offer a wide range of services to meet your needs.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Service 2</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Quality and excellence are at the core of what we do.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Service 3</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Your satisfaction is our top priority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}