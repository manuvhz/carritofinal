export const products = [
  {
    id: 1,
    name: 'Smartphone Galaxy Pro',
    description: 'Teléfono inteligente de última generación con cámara de 108MP',
    price: 1299000,
    image: '📱',
    category: 'Electrónicos'
  },
  {
    id: 2,
    name: 'Laptop Gaming RGB',
    description: 'Portátil para gaming con procesador Intel i7 y tarjeta gráfica RTX',
    price: 3499000,
    image: '💻',
    category: 'Computadores'
  },
  {
    id: 3,
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con cancelación de ruido activa',
    price: 299000,
    image: '🎧',
    category: 'Audio'
  },
  {
    id: 4,
    name: 'Smart TV 55"',
    description: 'Televisor inteligente 4K Ultra HD con sistema operativo Android',
    price: 1899000,
    image: '📺',
    category: 'Electrónicos'
  },
  {
    id: 5,
    name: 'Cafetera Espresso',
    description: 'Máquina de café espresso automática con molinillo integrado',
    price: 899000,
    image: '☕',
    category: 'Hogar'
  },
  {
    id: 6,
    name: 'Cámara Digital',
    description: 'Cámara DSLR profesional con lente 18-55mm incluido',
    price: 2199000,
    image: '📷',
    category: 'Fotografía'
  },
  {
    id: 7,
    name: 'Tablet Pro 12"',
    description: 'Tablet profesional con stylus y teclado incluidos',
    price: 1599000,
    image: '📱',
    category: 'Electrónicos'
  },
  {
    id: 8,
    name: 'Consola de Videojuegos',
    description: 'Consola de nueva generación con SSD de 1TB',
    price: 2299000,
    image: '🎮',
    category: 'Gaming'
  },
  {
    id: 9,
    name: 'Reloj Inteligente',
    description: 'Smartwatch con GPS, monitor cardíaco y resistencia al agua',
    price: 799000,
    image: '⌚',
    category: 'Wearables'
  }
]

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price)
}