# Blog
A blog built with Node, Express and MongoDB and following the Model–view–controller (MVC) software design pattern.
## Prerequisites
- Node.js and npm are to be installed.
- two options here : either to install MongoDB on your computer locally or use the cloud DB which is already hosted for us and i prefer the latter.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jisboui/Blog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Blog
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up mongoDB :

   - Create a new database in MongoDB.
   - Update the MongoDB connection details (username, password and database) in `app.js` file:

     ```javascript
      const dbURI = "mongodb+srv://<insert your username>:<insert your password>@cluster0.z8rlwfm.mongodb.net/<insert the database name>?retryWrites=true&w=majority";
     ```

5. Start the server:

   ```bash
   nodemon app
   ```

   The server will run on `http://localhost:3000`.
