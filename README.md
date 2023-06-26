# Restful_Node

All the post request in this assignment has been done using PostMan. 

Endpoints:

a. GET /students
Fetch all the students from the database.
Return a JSON response with an array of all the students.

b. GET /students/:id
Fetch a specific student by their ID from the database.
Return a JSON response with the student's details.

c. POST /students
Create a new student in the database.
Accept JSON data in the request body with the student's details.
Validate the data and insert the student into the "students" collection.
Return a JSON response with the newly created student's details.

d. PUT /students/:id
Update an existing student in the database.
Accept JSON data in the request body with the updated student's details.
Find the student by their ID and update their information in the "students" collection.
Return a JSON response with the updated student's details.
