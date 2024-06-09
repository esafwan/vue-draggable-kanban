# Kanban Board Application

This is a simple Kanban board UI built using Vue 3, Vuex, and Vite. It features a draggable interface for managing tasks across multiple columns, styled with Bootstrap 5 and custom CSS to resemble material design with sticky-note styled cards. This is just for reference and doesn't implement any APIs or handle any advance use cases.

<img width="1357" alt="kanban-vue3" src="https://github.com/esafwan/vue-draggable-kanban/assets/246454/1a95323e-039c-4b68-900f-b25c2f011dfc">


## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 12.x or later)
- npm (usually comes with Node.js)

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone git@github.com:esafwan/vue-draggable-kanban.git
   cd vue-draggable-kanban
   ```


2. **Install Dependencies**

   From within the project directory, run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Include Bootstrap**

   Make sure that Bootstrap 5 CSS is included. You can add it in your `index.html` or install it via npm:

   ```bash
   npm install bootstrap@5
   ```

   And import it in your `main.js`:

   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

4. **Start the Development Server**

   To run the application on your local development server, use:

   ```bash
   npm run dev
   ```

   This will compile the project and make it available at `http://localhost:3000` (default port).

5. **Open the Application**

   Open your browser and navigate to `http://localhost:3000` to view the application.



## License

This project is licensed under the MIT License.
```
