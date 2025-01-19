# UserManagement


Installation

To run this project locally:

1.	Clone the Repository:

        https://github.com/seriuksergii/User-management.git

2.	Navigate to the project directory:

         cd user-management

3.	Install dependencies:

          npm install

4.	Start the json-server:  

          json-server --watch public/users.json

5.	Start the application:
 
          npm start   



# Technologies Used:

• This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

• Angular Material

• Reactive Forms

# Task descriotion:

Develop a small CRUD application using the latest version of Angular. Below are the requirements and features to be implemented:

1. Page Features:
List of Users: The page must display a list of users with the following columns:
- First Name
- Last Name
- Email
- Created At: Display the date in MM-DD-YYYY HH:mm format
- Description
- Tags
- Actions: Edit and Delete options
Pagination: Display 10 users per page by default. Use Angular Material for pagination.

2. CRUD Operations:
- Create User:
On clicking the "Create User" button, a modal with a form should appear.
The form should include the following fields:
- First Name: Required, max length 100
- Last Name: Required, max length 100
- Email: Required, max length 100, email validation
- Description: Optional, max length 1000
- Tags: Optional, an array of strings (tags). Can be implemented using Angular Material chips, a multi-select input, or an input field where tags are separated by commas.
After adding a user, the new user object should be pushed to the users array.
- Edit User:
On clicking the "Edit" button in the Actions column, a modal with the same form should appear, pre-filled with the existing user data.
The existing user data should be updated upon form submission.
- Delete User:
On clicking the "Delete" button in the Actions column, show a confirmation modal.
If confirmed, the user should be removed from the array.

3. Form Validation:
If a field is invalid (e.g., exceeds the max length or fails validation), show an error message under the respective field using Angular Material's standard error message component.

5. Data Handling:
HttpClient: Use HttpClient to fetch data from a locally stored JSON file located in the public folder.
After editing a user, update the existing user in the array.

7. Additional Notes:
Please use Angular Material for all form elements, pagination, and dialog modals.
Implement proper date formatting for the Created At column and ensure proper validation is displayed for each field.

# P.S.
In this task, I did not have time to solve the following tasks:
- Problem with deployment in Vercel (the project is deployed, but does not receive data from users.json, although users.json is in the public folder.
- Problem with adding tags when creating and editing a user.




          



