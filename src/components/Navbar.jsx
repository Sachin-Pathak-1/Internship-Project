import Logo from "/logo.png";

export function Navbar() {
    return (
        <nav className="flex bg-gray-500 justify-between items-center px-4">
            {/* left */}
            <div className="flex items-center">
                <div className="">
                    <img src={Logo} alt="Logo" width={55}/>
                </div>
                <div> Learnytics </div>
            </div>
            {/* right  */}
            <div className="flex justify-between items-center gap-6">
                <div className="">Home</div>
                <div className="">About</div>
                <div className="">Serivces</div>
                <div className="">Contact</div>
            </div>
        </nav>
    );
}