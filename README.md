# Monday.com Column Value Multiplier
A Node.js Monday.com Integraiton
---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Overview

This app provides a custom action that takes a value from one column, multiplies it by 5 and updates the result column.

## Features

- **Update Monday.com Column**: Takes value from one column, multiplies it by 5 and updates result column.
- **Data Persistence with MongoDB**: Uses MongoDB to store and retrieve item data.
- **Testing with Jest**: Unit tests to verify behavior.

---

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Monday.com API Token](https://monday.com/developers/apps/quickstart-integration)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/monday-column-updater.git
   cd monday-column-updater
   ```

2. Set up Environment variables

    Copy the `env.sample` and create your own `.env`

3. install dependencies:

    ```bash
    npm install
    ```

4. Run the App
    ```bash
    npm run dev
    ```

### Testing

This project uses Jest for unit testing. The changeColumnValue function has been tested with various scenarios using mocked API calls.

To run tests:
  ```bash
    npm test
  ```
