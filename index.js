// // 
// // Function to fetch user data using Axios
// function fetchUserDetails() {
//     return axios.get(' https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts') // Replace '/api/users' with your backend API endpoint to fetch user details
//       .then(response => response.data)
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//         return [];
//       });
//   }
  
//   // Function to add a new user using Axios
//   function addUser(name) {
//     return axios.post('https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts', { name }) // Replace '/api/users' with your backend API endpoint to add a new user
//       .then(response => response.data)
//       .catch(error => {
//         console.error('Error adding user:', error);
//         return null;
//       });
//   }
  
//   // Function to delete a user by backend ID using Axios
//   function deleteUser(backendUserId) {
//     console.log(backendUserId); 
//     return axios.delete(`https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts/${backendUserId}`) // Replace '/api/users' with your backend API endpoint to delete a user by backend ID
//       .then(response => response.data)
//       .catch(error => {
//         console.error('Error deleting user:', error);
//         return null;
//       });
//   }
  
//   // Function to remove user from the UI
//   function removeFromUI(frontendUserId) {
//     const userElement = document.querySelector(`[data-frontend-id="${frontendUserId}"]`);
//     if (userElement) {
//       userElement.remove(); // Remove the user element from the DOM
//     }
//   }
  
//   // Function to populate the DOM with user details
//   function populateUserList(users) {
//     const userList = document.getElementById('userList');
//     userList.innerHTML = ''; // Clear any existing user details
  
//     users.forEach(user => {
//       const li = document.createElement('li');
//       const frontendUserId = user._id; // Assuming frontend ID is the same as the '_id' from the backend
  
//       // Set a 'data' attribute to store the frontend ID in the HTML element
//       li.setAttribute('data-frontend-id', frontendUserId);
  
//       li.textContent = user.name; // Assuming your user object contains a 'name' property
  
//       // Add a delete button to each user detail
//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = 'Delete';
//       deleteButton.addEventListener('click', () => onDeleteClick(frontendUserId)); // Pass frontendUserId as the userId parameter
  
//       li.appendChild(deleteButton);
//       userList.appendChild(li);
//     });
//   }
  
//   // Function to handle form submission
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     // const form = event.target;
//     // const nameInput = form.querySelector('#name');
  
//     // Get the user input from the form
//     const name = document.getElementById("name").value;
  
//     if (name) {
//       // Save the user using the addUser function
//       addUser(name)
//         .then(response => {
//           if (response) {
//             // Fetch all users again after successful addition
//             fetchUserDetails()
//               .then(users => {
//                 // Update the UI with the latest user details
//                 populateUserList(users);
//                 // Clear the form input field after successful submission
//                 nameInput.value = '';
//               })
//               .catch(error => {
//                 console.error('Error:', error);
//               });
//           }
//         })
//         .catch(error => {
//           console.error('Error adding user:', error);
//         });
//     }
//   }
  
//   // Function to handle delete button click event
//   function onDeleteClick(frontendUserId) {
//     // Get the backend ID from the frontend ID (You may need to implement your mapping logic)
//     const backendUserId = frontendUserId;
  
//     // Perform the DELETE request and update the UI on successful deletion
//     deleteUser(backendUserId)
//       .then(response => {
//         if (response) {
//           removeFromUI(frontendUserId);
//         }
//       })
//       .catch(error => {
//         console.error('Error deleting user:', error);
//       });
//   }
  
//   // Main function to fetch data and populate the DOM
//   function main() {
//     fetchUserDetails()
//       .then(users => {
//         populateUserList(users);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
  
//     // Attach the form submit event listener
//     const userForm = document.getElementById('userForm');
//     userForm.addEventListener('submit', handleFormSubmit);
//   }
  
//   // Call the main function when the DOM is ready
//   document.addEventListener('DOMContentLoaded', main);
  

// Function to fetch user data using Axios
function fetchUserDetails() {
    return axios.get(' https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts') // Replace '/api/users' with your backend API endpoint to fetch user details
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching user details:', error);
        return [];
      });
  }
  
  // Function to add a new user using Axios
  function addUser(name) {
    return axios.post(' https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts', { name }) // Replace '/api/users' with your backend API endpoint to add a new user
      .then(response => response.data)
      .catch(error => {
        console.error('Error adding user:', error);
        return null;
      });
  }
  
  // Function to edit a user by backend ID using Axios
  function editUser(backendUserId, newName) {
    return axios.put(` https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts/${backendUserId}`, { name: newName }) // Replace '/api/users' with your backend API endpoint to edit a user by backend ID
      .then(response => response.data)
      .catch(error => {
        console.error('Error editing user:', error);
        return null;
      });
  }
  
  // Function to delete a user by backend ID using Axios
  function deleteUser(backendUserId) {
    return axios.delete(` https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts/${backendUserId}`) // Replace '/api/users' with your backend API endpoint to delete a user by backend ID
      .then(response => response.data)
      .catch(error => {
        console.error('Error deleting user:', error);
        return null;
      });
  }
  
  // Function to remove user from the UI
  function removeFromUI(frontendUserId) {
    const userElement = document.querySelector(`[data-frontend-id="${frontendUserId}"]`);
    if (userElement) {
      userElement.remove(); // Remove the user element from the DOM
    }
  }
  
  // Function to populate the input field with user details for editing
  function populateEditForm(user) {
    const nameInput = document.getElementById('name');
    nameInput.value = user.name; // Assuming your user object contains a 'name' property
  }
  
  // Function to populate the DOM with user details
  function populateUserList(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear any existing user details
  
    users.forEach(user => {
      const li = document.createElement('li');
      const frontendUserId = user._id; // Assuming frontend ID is the same as the '_id' from the backend
  
      // Set a 'data' attribute to store the frontend ID in the HTML element
      li.setAttribute('data-frontend-id', frontendUserId);
  
      li.textContent = user.name; // Assuming your user object contains a 'name' property
  
      // Add an Edit button to each user detail
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => onEditClick(frontendUserId)); // Pass frontendUserId as the userId parameter
  
      // Add a Delete button to each user detail
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => onDeleteClick(frontendUserId)); // Pass frontendUserId as the userId parameter
  
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      userList.appendChild(li);
    });
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    // const form = event.target;
    // const nameInput = form.querySelector('#name');
  
    // Get the user input from the form
    const name = document.getElementById("name").value.trim();
  
    if (name) {
      // Save the user using the addUser function
      addUser(name)
        .then(response => {
          if (response) {
            // Fetch all users again after successful addition
            fetchUserDetails()
              .then(users => {
                // Update the UI with the latest user details
                populateUserList(users);
                // Clear the form input field after successful submission
                nameInput.value = '';
              })
              .catch(error => {
                console.error('Error:', error);
              });
          }
        })
        .catch(error => {
          console.error('Error adding user:', error);
        });
    }
  }
  
  // Function to handle Edit button click event
  function onEditClick(frontendUserId) {
    // Get the backend ID from the frontend ID (You may need to implement your mapping logic)
    const backendUserId = frontendUserId;
  
    // Fetch user details from the backend using the backend ID
    axios.get(` https://crudcrud.com/api/e00755a28ff54a07aae0f7c4aa7d771d/posts/${backendUserId}`)
      .then(response => {
        const user = response.data;
        if (user) {
          populateEditForm(user);
        }
      })
      .catch(error => {
        console.error('Error fetching user details for editing:', error);
      });
  }
  
  // Function to handle delete button click event
  function onDeleteClick(frontendUserId) {
    // Get the backend ID from the frontend ID (You may need to implement your mapping logic)
    const backendUserId = frontendUserId;
  
    // Perform the DELETE request and update the UI on successful deletion
    deleteUser(backendUserId)
      .then(response => {
        if (response) {
          removeFromUI(frontendUserId);
        }
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }
  
  // Main function to fetch data and populate the DOM
  function main() {
    fetchUserDetails()
      .then(users => {
        populateUserList(users);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    // Attach the form submit event listener
    const userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Call the main function when the DOM is ready
  document.addEventListener('DOMContentLoaded', main);
  