# Welcome to Soma

Soma is an AI-powered scholarship application assistant designed to help you find personalized scholarship matches, get essay and document assistance, and stay organized with deadline reminders.

## Features

- Personalized scholarship matches
- AI-powered essay and document help
- Deadline reminders
- Easy sign-up and sign-in with Google

## Screenshots

### Onboarding Screen

![Onboarding Screen](./assets/splash.png)

The onboarding screen welcomes users to Soma and provides an overview of the app's features.
### Signup With Google
![Signup With Google](./assets/welcome.png)

### Account Successfully Created

![Account Successfully Created](./assets/wel.png)

After signing up, users are informed that their account has been successfully created and are provided with a list of details they need to complete their profile.

### Personal Information

![Personal Information](./assets/form.png)

Users are prompted to enter their personal information to help tailor their scholarship search and assistance.



## Getting Started

To get started with the development version of Soma, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/soma.git
    cd soma
    ```

2. Install the necessary dependencies for both the frontend and backend:
    ```bash
    # For the frontend
    cd frontend
    npm install

    # For the backend
    cd ../backend
    npm install
    ```

3. Set up your environment variables:
    ```bash
    # Create a .env file in the backend directory and add your Google OAuth credentials
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    ```

4. Start the development servers:
    ```bash
    # Start the backend server
    cd backend
    npm run dev

    # Start the frontend server
    cd ../frontend
    npm start
    ```

## Technologies Used

- React
- Node.js
- Express
- MongoDB
- Passport.js for Google OAuth

## Contributing

We welcome contributions to Soma! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This project was created for a hackathon and is under active development. We appreciate your feedback and support!
