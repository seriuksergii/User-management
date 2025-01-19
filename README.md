# UserManagement


Installation

To run this project locally:

1.	Clone the Repository:

          [https://github.com/seriuksergii/User-management](https://github.com/seriuksergii/User-management.git)

2.	Navigate to the project directory:

         cd user-management

3.	Install dependencies:

          npm install

4.	Start the json-server:  

          json-server --watch public/users.json

5.	Start the application:
 
          npm start   



#Technologies Used:

• This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

• Angular Material

• Reactive Forms

#Tasks Description
Develop a small CRUD application on the latest version of Angular.
Create a page that must contain a list, pagination, and a "Create User" button. Get data
from an attached JSON file and display it on this page. Please use the HttpClient to get the
data. The JSON file must be located in a public folder.
The list must contain the following columns:
• First name
•Last name
● Email
● Created at - format date to MM-DD-YYYY HH:mm
● Description
● Tags
● Actions - Edit (shows the same modal window as "Create User" but with pre-filled
data), Delete
On clicking "Create User" and "Edit" buttons, show a modal with a form. Please use
Angular Reactive Forms. The form must contain the following fields:
● First name - required, max length 100
● Last name - required, max length 100
● Email - required, max length 100, email validation
● Description - not required, max length 1000
● Tags - not required, array of strings.
You can use Angular Material chips or an input field where tags are separated by
commas, or a multi-select. After adding a user, please push the new object to the array of
users. After editing, please update the existing user.
If a field is not valid, please show an error message under the field (standard Material
error message).
On clicking "Delete" in the actions column, show a confirmation modal and delete the
user from the array if confirmed.
Pagination - show 10 items on the page by default.
Please use Angular Material for pagination and form elements.




          



