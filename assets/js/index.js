document.querySelectorAll('.gallery__sidebar li').forEach(category => {
    category.addEventListener('click', () => {
        const filter = category.getAttribute('data-filter');
        const items = document.querySelectorAll('.gallary__item');

        items.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (filter === 'all' || itemCategory === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
