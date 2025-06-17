<template>
  <div>
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">🛍️ Tienda Online</div>
          <div class="cart-icon" @click="toggleCart">
            🛒
            <span v-if="cartStore.totalItems > 0" class="cart-count">
              {{ cartStore.totalItems }}
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <!-- Products Section -->
        <section>
          <h2 class="section-title">Nuestros Productos</h2>
          <div class="products-grid">
            <div 
              v-for="product in products" 
              :key="product.id" 
              class="product-card"
            >
              <div class="product-image">
                {{ product.image }}
              </div>
              <div class="product-info">
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-price">{{ formatPrice(product.price) }}</div>
                <button 
                  @click="addToCart(product)" 
                  class="add-to-cart-btn"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Cart Section -->
        <section v-if="showCart" class="cart-section">
          <h2 class="section-title">🛒 Mi Carrito</h2>
          
          <div v-if="cartStore.items.length === 0" class="empty-cart">
            Tu carrito está vacío. ¡Agrega algunos productos!
          </div>

          <div v-else>
            <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
              <div class="cart-item-info">
                <div class="cart-item-name">{{ item.name }}</div>
                <div class="cart-item-price">{{ formatPrice(item.price) }}</div>
              </div>
              
              <div class="quantity-controls">
                <button 
                  @click="cartStore.decreaseQuantity(item.id)" 
                  class="quantity-btn"
                >
                  -
                </button>
                <span class="quantity">{{ item.quantity }}</span>
                <button 
                  @click="cartStore.increaseQuantity(item.id)" 
                  class="quantity-btn"
                >
                  +
                </button>
              </div>
              
              <button 
                @click="cartStore.removeFromCart(item.id)" 
                class="remove-btn"
              >
                Eliminar
              </button>
            </div>

            <!-- Cart Summary -->
            <div class="cart-summary">
              <div class="total-amount">
                Total: {{ cartStore.formattedTotal }}
              </div>
              <button @click="checkout" class="checkout-btn">
                Proceder al Pago
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
<footer style="text-align: center;">Manuel Vargas / Isaac Martinez / Luis Noriega / Jean Alvarez / Andrès Buelvas</footer>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'
import { products, formatPrice } from '~/data/products'

// Store del carrito
const cartStore = useCartStore()

// Estado local
const showCart = ref(false)

// Métodos
const addToCart = (product) => {
  cartStore.addToCart(product)
  // Mostrar el carrito automáticamente cuando se agrega un producto
  showCart.value = true
}

const toggleCart = () => {
  showCart.value = !showCart.value
}

const checkout = () => {
  alert(`Gracias por tu compra! Total: ${cartStore.formattedTotal}`)
  cartStore.clearCart()
  showCart.value = false
}

// Meta tags específicos para esta página
useHead({
  title: 'Inicio - Tienda Online',
  meta: [
    { name: 'description', content: 'Explora nuestros productos y agrega al carrito' }
  ]
})
</script>