// src/components/Navbar.js
const Navbar = () => {
    return `
        <header class="w-full text-gray-200">
            <nav class="container mx-auto p-4 flex justify-between items-center sm:flex-row">
                <div class="flex items-center">
                <img src="/assets/logo.png" alt="Ready Yatra" class="w-12"/>
                <div class="p-2">
                    <p class="HeadingOne text-3xl text-[#001926]">READY YATRA</p>
                    <p class="text-[9px] text-gray-100 tracking-[1.5em]">JOURNEY</p>
                </div>
                </div>
                <div class="burger md:hidden cursor-pointer z-20 ">
                    <div class="w-4 h-0.5 bg-gray-100 my-2"></div>
                    <div class="w-4 h-0.5 bg-gray-100 my-2"></div>
                    <div class="w-4 h-0.5 bg-gray-100 my-2"></div>
                </div>
                <ul class="navlinks hidden md:flex sm:space-x-12 md:justify-around  transition-all duration-1000 ease-in-out">
                    <li><a href="Home.html" class="hover:text-[#ed7440]">Home</a></li>
                    <li><a href="Destinations.html" class="hover:text-[#ed7440]">Destinations</a></li>
                    <li><a href="Activities.html" class="hover:text-[#ed7440]">Activities</a></li>
                    <li><a href="ContactUs.html" class="hover:text-[#ed7440]">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    `;
};



export default Navbar;
