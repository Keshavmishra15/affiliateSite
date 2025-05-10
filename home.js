let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Call showSlides again after 2 seconds
  setTimeout(showSlides, 2000);
}

// Start auto slideshow
showSlides();

const products = [
  {
    title: "Oneplus",
    description:
      "OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)",
    image: "images/image1.jpg",
    link: "https://amzn.to/3Za3tQU",
  },
  {
    title: "Motorolla",
    description: "Motorola Edge 50 Fusion 5G (Marshmallow Blue, 8GB RAM, 128GB Storage)",
    image: "images/image2.png",
    link: "https://amzn.to/4jN8EhU",
  },
  {
    title: "Vivo",
    description: "iQOO Z10x 5G (Titanium, 8GB RAM, 128GB Storage) | 6500 mAh Large Capacity Battery | Dimensity 7300 Processor | Military-Grade Certified Durability",
    image: "images/vivo.jpg",
    link: "https://amzn.to/3YA4mlK",
  },
  {
    title: "Infinix",
    description: "Infinix GT 20 Pro 5G (Mecha Silver, 8GB RAM, 256GB Storage) | Up to 16GB Extented RAM | 6.78" AMOLED Display | 108MP+2MP+2MP | 32MP Front Camera | MediaTek Dimensity 8200 Processor | 45W Fast Charging",
    image: "images/image.jpg",
    link: "https://amzn.to/3YHitWq",
  },
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <a href="${product.link}" target="_blank" class="buy-button">Buy Now</a>
  `;
  productList.appendChild(productCard);
});
