const DestinationAdminCard = (destination) => {
    return `
        <div class="card border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <img src="${destination.image}" alt="${destination.title}" class="w-full h-48 object-cover">
          <div class="relative min-h-[300px]">
            <h3 class="px-4 pt-4 text-xl font-semibold mb-2">${destination.title}</h3>
            <div class="px-4 mb-2 flex gap-2 text-[#ed7440]"><img class="w-4" src="/assets/SVG/location-pin.svg"/><p>${destination.location}</p></div>
            <p class="px-4 text-gray-600 text-sm line-clamp-2">${destination.description}</p>
            <p class="px-4 text-xm text-gray-400 font-bold"># ${destination.days} Days</p>
            <div><hr class="px-4 my-4 border-gray-200"></div>
            <div class="px-4 flex flex-wrap gap-1 mt-4">${destination.activities.map(item => `<div class="bg-[#050811] py-1 px-2 rounded-md text-sm w-max text-white"> ${item}</div>`).join("")}</div>
            <div class="px-4 justify-between items-center flex bottom-2 absolute w-full">
            <p class="text-gray-900 text-2xl font-bold">₹${destination.price}</p>
            <div class="flex items-center gap-1">
            <a href="/api/auth/admin?title=${encodeURIComponent(destination.title)}&id=${encodeURIComponent(destination._id)}&image=${encodeURIComponent(destination.image)}&price=${encodeURIComponent(destination.price)}&location=${encodeURIComponent(destination.location)}&days=${encodeURIComponent(destination.days)}&description=${encodeURIComponent(destination.description)}&activities=${encodeURIComponent(destination.activities.join(', '))}" class="text-white text-right bg-[#ed7440] p-1 px-2 rounded-lg hover:underline">Select</a>
            <a href="/api/auth/admin?titleForDeletion=${encodeURIComponent(destination.title)}&idForDeletion=${encodeURIComponent(destination._id)}"  class="text-white text-right bg-black p-1 px-2 rounded-lg hover:underline" >Delete</a>
            </div>
            </div>
            </div>
            <div class="p-4 text-center">ID: ${destination._id}</div>
        </div>
    `;
};


export default DestinationAdminCard;