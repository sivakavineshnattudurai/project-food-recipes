document.getElementById('search').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    restaurantCards.forEach(card => {
        const restaurantName = card.querySelector('h3').textContent.toLowerCase();
        const restaurantCuisine = card.querySelector('p').textContent.toLowerCase();

        if (restaurantName.includes(query) || restaurantCuisine.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

function openRestaurant(page) {
    window.location.href = page;
}

document.getElementById('reviewForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const reviewsContainer = document.querySelector('.reviews');

    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
        <h3>${name}</h3>
        <p>${review}</p>
    `;

    reviewsContainer.appendChild(reviewElement);

    document.getElementById('reviewForm').reset();
});