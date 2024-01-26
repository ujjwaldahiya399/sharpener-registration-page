let url = "https://crudcrud.com/api/f6a588206188451b816418abba38fc05"
document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    let editingUserId = null; // Variable to store the user ID being edited

    // Function to fetch and display users
    const displayUsers = async () => {
        try {
            const response = await axios.get('https://crudcrud.com/api/f6a588206188451b816418abba38fc05/users');
            const users = response.data;

            userList.innerHTML = '';
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `Name: ${user.name}, Email: ${user.email}`;

                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.onclick = () => editUser(user._id);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteUser(user._id);

                li.appendChild(editButton);
                li.appendChild(deleteButton);
                userList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Function to add a new user or update an existing user
    const saveUser = async (name, email) => {
        try {
            let response;
            if (editingUserId) {
                // Update existing user
                response = await axios.put(`${url}/users/${editingUserId}`, {
                    name: name,
                    email: email
                });
            } else {
                // Add new user
                response = await axios.post('https://crudcrud.com/api/f6a588206188451b816418abba38fc05/users', {
                    name: name,
                    email: email
                });
            }

            console.log('User saved successfully:', response.data);
            editingUserId = null; // Clear editingUserId after saving
            displayUsers(); // Refresh the user list
            userForm.reset(); // Clear the form
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    // Function to edit a user
    const editUser = async (userId) => {
        console.log(userId);
        try {
            const response = await axios.get(`${url}/users/${userId}`);
            const user = response.data;

            // Populate the form with user details for editing
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;

            editingUserId = userId; // Set editingUserId to track the user being edited
        } catch (error) {
            console.error('Error fetching user for editing:', error);
        }
    };

    // Function to delete a user
    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`https://crudcrud.com/api/f6a588206188451b816418abba38fc05/users/${userId}`);

            console.log('User deleted successfully:', response.data);
            displayUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Event listener for form submission
    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        saveUser(name, email);
    });

    // Initial display of users on page load
    displayUsers();
});
