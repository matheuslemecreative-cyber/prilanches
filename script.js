
// ==========================================
// PRI LANCHES - SCRIPT COMPLETO
// ==========================================

const PHONE = "5514996707198";
const CART_KEY = "pri_lanches_carrinho_v3";

const money = n => Number(n).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

// ==========================================
// CARDÁPIO
// Formato:
// [nome, preço, descrição, imagem]
// ==========================================

const menu = [
  {
    id: "burgers",
    title: "Burgers Artesanais",
    items: [
      ["X-Burguer",24,"Hambúrguer artesanal, presunto, queijo e molhos.","burgers.jpg"],
      ["Bauru",24,"Hambúrguer artesanal, presunto, queijo, tomate, maionese e ketchup.","burgers1.jpg"],
      ["X-Salada",25,"Hambúrguer artesanal, presunto, queijo, tomate, alface, maionese e ketchup.","burgers2.jpg"],
      ["X-Burguer Cheddar",27,"Hambúrguer artesanal, presunto, queijo, cheddar, maionese e ketchup.","burgers3.jpg"],
      ["X-Salada Cheddar",28,"Hambúrguer artesanal, presunto, queijo, cheddar, tomate, alface, maionese e ketchup.","burgers3.jpg"],
      ["X-Bacon",29,"Hambúrguer artesanal, bacon, presunto, queijo, tomate, alface, maionese e ketchup.","burgers4.jpg"],
      ["X-Calabresa",29,"Hambúrguer artesanal, calabresa, presunto, queijo, tomate, alface, maionese e ketchup.","burgers5.jpg"],
      ["Calabacon",35,"Hambúrguer artesanal, calabresa, bacon, presunto, queijo, tomate, alface, maionese e ketchup.","burgers5.jpg"],
      ["X-Egg",30,"Hambúrguer artesanal, presunto, queijo, ovo, tomate, alface, batata palha e molho.","burgers6.jpg"],
      ["X-Tudo",38,"Hambúrguer artesanal, calabresa, bacon, salsicha, ovo, presunto, queijo, catupiry, tomate, alface, maionese e ketchup.","burgers7.jpg"],
      ["Galinhão",38,"Hambúrguer artesanal, frango, calabresa, bacon, ovo, presunto, queijo, catupiry, tomate, alface, maionese e ketchup.","burgers8.jpg"],
      ["X-Tudão",42,"Hambúrguer artesanal, frango, calabresa, bacon, salsicha, ovo, presunto, queijo, catupiry, tomate, alface, maionese e ketchup.","burgers7.jpg"],
      ["Lanche da Casa",42,"Hambúrguer artesanal, presunto e queijo em dobro, 2 salsichas, milho, batata palha, bacon, calabresa, ovo, vinagrete, alface, tomate e molhos.","burgers2.jpg"],
      ["Duplo",45,"2 hambúrgueres artesanais, frango, calabresa, bacon, 2 salsichas, ovo, presunto, queijo, catupiry, tomate, alface, maionese e ketchup.","burgers2.jpg"]
    ]
  },

  {
    id: "hot-dogs",
    title: "Hot Dogs",
    items: [
      ["Hot Dog Simples",20,"1 salsicha, batata palha, ketchup, maionese, mostarda e vinagrete.","hotdog1.jpg"],
      ["Hot Dog Especial",22,"1 salsicha, batata palha, ketchup, maionese, mostarda, presunto e queijo.","hotdog.jpg"],
      ["Hot Dog Duplo",24,"2 salsichas, batata palha, ketchup, maionese, mostarda e vinagrete.","hotdog2.jpg"],
      ["Hot Dog Cheddar",29,"1 salsicha, batata palha, ketchup, maionese, vinagrete, bacon e cheddar.","hotdog3.jpg"],
      ["Hot Dog Catupiry",29,"1 salsicha, batata palha, ketchup, maionese, vinagrete, bacon e catupiry.","hotdog.jpg"],
      ["Hot Dog Cachorrão",32,"2 salsichas, batata palha, ketchup, maionese, mostarda, presunto e queijo.","hotdog.jpg"],
      ["Hot Dog Tudo",34,"1 salsicha, batata palha, ketchup, mostarda, maionese, vinagrete, bacon, catupiry, frango desfiado, calabresa, cheddar, presunto e queijo.","hotdog3.jpg"]
    ]
  },


{
  id: "combo-explodiu",
  title: "Combo Explodiu",
  items: [
    [
      "Combo Explodiu",
      65,
      "1 lanche à escolha (X-Salada, X-Bacon, X-Burguer, X-Calabresa ou X-Egg) + batata 250g com bacon, cheddar e catupiry + açaí 180ml + Guaraná Antarctica 350ml.",
      "explodiu2.png"
    ]
  ]
},

{
  id: "combos-individuais",
  title: "Combos Individuais",
  items: [
    [
      "Combo Individual X-Salada",
      39.90,
      "1 X-Salada + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Bacon",
      44.90,
      "1 X-Bacon + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Egg",
      45.90,
      "1 X-Egg + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Burguer",
      39.90,
      "1 X-Burguer + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Calabresa",
      44.90,
      "1 X-Calabresa + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Tudão",
      52.00,
      "1 X-Tudão + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual Galinhão",
      49.90,
      "1 Galinhão + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual Calabacon",
      49.90,
      "1 Calabacon + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Burguer Cheddar",
      42.90,
      "1 X-Burguer Cheddar + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Cachorrão",
      44.90,
      "1 X-Cachorrão + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Tudo",
      49.90,
      "1 X-Tudo + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ],
    [
      "Combo Individual X-Salada Cheddar",
      42.90,
      "1 X-Salada Cheddar + batata frita com bacon e cheddar.",
      "combo-individual1.png"
    ]
  ]
},


  {
    id: "combos-casal",
    title: "Combos Duplos",
    items: [
      ["Combo Duplos Hot Dog Simples",85,"2 Hot Dogs Simples + fritas com bacon e cheddar.","combos2.jpg"],
      ["Combo Duplos X-Salada",90,"2 X-Salada + fritas com bacon, cheddar e catupiry.","combos1.jpg"],
      ["Combo Duplos X-Burguer",90,"2 X-Burguer + fritas com bacon e cheddar.","combos2.jpg"],
      ["Combo Duplos Hot Dog Especial",90,"2 Hot Dogs Especiais + fritas com bacon, cheddar e catupiry.","combos1.jpg"],
      ["Combo Duplos X-Egg",95,"2 X-Egg + fritas com bacon, cheddar e catupiry.","combos2.jpg"],
      ["Combo Duplos X-Bacon",95,"2 X-Bacon + fritas com bacon, cheddar e catupiry.","combos1.jpg"],
      ["Combo Duplos Calabresa",95,"2 lanches de calabresa + fritas com bacon e cheddar.","combos2.jpg"],
      ["Combo Duplos X-Tudo",110,"2 X-Tudo + fritas com bacon, cheddar e catupiry.","combos2.jpg"]
    ]
  },

  {
    id: "combos-familia",
    title: "Combos Família",
    items: [
      ["Combo Hot Dog Simples (4 Un.)",95,"4 Hot Dogs Simples + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Misto",95,"4 mistos quentes + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Bauru",100,"4 Bauru + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo X-Salada Cheddar",125,"4 X-Salada Cheddar + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Família X-Burguer",105,"4 X-Burguer + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Hot Dog Especial (4 Un.)",105,"4 Hot Dogs Especiais + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Americano",105,"4 lanches Americanos + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Família X-Salada",115,"4 X-Salada + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Família X-Bacon",125,"4 X-Bacon + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Família X-Calabresa",125,"4 X-Calabresa + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Cachorrão",125,"4 Cachorrões + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Família X-Egg",125,"4 X-Egg + fritas com bacon, cheddar e catupiry.","combos3.jpg"],
      ["Combo Família X-Tudo",175,"4 X-Tudo + fritas com bacon, cheddar e catupiry.","combos3.jpg"]
    ]
  },

  {
    id: "porcoes",
    title: "Porções",
    items: [
      ["Fritas c/ Bacon e Cheddar 300g",30,"Batata frita crocante (300g) servida com bacon e cheddar.","porcoes.jpg"],
      ["Fritas c/ Bacon e Cheddar 700g",55,"Batata frita crocante (600g) servida com bacon e cheddar.","porcoes1.jpg"],
    ]
  },

  {
    id: "brotos",
    title: "Brotos de Pizza",
    items: [
      ["Broto Frango com Queijo",22,"Broto de pizza com frango e queijo.",""],
      ["Broto Pizza",22,"Broto de pizza sabor pizza.",""],
      ["Broto Calabresa com Queijo e Catupiry",22,"Calabresa, queijo e catupiry.",""],
      ["Broto Frango com Catupiry e Milho",22,"Frango, catupiry e milho.",""],
      ["Broto Bacon com Queijo e Brócolis",22,"Bacon, queijo e brócolis.",""],
      ["Broto Brócolis com Queijo, Catupiry e Presunto",22,"Brócolis, queijo, catupiry e presunto.",""],
      ["Broto Só Queijo",22,"Broto de pizza recheado com queijo.",""],
      ["Broto de Queijo",22,"Broto de pizza de queijo.",""]
    ]
  },

  {
    id: "pasteis",
    title: "Pastéis Salgados",
    items: [
      ["Pastel Pizza",20,"Pastel crocante sabor pizza.",""],
      ["Pastel Carne com Queijo",20,"Carne e queijo.",""],
      ["Pastel Frango com Queijo",20,"Frango desfiado e queijo.",""],
      ["Pastel Frango com Catupiry",20,"Frango desfiado e catupiry.",""],
      ["Pastel Só Queijo",20,"Recheio de queijo.",""],
      ["Pastel Calabresa com Queijo",20,"Calabresa e queijo.",""],
      ["Pastel X-Tudo",30,"Carne, queijo, presunto, frango, calabresa, catupiry e bacon.",""]
    ]
  },

  {
    id: "pasteis-doces",
    title: "Pastéis Doces",
    items: [
      ["Pastel de Chocolate",20,"Pastel doce recheado com chocolate.",""],
      ["Pastel Nutella com Morango",28,"Pastel doce com Nutella e morango.",""]
    ]
  },

  {
    id: "acai",
    title: "Açaí",
    items: [
      ["Açaí 350ml",26,"Monte do seu jeito! Até 1 adicional comum grátis.","acai1.jpg"],
      ["Açaí 550ml",33,"Monte do seu jeito! Até 1 adicional comum grátis.","acai2.jpg"],
      ["Combo Açaí 1",32,"Açaí 350ml com 4 adicionais comuns inclusos.","acai1.jpg"],
      ["Combo Açaí 2",38,"Açaí 550ml com 2 adicionais comuns e 1 premium inclusos.","acai2.jpg"]
    ]
  },

  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      ["Coca-Cola Lata",7,"Refrigerante Coca-Cola em lata gelada.","bebidas.jpg"],
      ["Coca-Cola 1 Litro",10,"Garrafa de 1 litro de Coca-Cola gelada.","bebidas1.jpg"],
      ["Coca-Cola 2 Litros",15,"Garrafa de 2 litros de Coca-Cola gelada.","bebidas2.jpg"],
      ["Guaraná 2 Litros",10,"Garrafa de 2 litros de Guaraná gelado.","bebidas3.jpg"],
      ["Suco 300ml",10,"Suco natural no copo de 300ml.","bebidas4.jpg"],
      ["Suco 500ml",15,"Suco natural no copo de 500ml.","bebidas5.jpg"],
      ["Suco Natural com Morango 500ml",18,"Suco natural preparado com morangos frescos.","bebidas6.jpg"],
      ["Suco Del Valle Lata",10,"Suco Del Valle em lata. Vários sabores.","bebidas10.jpg"],
      ["Água Mineral",4,"Garrafa de água mineral.","bebidas11.jpg"]
    ]
  }
];

// ==========================================
// LISTA ÚNICA DE PRODUTOS
// ==========================================

const products = [];
let nextId = 1;

menu.forEach(category => {
  category.items.forEach(item => {
    products.push({
      id: nextId++,
      category: category.id,
      name: item[0],
      price: item[1],
      desc: item[2],
      image: item[3]
    });
  });
});

const productMap = new Map(products.map(p => [p.id, p]));

const escapeHTML = value =>
  String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

// ==========================================
// RENDERIZAÇÃO DO CARDÁPIO
// ==========================================

function renderMenu() {
  const container = document.getElementById("menu-content");
  const sidebar = document.getElementById("sidebar-links");

  container.innerHTML = "";
  sidebar.innerHTML = "";

  menu.forEach(category => {
    const section = document.createElement("section");
    section.id = category.id;
    section.className = "products-section";

    section.innerHTML = `
      <h2 class="section-title">${escapeHTML(category.title)}</h2>
      <p class="section-subtitle">Deslize para o lado e confira as opções →</p>

      <div class="products-container">
        <div class="products-track">
          ${products
            .filter(product => product.category === category.id)
            .map(product => createProductCard(product))
            .join("")}
        </div>
      </div>
    `;

    container.appendChild(section);

    const li = document.createElement("li");
    const link = document.createElement("a");

    link.href = "#" + category.id;
    link.textContent = category.title;

    link.addEventListener("click", closeAllMenus);

    li.appendChild(link);
    sidebar.appendChild(li);
  });
}

function createProductCard(product) {
  const fallback = product.category === "brotos" ? "🍕"
    : product.category === "pasteis" ? "🥟"
    : product.category === "pasteis-doces" ? "🍫"
    : product.category === "acai" ? "🍇"
    : "🍔";

  const image = product.image
    ? `<img
         src="${escapeHTML(product.image)}"
         class="product-img"
         alt="${escapeHTML(product.name)}"
         loading="lazy"
         onerror="this.outerHTML='<div class=\\'product-placeholder\\'>${fallback}</div>'"
       >`
    : `<div class="product-placeholder">${fallback}</div>`;

  return `
    <article class="product-card">
      ${image}

      <div class="product-info">
        <h3 class="product-title">${escapeHTML(product.name)}</h3>
        <p class="product-desc">${escapeHTML(product.desc)}</p>

        <div class="product-footer">
          <span class="product-price">${money(product.price)}</span>

          <button class="order-btn" data-add="${product.id}">
            Peça Já
          </button>
        </div>
      </div>
    </article>
  `;
}

// ==========================================
// MENU LATERAL
// ==========================================

function closeAllMenus() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("cart-sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("menu-btn").classList.remove("active");
  document.getElementById("menu-btn").setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const isOpen = sidebar.classList.contains("active");

  closeAllMenus();

  if (!isOpen) {
    sidebar.classList.add("active");
    document.getElementById("overlay").classList.add("active");
    document.getElementById("menu-btn").classList.add("active");
    document.getElementById("menu-btn").setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }
}

function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const isOpen = sidebar.classList.contains("active");

  closeAllMenus();

  if (!isOpen) {
    sidebar.classList.add("active");
    document.getElementById("overlay").classList.add("active");
    document.body.classList.add("menu-open");
  }
}

// ==========================================
// CARROSSEL DE BANNERS
// ==========================================

let currentSlide = 0;
let slideTimer;
let touchStartX = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
  resetSlideTimer();
}

function prevSlide() {
  showSlide(currentSlide - 1);
  resetSlideTimer();
}

function resetSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 4000);
}

function initCarousel() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.getElementById("carousel-dots");
  const carousel = document.querySelector(".carousel-container");

  slides.forEach((slide, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Mostrar banner ${i + 1}`);

    dot.addEventListener("click", () => {
      showSlide(i);
      resetSlideTimer();
    });

    dots.appendChild(dot);
  });

  showSlide(0);
  resetSlideTimer();

  document.getElementById("next-slide").addEventListener("click", nextSlide);
  document.getElementById("prev-slide").addEventListener("click", prevSlide);

  carousel.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener("touchend", event => {
    const difference = touchStartX - event.changedTouches[0].screenX;

    if (Math.abs(difference) > 50) {
      difference > 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });
}

// ==========================================
// NOTIFICAÇÃO
// ==========================================

let noticeTimer;

function showNotice(message = "⚠️ Imagens ilustrativas.") {
  const toast = document.getElementById("notice-toast");

  clearTimeout(noticeTimer);
  toast.textContent = message;
  toast.classList.add("show");

  noticeTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ==========================================
// CARRINHO COM LOCALSTORAGE
// ==========================================

let cart = [];

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    if (!Array.isArray(saved)) return [];

    return saved.filter(item =>
      item &&
      Number.isInteger(item.id) &&
      productMap.has(item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      item.quantity <= 999 &&
      Number.isFinite(item.price) &&
      item.price >= 0 &&
      typeof item.key === "string"
    );
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // O carrinho continua funcionando sem armazenamento.
  }
}

function addToCart(id, extras = [], observation = "") {
  const product = productMap.get(Number(id));
  if (!product) return;

  const extraPrice = extras.reduce((sum, e) => sum + e.price, 0);
  const price = product.price + extraPrice;

  const key = JSON.stringify([
    product.id,
    extras.map(e => e.name).sort(),
    observation
  ]);

  const existing = cart.find(item => item.key === key);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      price,
      quantity: 1,
      extras,
      observation
    });
  }

  saveCart();
  updateCartUI();
  showNotice(`${product.name} adicionado ao carrinho!`);
}

function changeQuantity(index, change) {
  if (!cart[index]) return;

  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById("cart-items");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const count = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total-price").textContent = money(total);
  document.getElementById("checkout-btn").disabled = count === 0;

  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        Seu carrinho está vazio.<br>
        Adicione seus produtos favoritos!
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${escapeHTML(item.name)}</h4>
        <p>${money(item.price * item.quantity)}</p>

        ${item.extras?.length
          ? `<small>${escapeHTML(item.extras.map(e => e.name).join(", "))}</small>`
          : ""}

        ${item.observation
          ? `<small>${escapeHTML(item.observation)}</small>`
          : ""}
      </div>

      <div class="cart-item-qty">
        <button class="qty-btn" data-index="${index}" data-change="-1">−</button>
        <span>${item.quantity}</span>
        <button class="qty-btn" data-index="${index}" data-change="1">+</button>
      </div>
    </div>
  `).join("");
}

// ==========================================
// PERSONALIZAÇÃO DO AÇAÍ
// ==========================================

const commonExtras = [
  "Leite condensado",
  "Leite Ninho",
  "Granola",
  "M&M's",
  "Fini"
];

const premiumExtras = [
  "Nutella",
  "Morango",
  "Banana",
  "Paçoca",
  "Ovomaltine",
  "Confete"
];

function getAcaiAllowance(product) {
  if (product.name === "Combo Açaí 1") {
    return { common: 4, premium: 0 };
  }

  if (product.name === "Combo Açaí 2") {
    return { common: 2, premium: 1 };
  }

  return { common: 1, premium: 0 };
}

function openAcaiModal(id) {
  const product = productMap.get(Number(id));
  if (!product) return;

  const allowance = getAcaiAllowance(product);

  const overlay = document.createElement("div");
  overlay.className = "acai-overlay";
  overlay.id = "acai-overlay";

  overlay.innerHTML = `
    <div class="acai-modal" role="dialog" aria-modal="true">
      <div class="acai-modal-top">
        <h2>${escapeHTML(product.name)}</h2>
        <button class="close-cart" id="close-acai">&times;</button>
      </div>

      <p>
        Escolha seus adicionais!<br>
        Inclusos: ${allowance.common} comum(ns)
        ${allowance.premium ? `e ${allowance.premium} premium` : ""}.
        <br>Comum extra: R$ 3,00.
        Premium extra: R$ 6,00.
      </p>

      <h3>Adicionais comuns</h3>
      ${commonExtras.map(name => `
        <label class="acai-option">
          <input type="checkbox" data-extra="${escapeHTML(name)}" data-type="common">
          ${escapeHTML(name)}
        </label>
      `).join("")}

      <h3>Adicionais premium</h3>
      ${premiumExtras.map(name => `
        <label class="acai-option">
          <input type="checkbox" data-extra="${escapeHTML(name)}" data-type="premium">
          ${escapeHTML(name)}
        </label>
      `).join("")}

      <div class="acai-modal-total">
        <span>Total:</span>
        <strong id="acai-total">${money(product.price)}</strong>
      </div>

      <button class="checkout-btn" id="confirm-acai">
        Adicionar ao Carrinho
      </button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add("menu-open");

  const selected = () => [...overlay.querySelectorAll("[data-extra]:checked")]
    .map(input => ({
      name: input.dataset.extra,
      type: input.dataset.type
    }));

  const calculateExtras = () => {
    let commonUsed = 0;
    let premiumUsed = 0;

    return selected().map(extra => {
      let price = 0;

      if (extra.type === "common") {
        commonUsed++;
        if (commonUsed > allowance.common) price = 3;
      } else {
        premiumUsed++;
        if (premiumUsed > allowance.premium) price = 6;
      }

      return { ...extra, price };
    });
  };

  overlay.addEventListener("change", () => {
    const extras = calculateExtras();
    const total = product.price + extras.reduce((sum, e) => sum + e.price, 0);
    document.getElementById("acai-total").textContent = money(total);
  });

  const close = () => {
    overlay.remove();
    document.body.classList.toggle(
      "menu-open",
      document.getElementById("overlay").classList.contains("active")
    );
  };

  document.getElementById("close-acai").addEventListener("click", close);

  overlay.addEventListener("click", event => {
    if (event.target === overlay) close();
  });

  document.getElementById("confirm-acai").addEventListener("click", () => {
    const extras = calculateExtras();
    close();
    addToCart(product.id, extras);
  });
}

// ==========================================
// FINALIZAR PEDIDO PELO WHATSAPP
// ==========================================

function checkoutWhatsApp() {
  if (!cart.length) {
    showNotice("Seu carrinho está vazio!");
    return;
  }

  let message = "*NOVO PEDIDO - PRI LANCHES*\n";
  message += "──────────────────────\n\n";

  cart.forEach(item => {
    message += `• *${item.quantity}x ${item.name}*\n`;

    if (item.extras?.length) {
      message += `  Adicionais: ${item.extras.map(e => e.name).join(", ")}\n`;
    }

    if (item.observation) {
      message += `  Observação: ${item.observation}\n`;
    }

    message += `  Subtotal: ${money(item.price * item.quantity)}\n\n`;
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  message += "──────────────────────\n";
  message += `*TOTAL DOS PRODUTOS: ${money(total)}*\n\n`;

  const notes = document.getElementById("order-notes").value.trim();

  if (notes) {
    message += `*OBSERVAÇÕES DO PEDIDO:*\n${notes}\n\n`;
  }

  message += "Por favor, informe seu endereço completo e a forma de pagamento.\n";
  message += "Aguardando confirmação da taxa de entrega e disponibilidade.";

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  cart = loadCart();

  renderMenu();
  initCarousel();
  updateCartUI();

  document.getElementById("menu-btn").addEventListener("click", toggleMenu);
  document.getElementById("cart-button").addEventListener("click", toggleCart);
  document.getElementById("close-menu").addEventListener("click", closeAllMenus);
  document.getElementById("close-cart").addEventListener("click", closeAllMenus);
  document.getElementById("overlay").addEventListener("click", closeAllMenus);
  document.getElementById("checkout-btn").addEventListener("click", checkoutWhatsApp);

  document.getElementById("menu-content").addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (!button) return;

    const product = productMap.get(Number(button.dataset.add));
    if (!product) return;

    if (product.category === "acai") {
      openAcaiModal(product.id);
      return;
    }

    addToCart(product.id);

    button.classList.add("added");
    button.textContent = "✓ Adicionado";

    setTimeout(() => {
      if (!button.isConnected) return;
      button.classList.remove("added");
      button.textContent = "Peça Já";
    }, 1000);
  });

  document.getElementById("cart-items").addEventListener("click", event => {
    const button = event.target.closest("[data-index]");
    if (!button) return;

    changeQuantity(
      Number(button.dataset.index),
      Number(button.dataset.change)
    );
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      const acai = document.getElementById("acai-overlay");

      if (acai) {
        acai.querySelector("#close-acai").click();
      } else {
        closeAllMenus();
      }
    }
  });

  setTimeout(() => showNotice(), 1200);
});
