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
    title: "Electronics",
    description:
      "",
    image: "images/image1.jpg",
    link: "YOUR_AMAZON_AFFILIATE_LINK",
  },
  {
    title: "Home Appliences",
    description: "",
    image: "images/image2.png",
    link: "YOUR_FLIPKART_AFFILIATE_LINK",
  },
  {
    title: "kitchen Appliences",
    description: "",
    image: "images/image3.jpg",
    link: "YOUR_AMAZON_AFFILIATE_LINK",
  },
  {
    title: "Unique Gadgets",
    description: "",
    image: "images/image.jpg",
    link: "YOUR_AMAZON_AFFILIATE_LINK",
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
