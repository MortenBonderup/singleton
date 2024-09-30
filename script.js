// Singleton object literal
let userProfile = {
    userrole: "admin",
    username: "Jane Doe",
    yearsOfEmployment: 13,
    children: ["Anna", "George"]
};

// Function to display user profile
function displayUserProfile() {
    document.getElementById('username').textContent = `Username: ${userProfile.username}`;
    document.getElementById('userrole').textContent = `User Role: ${userProfile.userrole}`;
    document.getElementById('yearsOfEmployment').textContent = `Years of Employment: ${userProfile.yearsOfEmployment}`;
    document.getElementById('children').textContent = "Children: ";
    userProfile.children.forEach(child => {
        document.getElementById('children').insertAdjacentText("beforeend", child + ";");
    })
}

// Function to update user role
function updateUserRole() {
    userProfile.userrole = "superadmin";
    displayUserProfile();
}

// Function to increment years of employment
function incrementYearsOfEmployment() {
    userProfile.yearsOfEmployment = userProfile.yearsOfEmployment + 1;
    displayUserProfile();
}

// Initial display of user profile
displayUserProfile();
