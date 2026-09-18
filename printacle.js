/* =========================================================
   PRINTACLE - WORKING SITE JAVASCRIPT
   ========================================================= */

const PRINTACLE_PRODUCTS = [
/* ---------- POSTERS ---------- */
     {
       id: "poster1",
       category: "posters",
       name: "Karan Aujla Set",
       price: 200,
       image: "poster1.jpeg",
       description: `Karan Aujla Aesthetic Wall Poster Set 
       (4x6 Inch, 18 Pieces) 
        Unframed GenZ Room Decor 
        Aesthetic`
    },


       {
        id: "poster2",
        category: "posters",
        name: "Seedhe Maut",
        price: 200,
        image: "poster2.jpeg",
        description: `Seedhe Maut Aesthetic Wall Poster Combo
         (Set of 18) 
          Premium Hip-Hop Wall Decor 
         Trending`
    },



       {
        id: "poster3",
        category: "posters",
        name: "Prem Dhillon",
        price: 200,
        image: "poster3.jpeg",
        description: `Prem Dhillon Aesthetic Wall Poster Combo
         (Set of 18) 
         Punjabi Singer Photo Prints for Room Decor 
        (4x6 Inch, Unframed)`
    },

    
    {
        id: "poster4",
        category: "posters",
        name: "Navaan Sandhu ",
        price: 200,
        image: "poster4.jpeg",
        description: `Navaan Sandhu Aesthetic Wall Poster Combo 
        (Set of 18) 
         4x6 Inch Punjabi Singer Decor`
    },


    
    {
        id: "poster5",
        category: "posters",
        name: " Trippy Aesthetic",
        price: 200,
        image: "poster5.jpeg",
        description: `18 Pcs Trippy Aesthetic Wall Posters
         4x6 Inch 
          Psychedelic Room Decor Set 
         Cool Art Prints for Bedroom & Living Room`
    },


    {
        id: "poster6",
        category: "posters",
        name: "Diljit Dosanjh ",
        price: 200,
        image: "poster6.jpeg",
        description: `Diljit Dosanjh Aesthetic Poster Set 
         4x6 Inch (Set of 18) 
          Room Decor 
         Trending`
    },

    {
        id: "poster7",
        category: "posters",
        name: "Yo Yo Honey Singh",
        price: 200,
        image: "poster7.jpeg",
        description: `Yo Yo Honey Singh Poster Combo Set 
         4x6 Inch Wall Decor Collection 
         Set of 18 Unframed Posters 
          Aesthetic 
         Trending | Room Decor`
    },
    {
        id: "poster8",
        category: "posters",
        name: "Talwinder",
        price: 200,
        image: "poster8.jpeg",
        description: `Talwinder Aesthetic Poster Combo Set 
         18 PCS 
          4x6 Inch Music Wall Collage for Room Décor 
         Trending | Viral`
    },


    {
        id: "poster9",
        category: "posters",
        name: "Anuv Jain",
        price: 200,
        image: "poster9.jpeg",
        description: `Anuv Jain Aesthetic Poster Combo Set 
        18 PCS 
         4x6 Inch Music Wall Collage Room Décor 
        Trending | Aesthetic`
    },

      {
        id: "poster10",
        category: "posters",
        name: "Arjan Dhillon",
        price: 200,
        image: "poster10.jpeg",
        description: `Arjan Dhillon 4x6 Inch Poster Set of 18 
        Punjabi Singer Aesthetic Wall Posters Combo 
         Room Decor Posters 
         Trending (Arjan 2)`
    },

    {
        id: "poster11",
        category: "posters",
        name: "Nusrat Fateh Ali Khan",
        price: 200,
        image: "poster11.jpeg",
        description: `Nusrat Fateh Ali Khan 
        4x6 Inch Poster Set of 18 
         NFAK Aesthetic Wall Posters Combo 
          Qawwali Music Room Decor 
         Trending | Viral`
    },




    {
        id: "poster-1",
        category: "posters",
        name: "Anime Poster",
        price: 200,
        image: "images/poster1.jpg",
        description: "High-quality anime poster for your room."
    },

    {
        id: "poster",
        category: "posters",
        name: "",
        price: 200,
        image: ".jpeg",
        description: ``
    },


    /* ---------- TOTE BAGS ---------- */

    {
        id: "tote-1",
        category: "tote-bags",
        name: "Classic Tote Bag",
        price: 399,
        image: "images/tote1.jpg",
        description: "Durable and stylish everyday tote bag."
    },

    {
        id: "tote-2",
        category: "tote-bags",
        name: "Printed Tote Bag",
        price: 449,
        image: "images/tote2.jpg",
        description: "Trendy printed tote bag."
    },


    /* ---------- FROSTED MUGS ---------- */

    {
        id: "mug-1",
        category: "frosted-mugs",
        name: "Classic Frosted Mug",
        price: 349,
        image: "images/mug1.jpg",
        description: "Premium frosted mug with a clean design."
    },

    {
        id: "mug-2",
        category: "frosted-mugs",
        name: "Custom Frosted Mug",
        price: 399,
        image: "images/mug2.jpg",
        description: "Stylish frosted mug for your desk."
    },


    /* ---------- CAR HANGINGS ---------- */

    {
        id: "car-1",
        category: "car-hangings",
        name: "Anime Car Hanging",
        price: 199,
        image: "images/car1.jpg",
        description: "Premium car hanging with an attractive design."
    },

    {
        id: "car-2",
        category: "car-hangings",
        name: "Minimal Car Hanging",
        price: 179,
        image: "images/car2.jpg",
        description: "Simple and stylish car hanging."
    }
];

const CATEGORY_NAMES = {
  "posters": "Posters",
  "tote-bags": "Tote Bags",
  "frosted-mugs": "Frosted Mugs",
  "car-hangings": "Car Hangings"
};

const BASE_PINCODE = "147001";
const PAYMENT_UPI_ID = "coder4454@oksbi";
const EMAIL_TO = "coder4454@gmail.com";

/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return Number(value || 0).toLocaleString("en-IN");
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function initSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const productsToggle = document.getElementById("productsToggle");
  const productMenu = document.getElementById("productMenu");

  function closeMenu() {
    sidebar?.classList.remove("open");
    overlay?.classList.remove("show");
  }

  menuBtn?.addEventListener("click", () => {
    sidebar?.classList.add("open");
    overlay?.classList.add("show");
  });

  closeBtn?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);

  productsToggle?.addEventListener("click", () => {
    productMenu?.classList.toggle("open");
  });

  document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

/* =========================================================
   CART
   ========================================================= */

function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem("printacleCart") || "[]");
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("printacleCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce(
    (sum, item) => sum + Math.max(0, Number(item.quantity) || 0),
    0
  );

  document.querySelectorAll("#cartCount, .cart-count").forEach(el => {
    el.textContent = count;
  });
}

function addToCart(product, quantity = 1) {
  if (!product) return;

  quantity = Math.max(1, parseInt(quantity, 10) || 1);

  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity = Math.max(1, Number(existing.quantity) || 1) + quantity;
  } else {
    cart.push({
      id: product.id,
      category: product.category,
      name: product.name,
      price: Number(product.price) || 0,
      image: product.image || "",
      description: product.description || "",
      quantity
    });
  }

  saveCart(cart);
}

/* =========================================================
   PRODUCT PAGE
   ========================================================= */

function makeProductCard(product) {
  const card = document.createElement("article");
  card.className = "shop-product-card";

  card.innerHTML = `
    <button class="product-image-button" type="button" aria-label="View ${escapeHTML(product.name)}">
      <img
        src="${escapeHTML(product.image || "")}"
        alt="${escapeHTML(product.name)}"
        class="shop-product-image"
      >
      <span class="image-fallback">${escapeHTML(product.name)}</span>
    </button>

    <div class="shop-product-info">
      <div>
        <h3>${escapeHTML(product.name)}</h3>
        <p>₹${money(product.price)}</p>
      </div>
      <button class="quick-add" type="button">Add +</button>
    </div>
  `;

  const image = card.querySelector(".shop-product-image");
  const imageButton = card.querySelector(".product-image-button");
  const addButton = card.querySelector(".quick-add");

  image.addEventListener("error", () => {
    image.style.display = "none";
    imageButton.classList.add("image-missing");
  });

  imageButton.addEventListener("click", () => openProductModal(product));

  addButton.addEventListener("click", event => {
    event.stopPropagation();
    addToCart(product, 1);
    addButton.textContent = "Added ✓";
    setTimeout(() => {
      addButton.textContent = "Add +";
    }, 900);
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

  if (!Object.values(grids).some(Boolean)) return;

  const selectedCategory =
    new URLSearchParams(window.location.search).get("category");

  Object.entries(grids).forEach(([category, grid]) => {
    if (!grid) return;

    const section = document.querySelector(
      `.category-window[data-category="${category}"]`
    );

    const products = PRINTACLE_PRODUCTS.filter(
      product => product.category === category
    );

    grid.innerHTML = "";

    products.forEach(product => {
      grid.appendChild(makeProductCard(product));
    });

    const count = document.querySelector(
      `[data-count="${category}"]`
    );

    if (count) {
      count.textContent =
        `${products.length} product${products.length === 1 ? "" : "s"}`;
    }

    // A category link shows ONLY that category window.
    // Without a category parameter, all four windows remain visible.
    if (section) {
      section.style.display =
        selectedCategory && selectedCategory !== category
          ? "none"
          : "";
    }
  });
}

/* =========================================================
   PRODUCT MODAL
   ========================================================= */

let selectedProduct = null;
let selectedQuantity = 1;

function openProductModal(product) {
  selectedProduct = product;
  selectedQuantity = 1;

  const modal = document.getElementById("productModal");
  if (!modal) return;

  const category = document.getElementById("modalCategory");
  const name = document.getElementById("modalName");
  const description = document.getElementById("modalDescription");
  const price = document.getElementById("modalPrice");
  const quantity = document.getElementById("modalQuantity");
  const message = document.getElementById("addedMessage");
  const image = document.getElementById("modalImage");
  const fallback = document.getElementById("modalFallback");

  if (category) category.textContent = CATEGORY_NAMES[product.category] || "";
  if (name) name.textContent = product.name;
  if (description) description.textContent = product.description || "";
  if (price) price.textContent = money(product.price);
  if (quantity) quantity.textContent = "1";
  if (message) message.textContent = "";

  if (image) {
    image.style.display = "block";
    image.src = product.image || "";
    image.alt = product.name;
    image.onerror = () => {
      image.style.display = "none";
      if (fallback) {
        fallback.textContent = product.name;
        fallback.style.display = "grid";
      }
    };
  }

  if (fallback) {
    fallback.textContent = product.name;
    fallback.style.display = "none";
  }

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
  selectedQuantity = 1;
}

function initProductModal() {
  document.getElementById("modalClose")
    ?.addEventListener("click", closeProductModal);

  document.getElementById("modalBackdrop")
    ?.addEventListener("click", closeProductModal);

  document.getElementById("modalMinus")
    ?.addEventListener("click", () => {
      if (selectedQuantity > 1) {
        selectedQuantity--;
        const q = document.getElementById("modalQuantity");
        if (q) q.textContent = selectedQuantity;
      }
    });

  document.getElementById("modalPlus")
    ?.addEventListener("click", () => {
      selectedQuantity++;
      const q = document.getElementById("modalQuantity");
      if (q) q.textContent = selectedQuantity;
    });

  document.getElementById("modalAdd")
    ?.addEventListener("click", () => {
      if (!selectedProduct) return;

      addToCart(selectedProduct, selectedQuantity);

      const message = document.getElementById("addedMessage");
      if (message) {
        message.textContent =
          `${selectedQuantity} × ${selectedProduct.name} added to cart ✓`;
      }

      setTimeout(closeProductModal, 700);
    });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeProductModal();
  });
}

/* =========================================================
   CART PAGE
   ========================================================= */

function renderCartPage() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const cart = getCart();
  const totalElement = document.getElementById("cartTotal");
  const buyButton = document.getElementById("purchaseButton");

  container.innerHTML = "";

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
        <a href="product.html">Explore products →</a>
      </div>
    `;

    if (totalElement) totalElement.textContent = "0";
    if (buyButton) buyButton.disabled = true;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const quantity = Math.max(1, Number(item.quantity) || 1);
    const price = Number(item.price) || 0;
    const lineTotal = price * quantity;
    total += lineTotal;

    const row = document.createElement("div");
    row.className = "cart-row";

    row.innerHTML = `
      <div class="cart-product">
        <div class="cart-thumb">
          <img
            src="${escapeHTML(item.image || "")}"
            alt="${escapeHTML(item.name)}"
          >
          <span>${escapeHTML(item.name)}</span>
        </div>

        <div>
          <h3>${escapeHTML(item.name)}</h3>
          <p>₹${money(price)} each</p>
        </div>
      </div>

      <div class="cart-controls">
        <div class="quantity-control">
          <button type="button" data-action="minus" aria-label="Decrease quantity">−</button>
          <span>${quantity}</span>
          <button type="button" data-action="plus" aria-label="Increase quantity">+</button>
        </div>

        <strong>₹${money(lineTotal)}</strong>

        <button type="button" class="remove-cart" data-action="remove">
          Remove
        </button>
      </div>
    `;

    const img = row.querySelector(".cart-thumb img");
    img.addEventListener("error", () => {
      img.style.display = "none";
      row.querySelector(".cart-thumb").classList.add("image-missing");
    });

    row.querySelector('[data-action="minus"]')
      .addEventListener("click", () => changeCartQuantity(index, -1));

    row.querySelector('[data-action="plus"]')
      .addEventListener("click", () => changeCartQuantity(index, 1));

    row.querySelector('[data-action="remove"]')
      .addEventListener("click", () => removeCartItem(index));

    container.appendChild(row);
  });

  if (totalElement) totalElement.textContent = money(total);

  if (buyButton) {
    buyButton.disabled = false;
    buyButton.onclick = () => {
      window.location.href = "checkout.html";
    };
  }
}

function changeCartQuantity(index, amount) {
  const cart = getCart();
  if (!cart[index]) return;

  cart[index].quantity =
    Math.max(0, Number(cart[index].quantity) + amount);

  if (cart[index].quantity === 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCartPage();
}

function removeCartItem(index) {
  const cart = getCart();
  if (!cart[index]) return;

  cart.splice(index, 1);
  saveCart(cart);
  renderCartPage();
}

/* =========================================================
   CHECKOUT
   ========================================================= */

function getCheckoutSubtotal() {
  return getCart().reduce(
    (sum, item) =>
      sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  );
}

/*
   Delivery slabs:
   0-50 km       = ₹50
   >50-200 km    = ₹70
   >200-400 km  = ₹100
   >400-500 km  = ₹150
   >500 km       = ₹200

   The distance is NEVER shown to the customer.
*/

function getDeliveryCharge(distance) {
  const d = Number(distance);

  if (!Number.isFinite(d) || d < 0) return null;
  if (d <= 50) return 50;
  if (d <= 200) return 70;
  if (d <= 400) return 100;
  if (d <= 500) return 150;
  return 200;
}

function updateCheckoutTotal(deliveryCharge = 0) {
  const subtotal = getCheckoutSubtotal();
  const total = subtotal + Number(deliveryCharge || 0);

  const totalEl = document.getElementById("checkoutTotal");
  const deliveryEl = document.getElementById("deliveryCharge");

  if (totalEl) totalEl.textContent = money(total);

  if (deliveryEl) {
    deliveryEl.textContent =
      deliveryCharge > 0
        ? `₹${money(deliveryCharge)}`
        : "Calculated after pincode";
  }

  return total;
}

function renderCheckoutSummary() {
  const container = document.getElementById("checkoutItems");
  if (!container) return;

  const cart = getCart();

  if (!cart.length) {
    window.location.href = "product.html";
    return;
  }

  container.innerHTML = cart.map(item => {
    const lineTotal =
      (Number(item.price) || 0) * (Number(item.quantity) || 0);

    return `
      <div class="checkout-item">
        <span>${escapeHTML(item.name)} × ${Number(item.quantity) || 1}</span>
        <b>₹${money(lineTotal)}</b>
      </div>
    `;
  }).join("");

  updateCheckoutTotal(0);
}

async function getPincodeLocation(pincode) {
  const response = await fetch(
    `https://api.zippopotam.us/in/${encodeURIComponent(pincode)}`
  );

  if (!response.ok) {
    throw new Error("Pincode not found");
  }

  const data = await response.json();

  if (!data.places || !data.places.length) {
    throw new Error("Pincode location unavailable");
  }

  return {
    latitude: Number(data.places[0].latitude),
    longitude: Number(data.places[0].longitude)
  };
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(a));
}

let calculatedDistance = null;
let calculatedDeliveryCharge = null;

async function calculateDeliveryCharge() {
  const pincodeInput = document.getElementById("customerPincode");
  const result = document.getElementById("distanceResult");
  const button = document.getElementById("distanceButton");

  if (!pincodeInput || !result) return;

  const pincode = pincodeInput.value.trim();

  if (!/^\d{6}$/.test(pincode)) {
    calculatedDistance = null;
    calculatedDeliveryCharge = null;

    result.className = "distance-result error";
    result.textContent = "Please enter a valid 6-digit Indian pincode.";

    updateCheckoutTotal(0);
    return;
  }

  if (button) {
    button.disabled = true;
    button.textContent = "Calculating...";
  }

  result.className = "distance-result";
  result.textContent = "Calculating delivery charge...";

  try {
    const [origin, destination] = await Promise.all([
      getPincodeLocation(BASE_PINCODE),
      getPincodeLocation(pincode)
    ]);

    const distance = haversineDistance(
      origin.latitude,
      origin.longitude,
      destination.latitude,
      destination.longitude
    );

    const charge = getDeliveryCharge(distance);

    if (charge === null) {
      throw new Error("Could not determine delivery charge");
    }

    calculatedDistance = distance;
    calculatedDeliveryCharge = charge;

    // IMPORTANT: distance is deliberately hidden.
    result.className = "distance-result success";
    result.innerHTML = `
      <strong>Delivery charge: ₹${money(charge)}</strong>
      <span>Delivery charge has been added to your order.</span>
    `;

    updateCheckoutTotal(charge);

    const paymentBox = document.getElementById("paymentBox");
    if (paymentBox) paymentBox.hidden = true;

  } catch (error) {
    console.error(error);

    calculatedDistance = null;
    calculatedDeliveryCharge = null;

    result.className = "distance-result error";
    result.textContent =
      "We could not find that pincode. Please check it and try again.";

    updateCheckoutTotal(0);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = "Calculate delivery charge";
    }
  }
}

function buildUpiLink(total, customerName, pincode) {
  const params = new URLSearchParams({
    pa: PAYMENT_UPI_ID,
    pn: "Printacle",
    am: Number(total).toFixed(2),
    cu: "INR",
    tn: `Printacle Order - ${customerName} - ${pincode}`
  });

  return `upi://pay?${params.toString()}`;
}

/*
   Sends a notification when the customer clicks
   "Continue to payment".

   This is NOT a secure payment confirmation.
   The browser cannot verify a successful UPI payment
   from a simple UPI deep link.
*/

async function sendOrderEmail(order) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${EMAIL_TO}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `New Printacle payment initiated - ₹${order.total}`,
        _template: "table",

        "Order ID": order.orderId,
        "Customer Name": order.customer.name,
        "Mobile": order.customer.phone,

        "Address":
          `${order.customer.address}, ${order.customer.city}, ` +
          `${order.customer.state} - ${order.customer.pincode}`,

        "Items": order.items
          .map(item => `${item.name} × ${item.quantity}`)
          .join(", "),

        "Product Subtotal": `₹${order.subtotal}`,
        "Delivery Charge": `₹${order.deliveryCharge}`,
        "Order Total": `₹${order.total}`,

        "Payment UPI ID": PAYMENT_UPI_ID,

        // Kept in email only for your internal order record.
        "Distance Used Internally":
          `${Number(order.distanceKm).toFixed(1)} km`,

        "Order Time": order.createdAt
      })
    }
  );

  if (!response.ok) {
    throw new Error("Email notification failed");
  }

  return response.json();
}

function resetCheckoutCalculation() {
  calculatedDistance = null;
  calculatedDeliveryCharge = null;

  const result = document.getElementById("distanceResult");
  if (result) {
    result.className = "distance-result";
    result.textContent = "";
  }

  const paymentBox = document.getElementById("paymentBox");
  if (paymentBox) paymentBox.hidden = true;

  updateCheckoutTotal(0);
}

async function handleCheckoutSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("customerName")?.value.trim() || "";
  const phone = document.getElementById("customerPhone")?.value.trim() || "";
  const address = document.getElementById("customerAddress")?.value.trim() || "";
  const city = document.getElementById("customerCity")?.value.trim() || "";
  const state = document.getElementById("customerState")?.value.trim() || "";
  const pincode = document.getElementById("customerPincode")?.value.trim() || "";

  if (!name || !address || !city || !state) {
    alert("Please fill in all delivery details.");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (!/^\d{6}$/.test(pincode)) {
    alert("Please enter a valid 6-digit pincode.");
    return;
  }

  if (calculatedDeliveryCharge === null) {
    alert("Please calculate the delivery charge before continuing to payment.");
    return;
  }

  const cart = getCart();

  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  const subtotal = getCheckoutSubtotal();
  const deliveryCharge = calculatedDeliveryCharge;
  const total = subtotal + deliveryCharge;

  const order = {
    orderId: `PR${Date.now()}`,

    customer: {
      name,
      phone,
      address,
      city,
      state,
      pincode
    },

    items: cart,
    subtotal,
    deliveryCharge,
    total,

    basePincode: BASE_PINCODE,
    distanceKm: calculatedDistance,
    paymentUpiId: PAYMENT_UPI_ID,
    createdAt: new Date().toLocaleString("en-IN")
  };

  localStorage.setItem(
    "printacleDelivery",
    JSON.stringify(order)
  );

  const continueButton =
    document.getElementById("continuePayment");

  if (continueButton) {
    continueButton.disabled = true;
    continueButton.textContent = "Preparing payment...";
  }

  // Email is sent when the customer decides to proceed to payment.
  // Payment itself is opened after the email attempt.
  try {
    await sendOrderEmail(order);
  } catch (error) {
    console.warn("Order email could not be sent:", error);
    // Do not block the customer's payment because of an email failure.
  }

  const upiLink =
    buildUpiLink(total, name, pincode);

  const paymentBox =
    document.getElementById("paymentBox");

  const paymentAmount =
    document.getElementById("paymentAmount");

  const paymentLink =
    document.getElementById("paymentLink");

  if (paymentBox && paymentAmount && paymentLink) {
    paymentAmount.textContent = `₹${money(total)}`;
    paymentLink.href = upiLink;
    paymentBox.hidden = false;

    paymentBox.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  } else {
    // Fallback if the payment UI is not present.
    window.location.href = upiLink;
  }

  if (continueButton) {
    continueButton.disabled = false;
    continueButton.textContent = "Continue to payment →";
  }
}

/* =========================================================
   CHECKOUT EVENTS
   ========================================================= */

function initCheckout() {
  const form = document.getElementById("addressForm");
  const distanceButton = document.getElementById("distanceButton");
  const pincode = document.getElementById("customerPincode");

  if (!form) return;

  distanceButton?.addEventListener(
    "click",
    calculateDeliveryCharge
  );

  pincode?.addEventListener(
    "input",
    resetCheckoutCalculation
  );

  form.addEventListener(
    "submit",
    handleCheckoutSubmit
  );

  renderCheckoutSummary();
}

/* =========================================================
   START
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initProductModal();

  updateCartCount();
  renderProductPage();
  renderCartPage();
  initCheckout();
});
