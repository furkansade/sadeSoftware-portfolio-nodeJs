
# Full Stack Portfolio Website

A ***portfolio / resume website*** that can be managed from an ***admin panel*** and contains all the features available on LinkedIn.

## Project Content
- ***About ->*** Dynamic
- ***Skills ->*** Dynamic
- ***Resume ->*** Dynamic
- ***Certificates (Achievement and Participation Certificate filter) ->*** Dynamic
- ***Projects ->*** Dynamic

## Project Technologies
- Backend: ***NodeJS, ExpressJS***
- Frontend: ***HTML, CSS, JS, Bootstrap***
- Database: ***MongoDB***
- Design: ***BootstrapMade***
- Text Editor: ***Summernote***

## Project Notes
- ***Authentication*** with bcrypt.
- The ***ExpressJS*** framework was used in the project.
- The project was built using the ***EJS*** library.
- ***MongoDB*** database was used in the project.

## Installation

- Node.js and npm must be installed for this application to run. Also, follow the steps below so that this application can be run locally:

**Clone this repo to your local machine:**
```sh
git clone https://github.com/furkansade/sadeSoftware-portfolio-nodeJs.git
```

**Database connection:** Create an .env file and add your MongoDB connection information. If you haven't created the MongoDB connection yet, follow the instructions from [MongoDB's official website](https://www.mongodb.com/docs/drivers/node/current/quick-start/).
```sh
DB_URI=<ADDED_MONGODB_URI>
```

**Navigate to the project directory:**
```sh
cd sadeSoftware-portfolio-nodeJs
```

**Install the necessary dependencies:**
```sh
npm install
```

**Run the application:**
```sh
npm start
```

## Login the Admin Panel

[Admin Panel](http://localhost:4000/admin/login)<br>

**.env file add the username, email, password:**
- Check the models/User.js.
- Password must have a minimum of 4 characters.
```sh
ADMIN_USERNAME=<USERNAME>
ADMIN_EMAIL=<EMAIL>
ADMIN_PASSWORD=<PASSWORD>
```

**Example User**
```sh
ADMIN_USERNAME="admin"
ADMIN_EMAIL="admin@sadesoftware.com"
ADMIN_PASSWORD="1234"
```

**You can view the application at http://localhost:4000.**
