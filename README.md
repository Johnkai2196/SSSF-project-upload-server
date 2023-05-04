# SSSF-project-upload-server

SSSF-project-upload-server is a backend server for uploading and storing files.

## Routes

### POST /uploadimage

The `/uploadimage` route accepts file uploads via multipart/form-data. Upon successful upload, the server returns a JSON object with a filename to access the uploaded file.

### GET /uploads/:filename

The `/uploads/:filename` route allows retrieval of uploaded files. The `:filename` parameter should be the name of the file to retrieve.

### Getting Started

To get started with SSSF-project-users-server, follow these steps:

1. Clone this repo by running git clone `https://github.com/Johnkai2196/SSSF-project-upload-server.git` in your terminal or Git client.
2. Create a `.env` file based on the `.env.example` file in the root directory of the project. This file contains environment variables needed to run the application.
3. Install dependencies by running `npm i` in your terminal or command prompt.
4. Start the server by running `npm run dev` in your terminal or command prompt.
5. Navigate to `http://localhost:[PORT]` in your web browser, where `[PORT]` is the port number specified in the `.env` file or the `PORT` environment variable.
6. Use the `/uploadimage` route to upload files to the server, and the `/uploads/:filename` route to retrieve uploaded files.
