document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  // Get form data
  const contact = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      packageDetails: {
          title: document.getElementById('title').value,
          price: parseFloat(document.getElementById('price').value),
          location: document.getElementById('location').value,
        //   description: document.getElementById('description').value,
        //   activities: document.getElementById('activities').value.split(","),
          days: parseInt(document.getElementById('days').value)
      }
  };

  // Send data to the backend API
  try {
      const response = await fetch('http://localhost:5000/api/contacts/create', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(contact)
      });

      const data = await response.json();
      if (response.ok) {
          alert('Contact created successfully');
      } else {
          alert(`Error: ${data.error}`);
      }
  } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong, please try again.');
  }
});
