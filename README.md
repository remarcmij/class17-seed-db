# Populate development database with fake data

This application populates the class17 database with random sample data.

To use:

1. In the root folder, copy `.env-sample` to `.env` and change the user, password and database values in `.env` to match the actual database.

2. Install the dependencies:

   ```
   npm install
   ```

3. Run the application:

   ```
   npm start
   ```

By default, 100 rows are added to the database. Change `INSERT_COUNT` in `/src/index.js` if a different number is desired.
