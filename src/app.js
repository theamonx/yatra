import Navbar from './components/Navbar.js';
import TestimonialsCarousel from './components/TestimonialsCarousel.js';
import Footer from './components/Footer.js';
import DestinationCard from './components/DestinationCard.js';
import ActivityCard from './components/ActivityCard.js';
import { fetchDestinations, fetchActivities } from './api.js';

const app = document.getElementById('app');

const renderHomePage = async () => {
    app.innerHTML = `
    
    <div class="banner bg-cover bg-center sm:w-[100%] w-screen h-[800px]" style="background-image: url('/assets/banner4.jpg')">
        ${Navbar()}


    <div class=" flex justify-center items-center ">
            <div class="container mx-auto h-full justify-center pt-48 w-1/2">
                <h2 class="text-white sm:text-8xl text-5xl z-0 font-bold relative Blacksword sm:-m-5">Start</h2>
                <h2 class="text-[#050811] sm:text-8xl text-5xl z-10 HeadingOne sm:pl-28">YOUR JOURNEY</h2>
            </div>
        </div>
            </div>
        <div class="md:w-1/2 w-2/3 mx-auto relative h-[300px] md:h-[600px]"><img src="./assets/collage.png" class="w-[600px] -top-24 absolute" /></div>
        <div class="flex flex-wrap text-center justify-center  gap-8 md:px-40 md:mt-20">
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
            <p class="text-center text-xl  text-sky-500 Blacksword">Travel?</p>
            <h2 class="text-3xl font-bold mb-6 text-center">Why Travel?</h2>
        
        ${TestimonialsCarousel()}
        <div class=" absolute z-20 text-white py-4 bottom-0 w-[300px] ">
            <div class="bg-[#050811] rounded-lg m-4 p-4">
                <div>
                    <h1 class='text-sm sm:text-lg font-bold text-neutral-100'>Admin Login</h1>            
                </div>
                <form id="adminAccess" class="w-[80%] m-4 text-right text-sm">
                    <div id="error-message"></div>
                    <div class="flex flex-col my-2 text-left">
                        <label for="username" class='mb-0.5 text-gray-400'>Name:</label>
                        <input type="text" id="username" name="username" class='text-base px-2 border rounded-xl  border-gray-500' required>
                    </div>
                    <div class="flex flex-col my-2 text-left">
                        <label for="password" class='mb-0.5 text-gray-400'>Password:</label>
                        <input type="password" id="password" name="password" class='text-base px-2 border rounded-xl border-gray-500' required>
                    </div>
                    <button type="submit" class='w-1/3 text-white rounded-2xl border border-white font-bold px-2 py-1 mt-4'>Login</button>
                </form>
            </div>
        ${Footer()}
        </div>
        <div class="banner bg-cover bg-center sm:w-[100%] w-screen h-[800px]" style="background-image: url('/assets/footer.jpg')">
        </div>
        </div>
    `;
    await loadDestinations();
    await loadActivities();
};

const submitForm = () => {
    document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('adminAccess');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            
            const data = await response.json();

            if (response.ok){
                // Store the token in localstorage or cookies
                localStorage.setItem('token', data.token);
                console.log('Login Successful!');
                // redirect to admin dashboard
                window.location.href = data.redirectUrl;
             } else{
                    errorMessage.textContent = data.message || 'Login Failed';
                }
            } catch (error) {
                errorMessage.textContent = 'Error: Unable to Login';
            }
        }
    )
})}
submitForm();


const loadDestinations = async () => {
    const allDestinations = await fetchDestinations();
    const destinations = allDestinations.slice(0, 3)
    const destinationCards = destinations.map(destination => DestinationCard(destination)).join('');
    document.getElementById('destination-cards').innerHTML = destinationCards;
};

const loadActivities = async () => {
    const activities = await fetchActivities();
    const activityCards = activities.map(activity => ActivityCard(activity)).join('');
    document.getElementById('activities-cards').innerHTML = activityCards;
};

renderHomePage();

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.navlinks');
    let burgerClass = ['flex', 'flex-col', 'items-center', 'absolute', 'top-0', 'right-0', 'w-full', 'h-72', 'justify-center', 'pt-16', 'font-bold', 'gap-4', 'bg-[#00000088]'];

    burger.addEventListener('click', ()=>{
        console.log('burger is clicked')
        for(let i=0; i<burgerClass.length; i++){
            navLinks.classList.toggle(burgerClass[i]);
        }
        burger.classList.toggle('active')
        navLinks.classList.toggle('hidden')
    })

    navLinks.addEventListener('click', (e)=>{
        if(e.target.tagName === 'A'){
            for(let i=0; i<burgerClass.length; i++){
                navLinks.classList.remove(burgerClass[i]);
            }
            burger.classList.remove('active')
        }
    })
})