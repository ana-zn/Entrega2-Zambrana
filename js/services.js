// Array del Servicio
const Servicios = [
    {
        img: "../img/wine.jpg", 
        servicesName: "Cata Vinos y Maridajes", 
        description: "Ofrece catas de vino exclusivas en la que los visitantes puedan explorar sus sentidos.Incluye una selección de vinos y maridajes (quesos, frutas y chocolates), guiados por un sommelier experto.", 
        duration: "1.5 horas.", 
        days: "Lunes a Sabados", 
        minPeople: 4,
        price: 4500, 
    },
    {
        img: "../img/relaxing-picnic-day-together.jpg",
        servicesName: "Tour por Viñedos + Cena",
        description: " Un recorrido por los viñedos, seguido de una cena o almuerzo cerca de los viñedos. La experiencia incluye una guía que narra la historia de la bodega y una degustación en cada estación del tour.", 
        duration: "3 horas",
        days: "Sábados y Domingos",
        minPeople: 2,
        price: 3000,
    },
    {
        img: "../img/side-view-hand-pouring-wine.jpg",
        servicesName: "Diseña y Embotella tu Vino",
        description: "Una experiencia en la que los visitantes mezclan diferentes variedades de uvas para crear su propio vino. Al final, se llevan una botella personalizada con una etiqueta diseñada por ellos mismos.", 
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

    // Descripcion del Servicio 
    const description = document.createElement("p"); 
    description.textContent = product.description; 
    // Detalles
    const details = document.createElement("div");
    details.classList.add("details");

    // Duración
    const duration = document.createElement("p");
    duration.innerHTML = `<i class='bx bx-time-five'></i>${product.duration || "1:30 horas"}`;

    // Días 
    const days = document.createElement("p");
    days.innerHTML = `<i class='bx bx-calendar'></i> ${product.days || "Lunes a Domingo"}`;

    // Personas mínimas
    const minPeople = document.createElement("p");
    minPeople.innerHTML = `<i class='bx bx-group'></i>  Min: ${product.minPeople || "2"} personas`;

    // Precio
    const price = document.createElement("p");
    price.innerHTML = `<i class='bx bx-money-withdraw'></i> $${product.price || "3,000"} x persona`;

    // Botón de reserva
     const reserveButton = document.createElement("button");
     reserveButton.textContent = "Reservar";
     reserveButton.addEventListener("click", () => openModal(product)); // Llamar la función openModal

    // Ensamblar detalles
    details.append(duration, days, minPeople, price);

    // Ensamblar todo
    content.append(img, title, description, details, reserveButton);

    return content;
}

// Recorrer el array y crear las tarjetas de productos
Servicios.forEach((product) => {
    const productCard = createProductCard(product);
    ServicesContent.append(productCard);
    console.log("Producto agregado al DOM:", product.servicesName);
});
