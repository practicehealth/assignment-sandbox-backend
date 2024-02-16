# Sandbox Backend for Assignment

## Description

This is a sandbox backend for the assignment. It is a simple REST API that allows you to do a simple login and fetch data for your flutter/react application

## Installation

# Sandbox Backend for Assignment

## Description

This is a sandbox backend for the assignment. It is a simple REST API that allows you to do a simple login and fetch data for your flutter/react application

## Prerequisites

Before getting started, make sure you have Node 18+ installed. You can download it from the official Node.js site [here](https://nodejs.org).

## Installation

To get started, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/practicehealth/assignment-sandbox-backend.git
```
2. Install the dependencies:
```bash
npm install
```
3. Start the server:
```bash
npm start
```

## Usage

The server will be running on `http://localhost:3000`. You can use the following endpoints:


### Login
- Method: POST
- Path: `/auth/login`
- Description: This route is used to login the user and generate access token and refresh token
- Body:
  - email: string ("abdul@gmail.com" or "randal@gmail.com")

### Token
- Method: GET
- Path: `/auth/token`
- Description: This route is used to generate new access token using refresh token

### Logout
- Method: POST
- Path: `/auth/logout`
- Description: This route is used to logout the user and clear the refresh token

### Visits
- Method: GET
- Path: `/visits`
- Description: This route is used to get all the visits for creating the timeline component
- Headers:
  - Authorization: Bearer <accessToken>

### Complete task
- Method: POST
- Path: `/visits/task/complete`
- Description: This route is used to complete the task in the timeline component
- Headers:
  - Authorization: Bearer <accessToken>
- Body:
  - taskId: string
  - visitId: string
  - note: string (optional)

### Categories - Medication
- Method: GET
- Path: `/categories/medication`
- Description: This route is used to get all the categories of type medication
- Headers:
  - Authorization: Bearer <accessToken>

### Categories - Labs
- Method: GET
- Path: `/categories/labs`
- Description: This route is used to get all the categories of type labs
- Headers:
  - Authorization: Bearer <accessToken>

### Categories - Vitals
- Method: GET
- Path: `/categories/vitals`
- Description: This route is used to get all the categories of type vitals
- Headers:
  - Authorization: Bearer <accessToken>

### Categories - Immunization
- Method: GET
- Path: `/categories/immunization`
- Description: This route is used to get all the categories of type immunization
- Headers:
  - Authorization: Bearer <accessToken>

### Categories - Condition
- Method: GET
- Path: `/categories/condition`
- Description: This route is used to get all the categories of type condition
- Headers:
  - Authorization: Bearer <accessToken>

### Categories - Procedure
- Method: GET
- Path: `/categories/procedure`
- Description: This route is used to get all the categories of type procedure
- Headers:
  - Authorization: Bearer <accessToken>

### Categories - Allergy
- Method: GET
- Path: `/categories/allergy`
- Description: This route is used to get all the categories of type allergy
- Headers:
  - Authorization: Bearer <accessToken>

### Categories Info
- Method: GET
- Path: `/categories/info`
- Description: This route is used to get the information about the categories (please note this route is not a different category just a route to test how the response can come in the form of streams as well)
- Headers:
  - Authorization: Bearer <accessToken>

### Resources
- Method: GET
- Path: `/resources`
- Description: This route is used to get all the documents linked in the visit objects
- Headers:
  - Authorization: Bearer <accessToken>
