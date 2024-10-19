const ActivityCard = (activity) => {
    return `
        <div class="activity-card border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <img src="${activity.image}" alt="${activity.name}" class="w-full h-48 object-cover">
          <div class="p-4 flex items-center justify-between">
            <h3 class="text-xl font-semibold">${activity.name}</h3>
            <a href="Destinations.html?activity=${activity.name}"  class="text-sm text-white  text-right bg-[#ed7440] p-2 rounded-lg hover:bg-[#050811]">View Destinations</a>
          </div>
        </div>
    `;
};

export default ActivityCard;