// Function to fetch properties from the API
export const fetchProperties = async () => {
    try {
        const response = await fetch('https://propelio-xedy.onrender.com/propertytech/api/properties');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching properties:', error);
        throw error; // Rethrow the error for handling in the calling function
    }
};

// New function to submit contact form data
export const submitContactForm = async (contactData) => {
    try {
        const response = await fetch('https://propelio-xedy.onrender.com/propertytech/api/contact', { // Update the URL as needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error; // Rethrow the error for handling in the calling function
    }
};

