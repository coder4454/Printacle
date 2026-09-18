PRINTACLE - CORRECTED PROJECT

Files:
- index.html
- product.html
- cart.html
- checkout.html
- printacle.css
- printacle.js

Main fixes:
1. JavaScript selectors now match the uploaded HTML IDs.
2. Product page renders all products into the correct category window.
3. Category links show only their selected category.
4. Product modal opens correctly.
5. Quantity + / - works.
6. Add to Cart works and persists in localStorage.
7. Cart quantity, remove, total and Buy button work.
8. Checkout uses the actual customer field IDs.
9. Delivery charge:
   <=50 km: ₹50
   <=200 km: ₹70
   <=400 km: ₹100
   <=500 km: ₹150
   >500 km: ₹200
10. Distance is calculated internally and is NOT shown to the customer.
11. UPI link uses coder4454@oksbi and the final bill amount.
12. Email notification is sent to coder4454@gmail.com when the customer clicks Continue to payment, using FormSubmit.

IMPORTANT:
- FormSubmit may require first-time email confirmation/activation.
- A UPI deep link can open a UPI app with the amount filled in, but frontend JavaScript cannot securely confirm that payment was actually successful.
- For production payment verification, use a payment gateway/backend with a webhook.
- Product images referenced in printacle.js must exist in the same project folder (or the paths should be changed to your actual image files).

To add a product, add another object inside PRINTACLE_PRODUCTS in printacle.js:
{
  id: "poster-4",
  category: "posters",
  name: "My Poster",
  price: 599,
  image: "poster4.png",
  description: "My poster description"
}
Use only:
posters
tote-bags
frosted-mugs
car-hangings
