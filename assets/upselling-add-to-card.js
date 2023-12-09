
 function addToCart(productId, quantity) {
  const cartEndpoint = '/cart/add.js'; // Shopify cart endpoint
  const data = {
    items: [
      {
        id: productId,
        quantity: quantity
      }
    ]
  };

  fetch(cartEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // update card drawer
      var mydiv = document.getElementById("CartDrawer");
      fetch(window.location.href)
        .then(response => response.text())
        .then(data => {
          var tempDiv = document.createElement("div");
          tempDiv.innerHTML = data;
          var updatedContent = tempDiv.querySelector("#CartDrawer").innerHTML;
          mydiv.innerHTML = updatedContent;
        })
        .catch(error => {
          console.error("Error fetching content:", error);
        });
    console.log('Product added to cart:', data);
  })
  .catch(error => {
    // Handle errors here, e.g., display an error message.
    console.error('Error adding product to cart:', error);
  });
}