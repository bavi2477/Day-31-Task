# Library Management System

This is a simple Library Management System built using React.js. It allows users to manage books and authors, including adding, editing, and deleting book and author records. The application uses React Router for navigation and Axios for making HTTP requests to a mock API.

## Features

- Dashboard: View a list of books and authors.
- Add Book: Add a new book record to the library.
- Edit Book: Edit an existing book record.
- Add Author: Add a new author record to the library.
- Edit Author: Edit an existing author record.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd library-management-system
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Dashboard**: Upon launching the application, you will be directed to the Dashboard tab. Here, you can view a list of books and authors. You can also edit or delete existing book and author records.

- **Add Book**: Click on the "Add" dropdown in the sidebar and select "Book" to navigate to the Add Book tab. Here, you can add a new book record by filling out the required fields in the form.

- **Edit Book**: To edit an existing book record, click on the "Edit" button next to the book you wish to edit on the Dashboard tab. This will navigate you to the Edit Book tab, where you can update the book details.

- **Add Author**: Click on the "Add" dropdown in the sidebar and select "Author" to navigate to the Add Author tab. Here, you can add a new author record by filling out the required fields in the form.

- **Edit Author**: To edit an existing author record, click on the "Edit" button next to the author you wish to edit on the Dashboard tab. This will navigate you to the Edit Author tab, where you can update the author details.

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-router-dom`: DOM bindings for React Router.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `formik`: Form library for React to handle form validation and state management.
- `yup`: JavaScript schema builder for value parsing and validation.

## API Mock

The application uses mock APIs to simulate server interactions for managing books and authors:

- Books API: `https://65dc3c30e7edadead7eb5f40.mockapi.io/books`
- Authors API: `https://65dc693ee7edadead7ebef8b.mockapi.io/authors`

## License

This project is licensed under the [MIT License](LICENSE).
