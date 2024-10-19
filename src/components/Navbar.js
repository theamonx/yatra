// src/components/Navbar.js
const Navbar = () => {
    return `
        <header class="w-full text-gray-200">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <div class="flex items-center">
                <img src="../assets/logo.png" alt="Ready Yatra" class="w-12"/>
                <div class="p-2">
                    <p class="HeadingOne text-3xl text-[#001926]">READY YATRA</p>
                    <p class="text-[9px] text-gray-100 tracking-[1.5em]">JOURNEY</p>
                </div>
                </div>
                <ul class="flex space-x-12">
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
