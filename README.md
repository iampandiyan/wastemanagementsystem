# wastemanagementsystem
My first github upload
This Application will store the data to mongoose database and retrieve back all the data from the same and display in the HTML table.
Back end code written in Nodejs.
Event handling are done using jQuery.
Data base is Mongoose.
It stores the data in cloud mlab.com. If we have internet connection, We can run the code without any dependency in your local.

File List:
1. views/home.ejs -> Home html file.
2. public/assets/styles.css -> Style details for the html elements.
3. public/wmsEventHandler.js -> Event handling function using jquery.
4. controllers/wmsController.js -> Handles the GET & POST method. Save data to Database and get back data from Database.

HTML Menu
1. HOME -> will display the Home Page.
2. Add Complaint -> will give option to add data to database.
3. View Complaints -> will extract the data from DB and display in HTML table
4. About US -> will display the About US Page.

How to Run?
Download all files
Goto node terminal -> Run nodemon app
Goto Browser -> Hit the URL http://localhost:3000/

