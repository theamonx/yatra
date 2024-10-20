import "../addRequire.js";
import Navbar from './components/Navbar.js';
import TestimonialsCarousel from './components/TestimonialsCarousel.js';
import Footer from './components/Footer.js';
import DestinationCard from './components/DestinationCard.js';
import ActivityCard from './components/ActivityCard.js';
import { fetchDestinations, fetchActivities } from './api.js';

const app = document.getElementById('app');

const renderHomePage = async () => {
    app.innerHTML = `
    
    <div class="banner bg-cover bg-center w-[100%] h-[800px]" style="background-image: url('../assets/banner4.jpg')">
        ${Navbar()}


    <div class=" flex justify-center items-center ">
            <div class="container mx-auto h-full justify-center pt-48 w-1/2">
                <h2 class="text-white text-8xl z-0 font-bold relative Blacksword -m-5">Start</h2>
                <h2 class="text-[#050811] text-8xl z-10 HeadingOne pl-28">YOUR JOURNEY</h2>
            </div>
        </div>
            </div>
        <div class="w-1/2 mx-auto relative h-[600px]"><img src="./assets/collage.png" class="w-[600px] -top-24 absolute" /></div>
        <div class="flex flex-wrap text-center gap-8 px-40 mt-20">
            <div class="w-[300px]">
                <img src="./assets/SVG/location-pin.svg" class="h-8 mx-auto"/>
                <h1 class="text-2xl font-bold my-2">Handpicked Location</h1>
                <p class="text-xs text-gray-500 w-9/10 mx-auto">Famous Places to Hidden Gems, We got you nicely covered</p>
            </div>
            <div class="w-[300px]">
                <img src="./assets/SVG/wallet.svg" class="h-8 mx-auto"/>
                <h1 class="text-2xl font-bold my-2">Best Prices</h1>
                <p class="text-xs text-gray-500 w-9/10 mx-auto">Famous Places to Hidden Gems, We got you nicely covered</p>
            </div>
            <div class="w-[300px]">
                <img src="./assets/SVG/handshake.svg" class="h-8 mx-auto"/>
                <h1 class="text-2xl font-bold my-2">Easy to Register</h1>
                <p class="text-xs text-gray-500 w-9/10 mx-auto">Famous Places to Hidden Gems, We got you nicely covered</p>
            </div>
        </div>
        <div id="destinations" class="popular-destinations container mx-auto py-10 mt-24 w-4/5">
            <p class="text-center text-xl  text-sky-500 Blacksword">Popular Destination</p>
            <h2 class="text-3xl m-4 font-bold mb-6 text-center">Explore Popular Destinations</h2>
            <p class="text-base text-gray-500 text-center">Get started with handpicked top rated trips.</p>
            <div id="destination-cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
                <!-- Dynamic Destination Cards will be injected here -->
            </div>
        </div>

        <!-- Activities Section -->
        <div id="activities" class="activities container mx-auto py-10 w-4/5">
            <p class="text-center text-xl  text-sky-500 Blacksword">Activities</p>
            <h2 class="text-3xl font-bold mb-6 text-center">Explore Destination by Activities</h2>
            <p class="text-base text-gray-500 text-center">Get thrills that you won't get anywhere else.</p>
            <div id="activities-cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
             <!-- Dynamic Activity Cards will be injected here -->
            </div>
        </div>
        <div class="relative">
        ${TestimonialsCarousel()}
        ${Footer()}
        <img src="./assets/footer.jpg" />
        </div>
    `;
    await loadDestinations();
    await loadActivities();
};

const loadDestinations = async () => {
    const destinations = await fetchDestinations();
    const destinationCards = destinations.map(destination => DestinationCard(destination)).join('');
    document.getElementById('destination-cards').innerHTML = destinationCards;
};

const loadActivities = async () => {
    const activities = await fetchActivities();
    const activityCards = activities.map(activity => ActivityCard(activity)).join('');
    document.getElementById('activities-cards').innerHTML = activityCards;
};

renderHomePage();
