# Easesmith Assignment - React Product Listing App

This is a React-based product listing application that allows users to view a list of products, add them to the cart, and navigate through product pages. The project includes routing using `react-router-dom`, icons using `react-icons`, and the app has been deployed on Netlify.

## Features

- **Product Listing**: Displays a list of products with the product name, price, image, and actions.
- **View Product**: Clicking on the "View Product" button redirects to a custom "Thank You" page.
- **Add to Cart Modal**: Opens a modal to confirm adding the product to the cart, with plus and minus options to adjust the quantity.
- **Pagination**: Functional pagination to navigate through the product listings.
- **Reusable Components**: The app is componentized for scalability and code reuse.
- **Responsive Design**: The application is responsive with custom media queries.
- **Routing**: React Router is used for smooth navigation between pages.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **React Router**: For handling routing between the product listing and the "Thank You" page.
- **React Icons**: For adding icons to buttons and other UI elements.
- **CSS3**: For styling the application and handling responsive design.
- **Netlify**: For deployment and hosting the application.
- **NPM**: For managing project dependencies.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following software installed on your machine:

- **Node.js** (version 16.20.2 or later)
- **NPM** (Node Package Manager)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/easesmith-assignment.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd easesmith-assignment
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### Routing

The app uses `react-router-dom` for navigation. The routes configured are:

- `/`: Product Listing Page
- `/thank-you`: Thank You Page

### Components

The app is divided into reusable components, including:

- **ProductCard**: Displays individual product details.
- **Header**: Navigation bar with a logo.
- **Pagination**: Handles pagination for the product list.
- **AddToCartModal**: Modal that opens when a product is added to the cart.

### CSS and Styling

The app uses modern CSS with media queries to ensure responsiveness across different screen sizes. Here's an example of the media queries for mobile:

```css
@media (max-width: 480px) {
  .n-text {
    font-size: 8px;
  }
  .contact-num {
    font-size: 8px;
  }
  .logo-text {
    display: none;
  }
}


Modal Feature
The "Add to Cart" button opens a modal where users can confirm adding the product to the cart. The modal allows users to increase or decrease the quantity of the product.

Plus/Minus Functionality: When the user clicks the plus or minus button, the product quantity is updated, and when the "Confirm" button is clicked, the product is added to the cart.
Responsive Design
The layout is responsive, with a media query for screen sizes below 480px to optimize the display on mobile devices.

Deployment
The application has been deployed on Netlify. You can deploy your app by following these steps:

Login to Netlify: Go to Netlify and sign in.
New Site from Git: Click on "New site from Git" and connect your GitHub repository.
Select Branch: Choose the branch you want to deploy (usually main).
Build Settings: Set the build command to npm run build and the publish directory to build/.
Deploy: Click on "Deploy site", and your app will be live on Netlify.
Live Demo
You can view the live demo of the project deployed on Netlify here.

Future Enhancements
Implementing backend API to manage real-time product data.
Adding user authentication and a shopping cart page to view added products.
Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.



### Notes:

- Replace `your-username` with your GitHub username in the clone command.
- Update the Netlify deployment link in the `README` with your live link once you deploy the project.

This `README.md` file covers all aspects of your project, including technologies, features, setup, and deployment, providing clarity to anyone using or contributing to your project.

2/2






