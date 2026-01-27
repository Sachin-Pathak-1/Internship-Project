const tabs = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Appointments", href: "/appointments" },
];

export function SideBar(){
    return(
        <div className=" flex flex-col gap-4 h-full w-48 rounded-2xl bg-blue-500 p-4">
            {tabs.map((tab)=>
                <a key={tab.name} href={tab.href} className="flex justify-start pl-3 gap-2 p-2 hover:bg-blue-700 rounded-lg">
                    <div className="text-lg font-medium text-white">
                        {tab.name}
                    </div>
                </a>
            )}
        </div>
    )
}