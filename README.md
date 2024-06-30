# Expense Breakdown Summary

<h3>Overview</h3>

The Expense Breakdown App is a simple and intuitive web application built using Blazor Wasm that allows users to manage their budget items. Users can add, remove, and update budget items with various frequencies, calculate dynamic and annual amounts, and save/load their budget data to/from local storage or files.

<h3>Features</h3>

Add Budget Items: Users can add new budget items with a specified name, amount, and frequency.
Calculate Amounts: The app calculates per period, dynamic, and annual amounts for each budget item.
Global Calculation Frequency: Users can set a global calculation frequency to uniformly update all budget items.
Save to Local Storage: Budget data is automatically saved to local storage.
Load from Local Storage: Budget data is loaded from local storage on app initialization.
Save to File: Users can download their budget data as a JSON file.
Load from File: Users can upload a JSON file to load their budget data.


<h3>Usage</h3>
Adding a Budget Item:

Fill in the name, amount, and frequency.
Click the "Add Item" button.

Updating Calculation Frequency:

Use the dropdown at the top to select the global calculation frequency.
All items will be updated to reflect this frequency.
Save to Local Storage:

The app automatically saves your budget data to local storage.
Load from Local Storage:

The app automatically loads your budget data from local storage upon initialization.
Save to File:

Click the "Save to File" button to download your budget data as a JSON file.
Load from File:

Click the "Load from File" button and select a JSON file to upload and load your budget data.

