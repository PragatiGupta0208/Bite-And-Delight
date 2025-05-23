document.addEventListener('DOMContentLoaded', function () {
    // Filter functionality
    const categoryFilter = document.getElementById('category');
    const priceFilter = document.getElementById('price');
    const foodCards = document.querySelectorAll('.food-card');

    function filterFood() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;

        foodCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardPrice = parseInt(card.getAttribute('data-price')) || 0;

            let categoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;
            let priceMatch = true;

            if (selectedPrice !== 'all') {
                const [min, max] = selectedPrice.split('-').map(part => parseInt(part) || 0);
                priceMatch = selectedPrice.endsWith('+') ? cardPrice >= min : cardPrice >= min && cardPrice <= max;
            }

            card.style.display = categoryMatch && priceMatch ? 'block' : 'none';
        });
    }

    categoryFilter.addEventListener('change', filterFood);
    priceFilter.addEventListener('change', filterFood);


    document.addEventListener('DOMContentLoaded', function() {
        // Train Order Form Toggle
        const trainOrderButton = document.getElementById('trainOrderButton');
        const trainOrderForm = document.getElementById('trainOrderForm');
        
        if (trainOrderButton && trainOrderForm) {
            trainOrderButton.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default button behavior
                if (trainOrderForm.style.display === 'none' || !trainOrderForm.style.display) {
                    trainOrderForm.style.display = 'block';
                    // Scroll to form for better UX
                    trainOrderForm.scrollIntoView({ behavior: 'smooth' });
                } else {
                    trainOrderForm.style.display = 'none';
                }
            });
        }
    
        // Train Order Form Submission
        const trainOrderFormElement = document.getElementById('trainOrderFormElement');
        if (trainOrderFormElement) {
            trainOrderFormElement.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const trainName = document.getElementById('trainName').value;
                const seatNumber = document.getElementById('seatNumber').value;
                const foodItems = Array.from(document.getElementById('foodItems').selectedOptions)
                                       .map(option => option.value);
                
                // Validate form
                if (!trainName || !seatNumber || foodItems.length === 0) {
                    alert('Please fill in all required fields and select at least one food item.');
                    return;
                }
                
                // Process order (in a real app, you would send this to a server)
                alert(`Order placed for train ${trainName} (Seat: ${seatNumber}).\nFood Items: ${foodItems.join(', ')}`);
                
                // Reset form and hide it
                trainOrderFormElement.reset();
                trainOrderForm.style.display = 'none';
            });
        }
    });

    // "Order Now" button linked to chatbot
    const orderNowButton = document.getElementById('order-now');
    orderNowButton?.addEventListener('click', () => {
        window.open('https://dialogflow.cloud.google.com/#/agent/honey-chatbot-for-food-de-sofj/intents', '_blank');
    });

    // Add to Cart Functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const foodCard = this.closest('.food-card');
            const foodName = foodCard.querySelector('h3')?.textContent;
            const foodPrice = foodCard.querySelector('span')?.textContent;
            alert(`Added ${foodName} (${foodPrice}) to your cart!`);
        });
    });

    // Form Submission
    const orderForm = document.querySelector('.order-form');
    orderForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your order has been placed successfully! Our delivery partner will contact you soon.');
        this.reset();
    });

    // Food Train Animation
    const train = document.querySelector('.train');
    const foodItems = document.querySelectorAll('.food-item');

    let position = -100;
    const trainAnimation = setInterval(() => {
        position += 2;
        if (position > window.innerWidth) position = -100;
        train.style.left = `${position}px`;

        foodItems.forEach(item => {
            const itemPos = parseInt(item.style.left) || 0;
            if (position > itemPos - 50 && position < itemPos + 50) {
                item.style.opacity = '1';
                setTimeout(() => item.style.opacity = '0', 1000);
            }
        });
    }, 50);

    // Recommendations
    const recommendationsGrid = document.getElementById('recommendations-grid');
    const userPreferences = JSON.parse(localStorage.getItem('userPreferences')) || {};

    document.querySelectorAll('.food-card').forEach(card => {
        const category = card.getAttribute('data-category');
        const foodName = card.querySelector('h3')?.textContent;

        card.addEventListener('click', () => {
            if (!userPreferences[category]) userPreferences[category] = [];
            if (!userPreferences[category].includes(foodName)) {
                userPreferences[category].push(foodName);
                localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
            }
            displayRecommendations();
        });
    });

    function displayRecommendations() {
        recommendationsGrid.innerHTML = '';
        const preferredCategories = Object.keys(userPreferences);
        if (preferredCategories.length === 0) {
            recommendationsGrid.innerHTML = '<p>No recommendations yet. Explore the menu!</p>';
            return;
        }

        preferredCategories.forEach(category => {
            const recommendedItems = [...document.querySelectorAll('.food-card')]
                .filter(card => card.getAttribute('data-category') === category &&
                    !userPreferences[category].includes(card.querySelector('h3')?.textContent))
                .slice(0, 3);

            recommendedItems.forEach(item => {
                recommendationsGrid.appendChild(item.cloneNode(true));
            });
        });
    }

    displayRecommendations();
});


