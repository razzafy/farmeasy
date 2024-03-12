const inputData = {
    N: 22,
    P: 138,
    K: 195,
    temperature: 27.8,
    humidity: 83.5,
    ph: 6.2,
    rainfall: 73
};

// Options for the fetch request
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
};

// Send POST request to Flask app endpoint
fetch('http://localhost:5000/predict', options)
    .then(response => response.json()) // Parse response JSON
    .then(data => {
        // Handle response data
        console.log('Predicted Crop:', data.predicted_crop);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
