import Navbar from './components/Navbar.js';
// import TestimonialsCarousel from './components/TestimonialsCarousel.js';
import DestinationAdminCard from './components/DestinationAdminCard.js';
// import ActivityCard from './components/ActivityCard.js';
import { fetchDestinations, fetchActivities } from '/api.js';

const app = document.getElementById('app');

const renderAdminPage = async () => {

    app.innerHTML = `
        <div class="bg-[#eee]  min-h-screen h-full">
        <div class=" bg-[#000000cc] min-h-screen h-full p-16 text-neutral-500">
        <img src="/assets/logo.png" alt="logo" class=" absolute top-8 right-4 w-12 ml-auto mx-10">
        <h1 class='text-xl sm:text-4xl font-bold text-[#ed7440] mb-8'>Admin Panel</h1>
        <div class="flex">
            <div class="w-1/5 ml-auto">
                <button id="destinationTabBtn" class="bg-neutral-100  p-3 min-w-[120px] w-full tablinks rounded-tl-md">Destinations</button>
                <button id="activityTabBtn" class="bg-neutral-300  p-3 min-w-[120px] w-full tablinks">Activities</button>
                <button id="carouselTabBtn" class="bg-neutral-300  p-3 min-w-[120px] w-full tablinks">Carousels</button>
                <button id="adminTabBtn" class="bg-neutral-300  p-3 min-w-[120px] w-full tablinks rounded-bl-md">Admins</button>
            </div>
            <div class="bg-neutral-100 w-4/5 ml-0 p-3 rounded-r-md rounded-bl-md">
                <div id="destinationTab" class="tabcontent">
                    <section id="destinations" class="container mx-auto mb-4">
                        <h2 class="text-xl font-bold mb-6">Add/Edit Destinations</h2>
                        <div>
                            <form id="addDestination" class="w-[900px] mx-auto flex flex-wrap gap-4 justify-between items- mb-8 text-xs">
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-col w-[400px]">
                                    <label for="id" class='mb-0.5 text-gray-400'>ID:</label>
                                    <input type="text" id="id" name="id" class='text-sm px-2 border rounded-md p-1  border-gray-500' readonly>
                                </div>
                                <div class="flex flex-col w-[400px]">
                                    <label for="title" class='mb-0.5 text-gray-400'>Title:</label>
                                    <input type="text" id="title" name="title" class='text-sm px-2 border rounded-md p-1  border-gray-500' required>
                                </div>
                                <div class="flex flex-col w-[400px]">
                                    <label for="image" class='mb-0.5 text-gray-400'>Image URL:</label>
                                    <input type="text" id="image" name="image" class='text-sm px-2 border rounded-md p-1  border-gray-500' required>
                                </div>
                                <div class="flex flex-col w-[400px]">
                                <label for="location" class='mb-0.5 text-gray-400'>Location:</label>
                                    <input type="text" id="location" name="location" class='text-sm px-2 border rounded-md p-1  border-gray-500' required>
                                </div>
                                <div class="flex flex-col w-[400px]">
                                    <label for="price" class='mb-0.5 text-gray-400'>Price:</label>
                                    <input type="number" id="price" name="price" class='text-sm px-2 border rounded-md p-1  border-gray-500'>
                                </div>
                                <div class="flex flex-col w-[400px]">
                                    <label for="activities" class='mb-0.5 text-gray-400'>Activities:</label>
                                    <input type="text" id="activities" name="activities" class='text-sm px-2 border rounded-md p-1  border-gray-500'>
                                </div>
                                <div class="flex flex-col w-[400px]">
                                    <label for="days" class='mb-0.5 text-gray-400'>Days:</label>
                                    <input type="number" id="days" name="days" class='text-sm px-2 border rounded-md p-1  border-gray-500'>
                                </div>
                            </div>
                                <div class="flex flex-col w-[400px]">
                                    <label for="description" class='mb-0.5 text-gray-400'>Description:</label>
                                    <textarea cols="10" rows="11" id="description" name="description" class='text-base px-2 border rounded-md p-3  border-gray-500'></textarea>
                                </div>
                                <div class="ml-auto">
                                 <button type="submit"  class='w-[100px]  text-black rounded-2xl border border-black font-bold px-2 py-1 mt-4'>Add</button>
                                 
                                 
                                 </div>
                            </form>
                            <h2 class="text-xl font-bold mb-6">Delete Destinations</h2>
                            <div>
                            <form id="deleteDestination" class="w-[900px] mx-auto flex flex-wrap gap-4 justify-between items- mb-8 text-xs">
                            <div class="flex flex-wrap gap-2">
                                <div class="flex flex-col w-[400px]">
                                    <label for="titleForDeletion" class='mb-0.5 text-gray-400'>Title:</label>
                                    <input type="text" id="titleForDeletion" name="titleForDeletion" class='text-sm px-2 border rounded-md p-1  border-gray-500' required>
                                </div>
                                <div class="flex flex-col w-[400px]">
                                    <label for="idForDeletion" class='mb-0.5 text-gray-400'>ID:</label>
                                    <input type="text" id="idForDeletion" name="idForDeletion" class='text-sm px-2 border rounded-md p-1  border-gray-500' readonly>
                                </div>
                            </div>
                                <button type="submit"  class='w-[100px] ml-auto text-white bg-black rounded-2xl border border-black font-bold px-2 py-1 mt-4'>Delete</button>
                            </form>
                            </div>
                        </div>
                        <h2 class="text-xl font-bold mb-6">Manage Destinations</h2>
                            <div id="destinations-cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <!-- Dynamic Destination Cards will be injected here -->
                        </div>
                        
                    </section>
                </div>
                <div id="activityTab" class="tabcontent hidden">
                    <h1>This is Activity Tab
                </div>
                <div id="carouselTab" class="tabcontent hidden">
                    <h1>This is Carousel Tab
                </div>
                <div id="adminTab" class="tabcontent hidden">
                    <h1>This is Admin Tab
                </div>
            </div>
            
        </div>
        </div>
    `; await loadDestinations();
}

const loadDestinations = async () => {
    const destinations = await fetchDestinations();
    const destinationCards = destinations.map(destination => DestinationAdminCard(destination)).join('');
    document.getElementById('destinations-cards').innerHTML = destinationCards;
};

renderAdminPage()

document.addEventListener('DOMContentLoaded', function () {

    fillContactForm();

    const destinationBtn = document.getElementById('destinationTabBtn');
    destinationBtn.addEventListener('click', () => {
        openTab(destinationBtn, "destinationTab")
    })
    const activityBtn = document.getElementById('activityTabBtn');
    activityBtn.addEventListener('click', () => {
        openTab(activityBtn, "activityTab")
    })
    const carouselBtn = document.getElementById('carouselTabBtn');
    carouselBtn.addEventListener('click', () => {
        openTab(carouselBtn, "carouselTab")
    })
    const adminBtn = document.getElementById('adminTabBtn');
    adminBtn.addEventListener('click', () => {
        openTab(adminBtn, "adminTab")
    })

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add('hidden');
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("bg-neutral-100", "bg-neutral-300")
        }
        document.getElementById(tabName).classList.remove('hidden');
        document.getElementById(tabName).classList.add('block');

        evt.classList.remove('bg-neutral-300');
        evt.classList.add('bg-neutral-100');
    }

    async function fillContactForm() {
        function getQueryParams() {
            const params = new URLSearchParams(window.location.search);
            return {
                id: params.get('id'),
                title: params.get('title'),
                image: params.get('image'),
                price: params.get('price'),
                location: params.get('location'),
                description: params.get('description'),
                activities: params.get('activities'),
                days: params.get('days'),
                titleForDeletion: params.get('titleForDeletion'),
                idForDeletion: params.get('idForDeletion')

            };
        }

        // Populate form fields with the retrieved query parameters
        function populateForm(params) {
            if (params.id) document.getElementById('id').value = params.id;
            if (params.title) document.getElementById('title').value = params.title;
            if (params.image) document.getElementById('image').value = params.image;
            if (params.price) document.getElementById('price').value = params.price;
            if (params.location) document.getElementById('location').value = params.location;
            if (params.description) document.getElementById('description').value = params.description;
            if (params.activities) document.getElementById('activities').value = params.activities;
            if (params.days) document.getElementById('days').value = params.days;
            if (params.titleForDeletion) document.getElementById('titleForDeletion').value = params.titleForDeletion;
            if (params.idForDeletion) document.getElementById('idForDeletion').value = params.idForDeletion;

        }

        // Get the query parameters and populate the form when the page loads
        const params = getQueryParams();
        populateForm(params);
    };


    document.getElementById('deleteDestination').addEventListener('submit', async function (event) {
        event.preventDefault();
        try {
        const destinationId = document.getElementById('idForDeletion').value;

        let response = await fetch(`/api/destinations/delete/${destinationId}`, {
            method: 'DELETE',
        });
        const data = await response;
            if (response.ok) {
                console.log('Destination Deleted successfully');
                window.location.href = '/api/auth/admin';
            } else {
                console.log(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            console.log('Something went wrong, please try again.');
        }
    })

    document.getElementById('addDestination').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get form data
        const destCard = {
            title: document.getElementById('title').value,
            image: document.getElementById('image').value,
            price: parseFloat(document.getElementById('price').value),
            location: document.getElementById('location').value,
            description: document.getElementById('description').value,
            activities: document.getElementById('activities').value.split(","),
            days: parseInt(document.getElementById('days').value)
        };
    
        // Send data to the backend API
        try {
            let response;
            const destinationId = document.getElementById('id').value;
    
            if (destinationId) {
                response = await fetch(`/api/destinations/edit/${destinationId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(destCard)
                });
            } else {
                response = await fetch('/api/destinations/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(destCard)
                });
            }
    
            const data = await response.json();
            if (response.ok) {
                console.log('Destination saved successfully');
                window.location.href = '/api/auth/admin';
            } else {
                console.log(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            console.log('Something went wrong, please try again.');
        }
    }
    )
})
