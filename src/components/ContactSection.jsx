export function ContactSection() {
    return(
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
                <div className="space-y-6 text-center">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        If you have any questions or would like to get in touch, please feel free to reach out to us!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700">
                        <p className="text-lg">
                            <span className="font-semibold">Email:</span> contact@example.com
                        </p>
                        <p className="hidden md:block text-gray-400">|</p>
                        <p className="text-lg">
                            <span className="font-semibold">Phone:</span> (123) 456-7890
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}   