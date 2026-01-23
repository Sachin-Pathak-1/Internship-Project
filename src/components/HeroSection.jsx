import HeroImg from "/sms.webp";

export function HeroSection() {
    return (
        <section className="h-105 bg-blue-300 bg-opacity-1 flex">
            <div className=" flex flex-col justify-center p-10 gap-6">
                <h2 className="text-blue-400 text-5xl font-bold">Welcome to Our Website!</h2>
                <p className="text-white text-2xl">Your success starts here.</p>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit cupiditate voluptate perferendis quis! Vel pariatur molestias illo soluta eum, incidunt nisi ipsa optio recusandae. A eveniet commodi nisi iste.</p>
                <div className="">
                    <button className="bg-blue-400 text-white px-4 py-2 rounded mr-2">Get Started</button>
                    <button className="bg-white text-blue-500 px-4 py-2 rounded border border-blue-500">Learn More</button>
                </div>
            </div>
            <div className="overflow-hidden">
                <img src={HeroImg} alt="Hero" width={1500} />
            </div>
        </section>
    );
}