# MERN Authentication System with JWT and bcrypt

This is a **MERN** (MongoDB, Express, React, Node) stack authentication system that includes user registration, login, and JWT-based authentication. Passwords are securely encrypted using **bcrypt**.

## Features

- **User Registration**: Users can register by providing an name, email and password.
- **Password Encryption**: Passwords are hashed using **bcrypt** before being stored in the database.
- **User Login**: Login with email and password, generating a **JWT** for further authenticated requests.
- **Protected Routes**: Use **JWT** to protect routes that require authentication.
- **Responsive Frontend**: Built using **React**.

## Tech Stack

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Password Encryption**: bcrypt

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
