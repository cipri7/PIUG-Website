const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    description: "The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with a familiar feel. Premium materials with new colours and textures give modern expression to an all-time favourite.",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    description: "Styled for the '70s. Loved in the '80s. Classic in the '90s. Ready for the future. The Nike Blazer Mid '77 delivers a timeless design that's easy to wear. ",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    description: "Unlike traditional shoe construction, the Nike Crater Impact's thoughtful and modern design takes pattern efficiency and waste reduction seriously. Its straight-edged overlays mean no extra scraps. Its Crater foam midsole is made from waste found on the cutting-room floor and adds stability with a unique aesthetic.",
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    description: "Hippie is an exploratory footwear collection inspired by life on Mars—where materials are scarce and there is no resupply mission. Created from scraps, or 'space junk', Space Hippie is the result of sustainable practices meeting radical design.",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDescription = document.querySelector(".productDesc")

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "€" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDescription.textContent = choosenProduct.description;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

//function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//function to validate card number format
function validateCardNumber(cardNumber) {
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cardNumber);
}

//function to validate name format
function validateName(name) {
    const nameRegex = /[a-zA-Z]/;
    return nameRegex.test(name);
}

//function to validate phone number format
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?[0-9\s]+$/;
    return phoneRegex.test(phoneNumber);
}

//validate payment information when checkout button is clicked
const checkoutButton = document.querySelector(".payButton");
checkoutButton.addEventListener("click", () => {
    const nameInput = document.querySelector(".payInput[placeholder='Ciprian Vasile']");
    const phoneNumberInput = document.querySelector(".payInput[placeholder='+40 773 123 456']");
    const emailInput = document.querySelector(".payInput[type='text'][placeholder='abc@mail.com']");
    const cardNumberInput = document.querySelector(".payInput[placeholder='Card Number']");

    const email = emailInput.value;
    const cardNumber = cardNumberInput.value;
    const name = nameInput.value;
    const phoneNumber = phoneNumberInput.value;

    //validate name and phone number
    if (!validateName(name)) {
      alert("Please enter a valid name.");
      return;
  }

  if (!validatePhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
  }
    //validate email and card number
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }


    const confirmationMessage = "Your payment has been processed successfully!";
    alert(confirmationMessage);

    //close the payment modal
    const paymentModal = document.querySelector(".payment");
    paymentModal.style.display = "none";
});



