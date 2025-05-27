<!-- src/components/Menu.vue -->
<template>
  <div class="product-list">
    <div class="container">
      <h1>Menu Makanan</h1>
      <p>Pilih makanan favoritmu dari daftar di bawah ini.</p>
      <div class="products">
        <div class="product-card" v-for="(item, index) in products" :key="index">
          <img :src="item.image" :alt="item.name" />
          <h2>{{ item.name }}</h2>
          <div class="brand">{{ item.category }}</div>
          <p>{{ item.description }}</p>
          <span class="price">Rp {{ item.price.toLocaleString() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    name: 'Nasi Goreng Spesial',
    category: 'Makanan Utama',
    description: 'Nasi goreng dengan telur, ayam, dan kerupuk.',
    price: 20000,
    image: 'src/assets/download (1).jpeg'
  },
  {
    name: 'Mie Ayam Bakso',
    category: 'Makanan Utama',
    description: 'Mie ayam dengan tambahan bakso dan sawi segar.',
    price: 22000,
    image: 'src/assets/download (2).jpeg'
  },
  {
    name: 'Ayam Geprek ',
    category: 'Makanan Pedas',
    description: 'Ayam goreng krispi dengan sambal super pedas.',
    price: 17000,
    image: 'src/assets/download (3).jpeg'
  },
  {
    name: 'Sate Ayam Madura',
    category: 'Makanan Tradisional',
    description: 'Sate ayam bumbu kacang khas Madura dengan lontong.',
    price: 15000,
    image: 'src/assets/download (4).jpeg'
  },
  {
    name: 'Soto Ayam Lamongan',
    category: 'Makanan Berkuah',
    description: 'Soto ayam dengan koya khas Lamongan.',
    price: 14000,
    image: 'src/assets/images.jpeg'
  },
  {
    name: 'Rendang Daging Sapi',
    category: 'Makanan Padang',
    description: 'Daging sapi empuk dengan bumbu rendang khas Minang.',
    price: 25000,
    image: 'src/assets/download (5).jpeg'
  },
  {
    name: 'Gado-Gado Betawi',
    category: 'Salad Tradisional',
    description: 'Sayuran rebus dengan bumbu kacang dan kerupuk.',
    price: 12000,
    image: 'src/assets/download (6).jpeg'
  },
  {
    name: 'Bakso Urat Jumbo',
    category: 'Makanan Berkuah',
    description: 'Bakso besar dengan urat daging sapi dan mie.',
    price: 23000,
    image: 'src/assets/images (1).jpeg'
  },
  {
    name: 'Es Teh Manis',
    category: 'Minuman Dingin',
    description: 'Teh manis dingin segar dengan es batu.',
    price: 5000,
    image: 'src/assets/download (7).jpeg'
  },
  {
    name: 'Jus Alpukat Cokelat',
    category: 'Minuman Jus',
    description: 'Jus alpukat segar dengan topping cokelat kental manis.',
    price: 8000,
    image: 'src/assets/download (8).jpeg'
  },
  {
    name: 'Pisang Goreng Cokelat Keju',
    category: 'Cemilan',
    description: 'Pisang goreng renyah dengan cokelat leleh dan parutan keju.',
    price: 12000,
    image: 'src/assets/download (9).jpeg'
  },
  {
    name: 'Martabak Manis Cokelat Keju',
    category: 'Cemilan Malam',
    description: 'Martabak dengan isian cokelat dan keju melimpah.',
    price: 18000,
    image: 'src/assets/images (2).jpeg'
  }
]
</script>

<style scoped>

.product-list {
  background-image: url('C:\Users\PianTOLL\tugas10\src\assets\download.jpeg'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
  font-family: 'Georgia', serif;
  color: white;
}

.product-list::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  color: white;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.product-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  padding: 1rem;
  width: 280px;
  text-align: left;
  transition: transform 0.2s ease;
}
.product-card:hover {
  transform: scale(1.03);
}
.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
.product-card h2 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: #333;
}
.product-card .brand {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 0.5rem;
}
.product-card p {
  font-size: 0.95rem;
  color: #555;
}
.price {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
  color: #42b883;
  font-size: 1.1rem;
}
</style>
