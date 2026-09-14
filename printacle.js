/* =========================================================
   PRINTACLE - PRODUCT DATA
   ---------------------------------------------------------
   ADD AS MANY PRODUCTS AS YOU WANT HERE.

   category MUST be exactly one of:
   posters
   tote-bags
   frosted-mugs
   car-hangings

   image = your image filename in the same folder.
   Example:
   { id:"poster-10", category:"posters", name:"My New Poster",
     price:699, image:"poster10.png", description:"..." }

   The product page automatically puts each product only
   inside its own category window.
   ========================================================= */

const PRINTACLE_PRODUCTS = [
  // ---------------- POSTERS ----------------
  {
    id: "poster-1",
    category: "posters",
    name: "Minimal Poster",
    price: 499,
    image: "poster1.png",
    description: "A clean statement poster designed to give your wall a strong personality."
  },
  {
    id: "poster-2",
    category: "posters",
    name: "Stay Creative Poster",
    price: 599,
    image: "poster2.png",
    description: "A creative wall piece for bedrooms, studios and workspaces."
  },
  {
    id: "poster-3",
    category: "posters",
    name: "Custom Vibe Poster",
    price: 699,
    image: "poster3.png",
    description: "A bold poster for people who want their space to feel personal."
  },

  // ---------------- TOTE BAGS ----------------
  {
    id: "tote-1",
    category: "tote-bags",
    name: "Everyday Tote",
    price: 349,
    image: "bag1.png",
    description: "A simple everyday tote made for carrying your essentials in style."
  },
  {
    id: "tote-2",
    category: "tote-bags",
    name: "Printacle Tote",
    price: 399,
    image: "bag2.png",
    description: "A statement tote with a clean Printacle-inspired design."
  },

  // ---------------- FROSTED MUGS ----------------
  {
    id: "mug-1",
    category: "frosted-mugs",
    name: "Frosted Mood Mug",
    price: 399,
    image: "mug1.png",
    description: "A frosted mug designed to make your everyday coffee or chai a little better."
  },
  {
    id: "mug-2",
    category: "frosted-mugs",
    name: "Daily Grind Mug",
    price: 449,
    image: "mug2.png",
    description: "A simple statement mug for study sessions, work and slow mornings."
  },

  // ---------------- CAR HANGINGS ----------------
  {
    id: "car-1",
    category: "car-hangings",
    name: "Drive With Style",
    price: 299,
    image: "car1.png",
    description: "A compact hanging accessory that adds personality to your car."
  },
  {
    id: "car-2",
    category: "car-hangings",
    name: "Good Vibes Car Hanging",
    price: 349,
    image: "car2.png",
    description: "A playful car hanging made to give every drive a little more character."
  }
];

const CATEGORY_NAMES = {
  "posters": "Posters",
  "tote-bags": "Tote Bags",
  "frosted-mugs": "Frosted Mugs",
  "car-hangings": "Car Hangings"
};

/* ---------------- SIDEBAR ---------------- */

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

document.getElementById("menuBtn")?.addEventListener("click", () => {
  sidebar?.classList.add("open");
  overlay?.classList.add("show");
});

document.getElementById("closeBtn")?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);

function closeMenu() {
  sidebar?.classList.remove("open");
  overlay?.classList.remove("show");
}

document.getElementById("productsToggle")?.addEventListener("click", () => {
  document.getElementById("productMenu")?.classList.toggle("open");
});

/* ---------------- CART ---------------- */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("printacleCart") || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("printacleCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  document.querySelectorAll("#cartCount").forEach(el => {
    el.textContent = count;
  });
}

function addToCart(product, quantity = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      category: product.category,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: quantity
    });
  }

  saveCart(cart);
}

/* ---------------- PRODUCT PAGE ---------------- */

function makeProductCard(product) {
  const card = document.createElement("article");
  card.className = "shop-product-card";
  card.innerHTML = `
    <button class="product-image-button" type="button">
      <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" class="shop-product-image"
           onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');">
      <span class="image-fallback">${escapeHTML(product.name)}</span>
    </button>
    <div class="shop-product-info">
      <div>
        <h3>${escapeHTML(product.name)}</h3>
        <p>₹${Number(product.price).toLocaleString("en-IN")}</p>
      </div>
      <button class="quick-add" type="button">Add +</button>
    </div>
  `;

  card.querySelector(".product-image-button").addEventListener("click", () => openProductModal(product));
  card.querySelector(".quick-add").addEventListener("click", (event) => {
    event.stopPropagation();
    addToCart(product, 1);
    event.currentTarget.textContent = "Added ✓";
    setTimeout(() => event.currentTarget.textContent = "Add +", 1000);
  });

  return card;
}

function renderProductPage() {
  const grids = {
    "posters": document.getElementById("postersGrid"),
    "tote-bags": document.getElementById("tote-bagsGrid"),
    "frosted-mugs": document.getElementById("frosted-mugsGrid"),
    "car-hangings": document.getElementById("car-hangingsGrid")
  };

  if (!grids.posters) return;

  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("category");

  Object.keys(grids).forEach(category => {
    const grid = grids[category];
    const section = document.querySelector(`.category-window[data-category="${category}"]`);
    const products = PRINTACLE_PRODUCTS.filter(item => item.category === category);

    grid.innerHTML = "";

    products.forEach(product => {
      grid.appendChild(makeProductCard(product));
    });

    const count = document.querySelector(`[data-count="${category}"]`);
    if (count) {
      count.textContent = `${products.length} product${products.length === 1 ? "" : "s"}`;
    }

    if (selectedCategory && selectedCategory !== category) {
      section.style.display = "none";
    }
  });
}

/* ---------------- PRODUCT MODAL ---------------- */

let selectedProduct = null;
let selectedQuantity = 1;

function openProductModal(product) {
  selectedProduct = product;
  selectedQuantity = 1;

  const modal = document.getElementById("productModal");
  if (!modal) return;

  document.getElementById("modalCategory").textContent = CATEGORY_NAMES[product.category] || "";
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalPrice").textContent = Number(product.price).toLocaleString("en-IN");
  document.getElementById("modalQuantity").textContent = selectedQuantity;
  document.getElementById("addedMessage").textContent = "";

  const image = document.getElementById("modalImage");
  const fallback = document.getElementById("modalFallback");

  image.src = product.image;
  image.alt = product.name;
  image.style.display = "block";
  fallback.textContent = product.name;
  fallback.style.display = "none";

  image.onerror = () => {
    image.style.display = "none";
    fallback.style.display = "grid";
  };

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  selectedProduct = null;
}

document.getElementById("modalClose")?.addEventListener("click", closeProductModal);
document.getElementById("modalBackdrop")?.addEventListener("click", closeProductModal);

document.getElementById("modalMinus")?.addEventListener("click", () => {
  if (selectedQuantity > 1) {
    selectedQuantity--;
    document.getElementById("modalQuantity").textContent = selectedQuantity;
  }
});

document.getElementById("modalPlus")?.addEventListener("click", () => {
  selectedQuantity++;
  document.getElementById("modalQuantity").textContent = selectedQuantity;
});

document.getElementById("modalAdd")?.addEventListener("click", () => {
  if (!selectedProduct) return;

  addToCart(selectedProduct, selectedQuantity);

  const message = document.getElementById("addedMessage");
  message.textContent = `${selectedQuantity} × ${selectedProduct.name} added to cart ✓`;

  setTimeout(() => {
    closeProductModal();
  }, 700);
});

/* ---------------- CART PAGE ---------------- */

function renderCartPage() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const cart = getCart();
  container.innerHTML = "";

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
        <a href="product.html">Explore products →</a>
      </div>
    `;
    document.getElementById("cartTotal").textContent = "0";
    const buy = document.getElementById("purchaseButton");
    if (buy) buy.disabled = true;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const lineTotal = Number(item.price) * Number(item.quantity);
    total += lineTotal;

    const row = document.createElement("div");
    row.className = "cart-row";

    row.innerHTML = `
      <div class="cart-product">
        <div class="cart-thumb">
          <img src="${escapeHTML(item.image || "")}" alt="${escapeHTML(item.name)}"
               onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');">
          <span>${escapeHTML(item.name)}</span>
        </div>
        <div>
          <h3>${escapeHTML(item.name)}</h3>
          <p>₹${Number(item.price).toLocaleString("en-IN")} each</p>
        </div>
      </div>

      <div class="cart-controls">
        <div class="quantity-control">
          <button type="button" data-action="minus">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="plus">+</button>
        </div>
        <strong>₹${lineTotal.toLocaleString("en-IN")}</strong>
        <button type="button" class="remove-cart" data-action="remove">Remove</button>
      </div>
    `;

    row.querySelector('[data-action="minus"]').addEventListener("click", () => changeCartQuantity(index, -1));
    row.querySelector('[data-action="plus"]').addEventListener("click", () => changeCartQuantity(index, 1));
    row.querySelector('[data-action="remove"]').addEventListener("click", () => removeCartItem(index));

    container.appendChild(row);
  });

  document.getElementById("cartTotal").textContent = total.toLocaleString("en-IN");

  document.getElementById("purchaseButton")?.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
}

function changeCartQuantity(index, amount) {
  const cart = getCart();
  if (!cart[index]) return;

  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCartPage();
}

function removeCartItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartPage();
}

/* ---------------- CHECKOUT PAGE ---------------- */

function renderCheckoutSummary() {
  const container = document.getElementById("checkoutItems");
  if (!container) return;

  const cart = getCart();

  if (!cart.length) {
    window.location.href = "product.html";
    return;
  }

  let total = 0;

  container.innerHTML = cart.map(item => {
    const lineTotal = Number(item.price) * Number(item.quantity);
    total += lineTotal;

    return `
      <div class="checkout-item">
        <span>${escapeHTML(item.name)} × ${item.quantity}</span>
        <b>₹${lineTotal.toLocaleString("en-IN")}</b>
      </div>
    `;
  }).join("");

  document.getElementById("checkoutTotal").textContent = total.toLocaleString("en-IN");
}

async function getPincodeLocation(pincode) {
  const response = await fetch(`https://api.zippopotam.us/in/${encodeURIComponent(pincode)}`);

  if (!response.ok) {
    throw new Error("Pincode not found");
  }

  const data = await response.json();

  if (!data.places || !data.places.length) {
    throw new Error("Pincode location unavailable");
  }

  return {
    latitude: Number(data.places[0].latitude),
    longitude: Number(data.places[0].longitude),
    place: data.places[0]["place name"],
    state: data.places[0].state
  };
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return 2 * earthRadiusKm * Math.asin(Math.sqrt(a));
}

async function calculateDeliveryDistance() {
  const pincodeInput = document.getElementById("customerPincode");
  const result = document.getElementById("distanceResult");
  const button = document.getElementById("distanceButton");

  if (!pincodeInput || !result) return;

  const destinationPincode = pincodeInput.value.trim();

  if (!/^\d{6}$/.test(destinationPincode)) {
    result.className = "distance-result error";
    result.textContent = "Please enter a valid 6-digit Indian pincode.";
    return;
  }

  button.disabled = true;
  button.textContent = "Calculating...";

  try {
    // 147001 is the Printacle base pincode supplied for this project.
    const origin = await getPincodeLocation("147001");
    const destination = await getPincodeLocation(destinationPincode);

    const distance = haversineDistance(
      origin.latitude,
      origin.longitude,
      destination.latitude,
      destination.longitude
    );

    result.className = "distance-result success";
    result.innerHTML = `
      <strong>Approx. ${distance.toFixed(1)} km</strong>
      <span>from pincode 147001 to ${destinationPincode}</span>
      <small>This is a straight-line geographic distance, not a road-distance estimate.</small>
    `;
  } catch (error) {
    result.className = "distance-result error";
    result.textContent = "We could not find that pincode. Please check it and try again.";
  } finally {
    button.disabled = false;
    button.textContent = "Calculate distance";
  }
}

document.getElementById("distanceButton")?.addEventListener("click", calculateDeliveryDistance);

document.getElementById("addressForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const city = document.getElementById("customerCity").value.trim();
  const state = document.getElementById("customerState").value.trim();
  const pincode = document.getElementById("customerPincode").value.trim();

  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (!/^\d{6}$/.test(pincode)) {
    alert("Please enter a valid 6-digit pincode.");
    return;
  }

  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);

  const order = {
    customer: { name, phone, address, city, state, pincode },
    items: cart,
    total,
    basePincode: "147001",
    createdAt: new Date().toISOString()
  };

  localStorage.setItem("printacleDelivery", JSON.stringify(order));

  alert("Delivery details saved. The next step is to connect this button to Razorpay/UPI.");
});

/* ---------------- HELPERS ---------------- */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

updateCartCount();
renderProductPage();
renderCartPage();
renderCheckoutSummary();
