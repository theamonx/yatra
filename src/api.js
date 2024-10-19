export const fetchDestinations = async () => {
    const response = await fetch('http://localhost:5000/api/destinations');
    return response.json();
};

export const fetchActivities = async () => {
    const response = await fetch('http://localhost:5000/api/activities');
    return response.json();
};

