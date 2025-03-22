document.addEventListener('DOMContentLoaded', function() {
    // Add a timestamp parameter to force browser to fetch the latest version of the CSV
    const timestamp = new Date().getTime();
    fetch(`data/menu.csv?t=${timestamp}`)
        .then(response => response.text())
        .then(csvData => {
            // Parse the CSV data
            const menuData = parseCSV(csvData);
            // Update the menu on the page
            updateMenu(menuData);
        })
        .catch(error => console.error('Error loading menu data:', error));
});

function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const result = {};

    // Skip the header row and process each data row
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue; // Skip empty lines
        
        const values = lines[i].split(',');
        const day = values[0];
        const mealType = values[1];
        
        // Join remaining values in case the meal item itself contains commas
        const mealItem = values.slice(2).join(',');
        
        // Initialize day objects if they don't exist
        if (!result[day]) {
            result[day] = {
                Breakfast: '',
                Lunch: '',
                Dinner: ''
            };
        }
        
        // Assign meal to the appropriate day and meal type
        result[day][mealType] = mealItem;
    }
    
    return result;
}

function updateMenu(menuData) {
    const comboCategories = document.querySelector('.combo-categories');
    if (!comboCategories) return;
    
    // Clear existing content
    comboCategories.innerHTML = '';
    
    // Days of the week in order
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Create a card for each day
    days.forEach(day => {
        if (!menuData[day]) return; // Skip if no data for this day
        
        // Create a day card
        const dayCard = document.createElement('div');
        dayCard.className = 'combo-category';
        
        // Special styling for Sunday
        if (day === 'Sunday') {
            dayCard.style.flex = '0 0 280px';
            dayCard.style.minWidth = '280px';
            dayCard.style.maxWidth = '100%';
            dayCard.style.borderRadius = '12px';
            dayCard.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            dayCard.style.padding = '15px';
            dayCard.style.backgroundColor = '#f9f9f9';
        }
        
        // Add day header
        const dayHeader = document.createElement('h3');
        dayHeader.textContent = day === 'Sunday' ? 'Sunday Special' : day;
        dayCard.appendChild(dayHeader);
        
        // Add each meal type
        const mealTypes = [
            { type: 'Breakfast', bgColor: '#d7e4bc' },
            { type: 'Lunch', bgColor: '#c2d6a4' },
            { type: 'Dinner', bgColor: '#afc98c' }
        ];
        
        mealTypes.forEach(meal => {
            // Create meal card
            const mealCard = document.createElement('div');
            mealCard.className = 'combo-meal';
            mealCard.style.backgroundColor = meal.bgColor;
            mealCard.style.transition = 'all 0.3s ease';
            mealCard.style.cursor = 'pointer';
            mealCard.style.height = '100px';
            mealCard.style.display = 'flex';
            mealCard.style.flexDirection = 'column';
            mealCard.style.justifyContent = 'center';
            mealCard.style.padding = '15px';
            mealCard.style.marginBottom = '10px';
            mealCard.style.borderRadius = '8px';
            
            // Add mouse events for animation
            mealCard.setAttribute('onmouseover', "this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)';");
            mealCard.setAttribute('onmouseout', "this.style.transform='translateY(0)'; this.style.boxShadow='none';");
            
            // Add meal title
            const mealTitle = document.createElement('h4');
            mealTitle.className = 'combo-meal__title';
            mealTitle.style.margin = '0 0 8px 0';
            mealTitle.style.fontWeight = '600';
            mealTitle.textContent = meal.type;
            mealCard.appendChild(mealTitle);
            
            // Add meal item
            const mealItem = document.createElement('p');
            mealItem.className = 'combo-meal__item';
            mealItem.style.margin = '0';
            mealItem.style.lineHeight = '1.4';
            mealItem.textContent = menuData[day][meal.type] || 'Not available';
            mealCard.appendChild(mealItem);
            
            // Add meal card to day card
            dayCard.appendChild(mealCard);
        });
        
        // Add day card to container
        comboCategories.appendChild(dayCard);
    });
} 