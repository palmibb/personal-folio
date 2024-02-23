# Calculator
This Calculator project is a simple web-based calculator application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

# Features

Basic Arithmetic Operations: Addition, subtraction, multiplication, and division.
Clear Button (C): Resets the calculator to its initial state.
Backspace Button (←): Deletes the last digit entered.
Equals Button (=): Computes the result of the arithmetic expression entered.
Responsive Design: The calculator is designed to adapt to various screen sizes.

# How it Works

The calculator operates on a simple principle of maintaining a running total and a buffer for user input. Here's a breakdown of its functionality:

buttonClick(value): Handles clicks on calculator buttons. It distinguishes between numerical input and symbolic input (e.g., operators) and updates the display accordingly.

handleSymbol(symbol): Handles symbolic inputs such as clear (C), backspace (←), equals (=), and basic arithmetic operators (+, −, ×, ÷).

handleMath(symbol): Performs arithmetic operations when an operator is entered. It maintains the running total and updates the buffer accordingly.

flushOperation(intBuffer): Flushes the pending operation by applying the operator to the running total and the current buffer value.

handleNumber(numberString): Handles numerical inputs. It updates the buffer with the entered digits.

# Usage
To use the calculator:

Include the HTML, CSS, and JavaScript files in your project.
Create an HTML element with the class "screen" to display the calculator's output.
Add buttons for numerical digits, operators, clear (C), backspace (←), and equals (=).
Initialize the calculator by calling the init() function.
html