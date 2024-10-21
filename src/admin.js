import Navbar from './components/Navbar.js';
// import TestimonialsCarousel from './components/TestimonialsCarousel.js';
// import Footer from './components/Footer.js';
// import DestinationCard from './components/DestinationCard.js';
// import ActivityCard from './components/ActivityCard.js';
// import { fetchDestinations, fetchActivities } from './api.js';

const app = document.getElementById('app');

const renderAdminPage = async () => {

    app.innerHTML = `
    
        <div class="banner bg-white w-[100%] h-[800px]">
        ${Navbar()}
        <h1>Welcome to Admin Page</h1>
    `
}

renderAdminPage()