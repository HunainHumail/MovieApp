# React Native Movie App

This is a React Native application that allows users to search for movies, view movie details, and manage their favorite movies. The application uses Redux for state management and Redux Saga for handling asynchronous operations.

## Table of Contents

- [React Native Movie App](#react-native-movie-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [How It Works](#how-it-works)
  - [Testing](#testing)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
```
2. **Install dependencies:**

Run the following command to install the project dependencies:

```bash
   yarn
```

3. **Setup IOS dependencies:**

Navigate to the ios directory and install the CocoaPods dependencies:

```bash
   cd ios
   pod install
   cd ..
```

## Running the App

You can run the application on both iOS and Android platforms.

- **For iOS:**
```bash
   npx react-native run-ios
```

- **For Android:**
```bash
   npx react-native run-android
```

## Features

- **Redux Architecture:** Manages state using Redux, with container-component and presentational component patterns.
- **Redux Saga:** Handles asynchronous API calls.
- **Axios:** Utilized for network requests.
- **Search Functionality:** Debounced search with a 300ms delay and pagination support.
- **Favorites Management:** Users can add or remove movies from favorites.
- **Navigation:** A floating button navigates to the Favorites screen when a movie is added to favorites.

## Project Structure

The project follows a structured approach to organize components, containers, features, and utilities:

```plaintext
   src
   ├── Components
   │   ├── Movie Item
   │   │   ├── index.tsx
   │   │   └── styles.ts
   │   ├── Movie List
   │   │   └── index.tsx
   │   ├── Search Input
   │   │   └── index.tsx
   │   ├── Spinner
   │   │   └── index.tsx
   │   └── index.ts
   ├── Containers
   │   ├── FavoriteScreen
   │   │   └── index.tsx
   │   ├── HomeScreen
   │   │   └── index.tsx
   │   └── index.ts
   ├── features
   │   ├── favorites
   │   │   └── favoriteSlice.ts
   │   └── movies
   │       └── movieSlice.ts
   ├── navigation
   │   └── index.tsx
   ├── store
   │   ├── index.ts
   │   └── saga.ts
   ├── types
   ├── utils
   └── App.tsx
```


## How It Works

- **Search Functionality:** Users can search for movies. A debounce is used with a 300ms delay to improve search performance and reduce API calls. Results are displayed with pagination.
- **Favorites Management:** Tapping the heart icon on a movie adds it to the favorites list. A floating button appears that navigates to the Favorites screen.
- **Favorites Screen:** Users can view their favorite movies and remove them if desired.

## Testing

Tests are implemented for the movie reducer in the `__test__` directory.

To run the tests, use the following command:

```bash
yarn test
```