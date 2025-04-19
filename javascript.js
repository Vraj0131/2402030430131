// Interactive Season Selector
document.addEventListener('DOMContentLoaded', function() {
    const seasonButtons = document.querySelectorAll('.season-btn');
    
    // Plants data
    const plants = {
        spring: [
            { name: 'Peas', icon: '🌱' },
            { name: 'Radishes', icon: '🥬' },
            { name: 'Spinach', icon: '🥬' },
            { name: 'Lettuce', icon: '🥬' },
            { name: 'Onions', icon: '🧅' },
            { name: 'Broccoli', icon: '🥦' },
            { name: 'Cabbage', icon: '🥬' },
            { name: 'Potatoes', icon: '🥔' }
        ],
        summer: [
            { name: 'Tomatoes', icon: '🍅' },
            { name: 'Cucumbers', icon: '🥒' },
            { name: 'Peppers', icon: '🌶️' },
            { name: 'Carrots', icon: '🥕' },
            { name: 'Basil', icon: '🌱' },
            { name: 'Corn', icon: '🌽' },
            { name: 'Lettuce', icon: '🥬' },
            { name: 'Strawberries', icon: '🍓' }
        ],
        fall: [
            { name: 'Kale', icon: '🥬' },
            { name: 'Carrots', icon: '🥕' },
            { name: 'Beets', icon: '🥕' },
            { name: 'Spinach', icon: '🥬' },
            { name: 'Garlic', icon: '🧄' },
            { name: 'Broccoli', icon: '🥦' },
            { name: 'Cauliflower', icon: '🥦' },
            { name: 'Lettuce', icon: '🥬' }
        ],
        winter: [
            { name: 'Parsnips', icon: '🥕' },
            { name: 'Brussels Sprouts', icon: '🥬' },
            { name: 'Winter Squash', icon: '🎃' },
            { name: 'Kale', icon: '🥬' },
            { name: 'Leeks', icon: '🧅' },
            { name: 'Swiss Chard', icon: '🥬' },
            { name: 'Turnips', icon: '🥕' },
            { name: 'Cabbage', icon: '🥬' }
        ]
    };
    
    // Function to update plant grid
    function updatePlants(season) {
        const grid = document.querySelector('.garden-grid');
        grid.innerHTML = '';
        
        plants[season].forEach(plant => {
            const plantDiv = document.createElement('div');
            plantDiv.className = 'plant-item';
            plantDiv.setAttribute('data-season', season);
            
            const iconDiv = document.createElement('div');
            iconDiv.className = 'plant-icon';
            iconDiv.textContent = plant.icon;
            
            const nameH3 = document.createElement('h3');
            nameH3.textContent = plant.name;
            
            plantDiv.appendChild(iconDiv);
            plantDiv.appendChild(nameH3);
            grid.appendChild(plantDiv);
        });
    }
    
    // Add event listeners to season buttons
    seasonButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            seasonButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update plant grid based on selected season
            const season = this.id;
            updatePlants(season);
        });
    });
    
    // Add click event to plant items (using event delegation)
    document.addEventListener('click', function(event) {
        const plantItem = event.target.closest('.plant-item');
        if (plantItem) {
            // Show plant details or modal here
            const plantName = plantItem.querySelector('h3').textContent;
            console.log(`You selected: ${plantName}`);
            // You could add more functionality here, like showing a modal
            // or displaying more details about the selected plant
        }
    });

    // Initialize with a default season
    const defaultSeason = document.querySelector('.season-btn.active')?.id || 'spring';
    updatePlants(defaultSeason);
});