  // Variável para armazenar o carrinho
  let cart = [];

  // Função para atualizar o carrinho na tela
  function updateCart() {
      const cartItemsDiv = document.getElementById('cart-items');
      const cartTotalSpan = document.getElementById('cart-total');

      // Limpa o conteúdo atual do carrinho
      cartItemsDiv.innerHTML = '';

      // Calcula o total
      let total = 0;

      // Adiciona cada item ao carrinho
      cart.forEach((item, index) => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('cart-item');
          itemDiv.innerHTML = `
              <span>${item.name} - R$${item.price.toFixed(2)}</span>
              <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remover</button>
          `;
          cartItemsDiv.appendChild(itemDiv);

          // Soma ao total
          total += item.price;
      });

      // Atualiza o total
      cartTotalSpan.textContent = total.toFixed(2);
  }

  // Event listener para adicionar ao carrinho
  document.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart')) {
          const name = event.target.getAttribute('data-name');
          const price = parseFloat(event.target.getAttribute('data-price'));

          // Adiciona ao carrinho
          cart.push({ name, price });

          // Atualiza o carrinho na tela
          updateCart();
      }
  });

  // Event listener para remover do carrinho
  document.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-from-cart')) {
          const index = parseInt(event.target.getAttribute('data-index'));

          // Remove o item do carrinho
          cart.splice(index, 1);

          // Atualiza o carrinho na tela
          updateCart();
      }
  });