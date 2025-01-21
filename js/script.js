// Declarar el array de servicios antes de utilizarlo
const Servicios = [
    {
        img: "ruta/a/la/imagen1.jpg", // Ruta de la imagen
        servicesName: "Clase de Cocina Gourmet", // Nombre del servicio
        duration: "2 horas", // Duración del servicio
        days: "Lunes a Viernes", // Disponibilidad
        minPeople: 4, // Mínimo de personas
        price: 4500, // Precio por persona
    },
    {
        img: "ruta/a/la/imagen2.jpg",
        servicesName: "Tour Guiado por la Ciudad",
        duration: "3 horas",
        days: "Sábados y Domingos",
        minPeople: 2,
        price: 3000,
    },
    {
        img: "ruta/a/la/imagen3.jpg",
        servicesName: "Taller de Pintura al Aire Libre",
        duration: "1:30 horas",
        days: "Todos los días",
        minPeople: 3,
        price: 2500,
    },
];

// Función para crear la estructura de una tarjeta de producto
function createProductCard(product) {
    const content = document.createElement("div");
    content.classList.add("category__item");

    // Imagen
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.servicesName;

    // Título
    const title = document.createElement("h3");
    title.textContent = product.servicesName;

    // Detalles
    const details = document.createElement("div");
    details.classList.add("details");

    // Duración
    const duration = document.createElement("p");
    duration.innerHTML = `<span>⏱️</span> ${product.duration || "1:30 horas"}`;

    // Días
    const days = document.createElement("p");
    days.innerHTML = `<span>📅</span> ${product.days || "Lunes a Domingo"}`;

    // Personas mínimas
    const minPeople = document.createElement("p");
    minPeople.innerHTML = `<span>👥</span> Min: ${product.minPeople || "2"} personas`;

    // Precio
    const price = document.createElement("p");
    price.innerHTML = `<span>💵</span> $${product.price || "3,000"} x persona`;

    // Botón de reserva
    const reserveButton = document.createElement("button");
    reserveButton.textContent = "Reservar";
    reserveButton.addEventListener("click", () => addToCart(product));

    // Ensamblar detalles
    details.append(duration, days, minPeople, price);

    // Ensamblar todo
    content.append(img, title, details, reserveButton);

    return content;
}

// Recorrer el array y crear las tarjetas de productos
Servicios.forEach((product) => {
    const productCard = createProductCard(product);
    shopContent.append(productCard);
    console.log("Producto agregado al DOM:", product.servicesName);
});
