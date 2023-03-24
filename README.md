# Cyborgs Api

Cyborg API is a web service that provides developers with programmatic access to a comprehensive database of cyborgs, including their physical attributes, capabilities, and specifications. This API was developed as part of a project for `Platzi`, a leading online education platform.

Using the Cyborg API, developers can retrieve information about individual cyborgs, search for cyborgs based on specific criteria, and even create new cyborg profiles.

![Texto alternativo](assets/banner.png)

## Database

The Cyborg API requires the use of a database to store and manage cyborg data. I have chosen MySQL for this project and included an SQL file to create the necessary "cyborgs" table. Developers will need to configure the database connection settings in the `db.js` file to use the API with their own `MySQL` database.

## Local Run

To run the Cyborg API, developers will need to install the necessary dependencies using `Node.js` package manager `npm`. The required dependencies are listed in the `package.json` file included in the project repository.

To install the dependencies, developers should navigate to the project directory in their command line interface and run the following command:

~~~
npm install
~~~

Once the dependencies are installed, developers can start the server by running the following command:

~~~
npm run dev
~~~

This will start the server and make the API endpoints available for use. Developers can then test the API using a tool such as Postman or by sending HTTP requests directly to the API endpoints.