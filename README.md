# Synoptic App

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Third-Party Libraries](#third-party-libraries)
- [Screenshots](#screenshots)
- [Components and Features](#components-and-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Run the Application](#run-the-application)

## About

This Synoptic Test Task is a mobile application developed using React Native, designed for both iOS and Android platforms. The app's primary goal is to showcase various features and best practices when working with React Native and related technologies.The app allows users to check forecast in their city\region for today/next 3 days/next week/next 2 weeks. It includes features like fetching weather data, dark/light theme toggling, and a custom dropdown component.

This README provides an overview of the project, its features, and instructions for running the application.

## Tech Stack

- **React Native CLI:**

- **Redux Toolkit (RTK):**

- **TypeScript:**

## Third-Party Libraries

Here's the list of third-party libraries used in the Synoptic App:

- **axios**
- **@react-navigation/native**
- **react-native-element-dropdown**
- **react-native-geolocation-service**
- **react-native-heroicons**
- **react-native-permissions**
- **react-native-progress**
- **react-native-safe-area-context**
- **react-native-screens**
- **react-native-svg**
- **react-native-svg-transformer**


## ScreenShots

<h3>The working app on both platforms(IOS & Android)</h3>
<img alt="App ScreenShots" src="https://i.imgur.com/wNUMo7g.png">

## Components and Features

### HomeScreen

- The main screen of the app displaying weather information.
- Utilizes geolocation to fetch weather data for the user's location.
- Displays the current weather, a dropdown to select the number of days for the forecast, and a switch to toggle the dark/light theme.
- Provides loading indicators and error handling for better user experience.
- Presents weather data in a user-friendly and aesthetically pleasing manner.

### Additional Features

- The app performs API requests through `createAsyncThunk`.
- Depending on weather condition the main image changes.
- The user interface (UI/UX) is designed to provide a user-friendly experience.
- The beautiful architecture decomposition simplifies complex systems into clear and elegant structures.

## Project Structure

The project follows a structured organization:

<img alt="Project Structure" src="https://i.imgur.com/j5TZ03b_d.webp?maxwidth=760&fidelity=grand">


## Getting Started

Getting Started
Clone the Repository:

git clone https://github.com/KhromenkoDaniel/synoptic_test_task.git

Install Dependencies:

cd synoptic_test_task && npm install

## Run the Application:

For iOS:

npx react-native run-ios

For Android:

npx react-native run-android
