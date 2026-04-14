const priceSlider = document.getElementById('price');
const priceValue = document.getElementById('priceValue');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const clearFiltersBtn = document.getElementById('clearFilters');

function filterProducts() {
  const q = searchInput.value.toLowerCase();
  const cat = categorySelect.value;
  const max = parseInt(priceSlider.value);

  document.querySelectorAll('.product-card').forEach((card) => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const cCat = card.dataset.category;
    const price = parseInt(card.dataset.price);

    const show = name.includes(q) && (cat === 'all' || cat === cCat) && price <= max;
    card.style.display = show ? '' : 'none';
  });
}

priceSlider.addEventListener('input', () => {
  const v = parseInt(priceSlider.value);
  priceValue.textContent = '$' + v.toLocaleString();
  filterProducts();
});

searchInput.addEventListener('input', filterProducts);
categorySelect.addEventListener('change', filterProducts);

clearFiltersBtn.addEventListener('click', () => {
  searchInput.value = '';
  categorySelect.value = 'all';
  priceSlider.value = 8000;
  priceValue.textContent = '$8,000';
  filterProducts();
});

document.querySelectorAll('.product-card').forEach((card, index) => {
  card.style.animationDelay = index * 0.06 + 's';
});
