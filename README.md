# Myna Kitchen - Menu Management System

This is a simple menu management system for Myna Kitchen. It allows you to update the daily menu through a CSV file, which automatically updates the website.

## How It Works

1. The menu data is stored in a CSV file (`data/menu.csv`)
2. The website reads this file and displays the menu
3. When you edit the CSV file, the website automatically updates

## Setup Options

### Option 1: Using PHP

If you have PHP installed:

1. Place all files on your PHP server
2. Access the website normally
3. Go to `/admin.html` to edit the menu
4. Make your changes and click "Save Menu"

### Option 2: Using Node.js

If you prefer Node.js:

1. Make sure you have Node.js installed
2. Run `npm install` to install dependencies
3. Start the server with `npm start` or `node server.js`
4. Open `http://localhost:8000` in your browser
5. Go to `http://localhost:8000/admin.html` to edit the menu

### Option 3: Manual Editing

You can also manually edit the CSV file:

1. Open `data/menu.csv` in a text editor
2. Make your changes following the format: `day,meal_type,item`
3. Save the file
4. Refresh the website to see the changes

## CSV Format

The CSV file follows this format:

```
day,meal_type,meal_category,item
Sunday,Breakfast,,Keppa Kanji + Pickle
Sunday,Lunch,Super Meal,Chicken Biryani + Chilli Chicken + Raita + 1 Boiled Egg
```

- First column: Day of the week (Sunday, Monday, etc.)
- Second column: Meal type (Breakfast, Lunch, Dinner)
- Third column: Meal category (Meal, Super Meal) - leave empty for Breakfast items
- Fourth column: The menu item

## Tips

- Always maintain the CSV format with the header row
- Make sure to include all days and meal types
- Valid meal categories are "Meal" and "Super Meal" (only used for Lunch and Dinner)
- Leave the meal category empty for Breakfast items
- If a meal has commas, they'll be handled correctly in the CSV parsing

## Support

For any issues or questions, please contact the Myna Kitchen team. 