<template>
  <div>
    <Navbar />
    <div class="order-page">
      <h1>🛵 Delivery Order</h1>

      <div class="menu-list">
        <h2>📋 Pilih Menu</h2>
        <ul>
          <li v-for="item in menu" :key="item.id" class="menu-item">
            <div class="menu-info">
              <strong>{{ item.name }}</strong>
              <p class="price">Rp {{ formatPrice(item.price) }}</p>
            </div>
            <input 
              type="number" 
              min="0" 
              v-model.number="order[item.id]" 
              placeholder="Jumlah"
            />
          </li>
        </ul>
      </div>

      <div class="order-summary" v-if="hasOrder">
        <h2>🧾 Ringkasan Pesanan</h2>
        <ul>
          <li v-for="item in orderedItems" :key="item.id">
            {{ item.name }} x {{ order[item.id] }} = <strong>Rp {{ formatPrice(item.price * order[item.id]) }}</strong>
          </li>
        </ul>
        <p class="total"><strong>Total: Rp {{ formatPrice(totalPrice) }}</strong></p>
      </div>

      <button class="submit-btn" @click="submitOrder" :disabled="!hasOrder">Kirim Pesanan</button>
    </div>
  </div>
</template>

<script setup>
import Dashboard from './Dashboard.vue'
import { ref, computed } from 'vue'

const menu = ref([
  { id: 1, name: 'Nasi Goreng Spesial', price: 20000 },
  { id: 2, name: 'Mie Ayam Bakso', price: 22000 },
  { id: 3, name: 'Es Teh Manis', price: 5000 },
  { id: 4, name: 'Sate Ayam Madura', price: 15000 },
])

const order = ref({})

const hasOrder = computed(() =>
  Object.values(order.value).some(qty => qty > 0)
)

const orderedItems = computed(() =>
  menu.value.filter(item => order.value[item.id] > 0)
)

const totalPrice = computed(() =>
  orderedItems.value.reduce((total, item) => {
    return total + item.price * order.value[item.id]
  }, 0)
)

function formatPrice(value) {
  return value.toLocaleString('id-ID')
}

function submitOrder() {
  if (!hasOrder.value) {
    alert('Silakan pilih minimal satu menu dengan jumlah > 0')
    return
  }

  let summary = orderedItems.value.map(item =>
    `${item.name} x ${order.value[item.id]}`
  ).join(', ')

  alert(`Order terkirim:\n${summary}\nTotal: Rp ${formatPrice(totalPrice.value)}`)

  order.value = {}
}
</script>

<style scoped>

.order-page {
  max-width: 700px;
  margin: 40px auto;
  padding: 25px 30px;
  background-image: url('src/assets/download.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', sans-serif;
}

.order-content {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
}



h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #ff5722;
}

.menu-list h2, .order-summary h2 {
  margin-bottom: 10px;
  color: #444;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fefefe;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease;
}

.menu-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.menu-info {
  flex-grow: 1;
}

.price {
  color: #777;
  font-size: 0.9em;
  margin-top: 4px;
}

input[type="number"] {
  width: 70px;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.order-summary ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.total {
  font-size: 1.2em;
  margin-top: 10px;
}

.submit-btn {
  width: 100%;
  background-color: #ff5722;
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 25px;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #e64a19;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
