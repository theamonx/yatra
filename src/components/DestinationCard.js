const DestinationCard = (destination) => {
    return `
        <div class="card border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <img src="${destination.image}" alt="${destination.title}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">${destination.title}</h3>
            <div class="mb-2 flex gap-1 text-[#ed7440]"><img class="w-4" src="../assets/SVG/location-pin.svg"/><p>${destination.location}</p></div>
            <p class="text-gray-600">${destination.description}</p>
            <p class="text-xm text-gray-400 font-bold"># ${destination.days} Days</p>
            <div><hr class="my-4 border-gray-200"></div>
            <div class="flex flex-wrap gap-1 mt-8">${destination.activities.map(item => `<div class="bg-[#050811] py-1 px-2 rounded-md text-sm w-max text-white"> ${item}</div>`).join("")}</div>
            <div class="w-full justify-between items-end flex mt-9">
            <p class="text-gray-900 text-2xl font-bold">$${destination.price}</p>
            <a href="contactUs.html?title=${encodeURIComponent(destination.title)}&price=${encodeURIComponent(destination.price)}&location=${encodeURIComponent(destination.location)}&days=${encodeURIComponent(destination.days)}" class="text-white text-right bg-[#ed7440] p-2 rounded-lg hover:underline">Register Now</a>
            </div>
          </div>
        </div>
    `;
};
// &description=${encodeURIComponent(destination.description)}&activities=${encodeURIComponent(destination.activities.join(', '))}

export default DestinationCard;