# React Investment Calculator

This is a simple investment calculator app built using React.js. It allows users to input their initial investment amount, annual investment, expected return rate, and investment duration. Based on these inputs, the app calculates and displays the investment results, including the investment value, interest earned, total interest, and invested capital for each year.

## How to Use

1. **Input Data**: Enter the following details in the input fields provided:
   - Initial Investment: The initial amount of investment.
   - Annual Investment: The amount of investment added every year.
   - Expected Return: The expected (annual) rate of return on investment.
   - Duration: The duration of the investment period (in years).

2. **View Results**: After entering the input data, the app will display the investment results in a table format. The results include the investment value, interest earned, total interest, and invested capital for each year of the investment duration.

3. **Note**: If the duration is less than 1 year, a message will be displayed prompting the user to input a duration greater than zero.

## Code Overview

The app consists of the following components:

- **App.js**: The main component that manages the state of user input and renders other components.
- **Header.js**: Renders the header section of the app, including the logo and title.
- **UserInput.js**: Allows users to input their investment details (initial investment, annual investment, expected return, and duration).
- **Results.js**: Calculates and displays the investment results based on the user input.
- **util/investment.js**: Contains the function to calculate investment results (`calculateInvestmentResults`) and the currency formatter (`formatter`).

## Running the App

To run the app locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm run dev`.
5. Open your web browser and go to `http://localhost:3000` to use the app.
