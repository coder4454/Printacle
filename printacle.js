const sidebar=document.getElementById("sidebar"),overlay=document.getElementById("overlay");
document.getElementById("menuBtn")?.addEventListener("click",()=>{sidebar.classList.add("open");overlay.classList.add("show")});
document.getElementById("closeBtn")?.addEventListener("click",closeMenu);overlay?.addEventListener("click",closeMenu);
function closeMenu(){sidebar.classList.remove("open");overlay.classList.remove("show")}
document.getElementById("productsToggle")?.addEventListener("click",()=>document.getElementById("productMenu").classList.toggle("open"));
function updateCart(){const c=JSON.parse(localStorage.getItem("printacleCart")||"[]");const n=c.reduce((s,x)=>s+x.quantity,0);document.querySelectorAll("#cartCount").forEach(e=>e.textContent=n)}
updateCart();
