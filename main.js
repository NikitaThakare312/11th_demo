// Function to initialize the UI with stored user details
function initUI() {
    var existingDetails = localStorage.getItem('userDetails');
    var userDetailsArray = existingDetails ? JSON.parse(existingDetails) : [];

    // Display user details in the UI
    var userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear previous entries

    userDetailsArray.forEach(function(userDetails, index) {
        var listItem = document.createElement('li');
        listItem.textContent = userDetails.firstName + ' ' + userDetails.lastName;

        // Create a delete button for each user
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteUser(index);
        };

        listItem.appendChild(deleteButton);
        userList.appendChild(listItem);
    });
}

// Function to delete a user by index
function deleteUser(index) {
    var existingDetails = localStorage.getItem('userDetails');
    var userDetailsArray = existingDetails ? JSON.parse(existingDetails) : [];

    // Remove the user at the specified index
    userDetailsArray.splice(index, 1);

    // Update local storage with the modified array
    localStorage.setItem('userDetails', JSON.stringify(userDetailsArray));

    // Reinitialize the UI
    initUI();
}

// Function to handle form submission
function submitForm() {
    // Get user input
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    // Create an object to store user details
    var userDetails = {
        firstName: firstName,
        lastName: lastName
    };

    // Retrieve existing user details from local storage (if any)
    var existingDetails = localStorage.getItem('userDetails');
    var userDetailsArray = existingDetails ? JSON.parse(existingDetails) : [];

    // Add the new user details to the array
    userDetailsArray.push(userDetails);

    // Convert the array to a JSON string
    var userDetailsString = JSON.stringify(userDetailsArray);

    // Store the JSON string in local storage
    localStorage.setItem('userDetails', userDetailsString);

    // Reinitialize the UI
    initUI();
}
