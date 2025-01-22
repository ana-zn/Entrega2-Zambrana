// Función para abrir el modal
function openModal(product) {
    const modal = document.getElementById("reservationModal");
    const modalContent = modal.querySelector(".modal-content");

    modalContent.innerHTML = `
    <button class="close" onclick="closeModal()"><i class='bx bx-x'></i></button>
        <h2>Reservar: ${product.servicesName}</h2>
        <p><strong>Descripción:</strong> ${product.description}</p>
        <p><strong>Duración:</strong> ${product.duration}</p>
        <p><strong>Días disponibles:</strong> ${product.days}</p>
        <p><strong>Precio:</strong> $${product.price} x persona</p>
        <form id="reservationForm">
            <label for="name">Nombre:</label>
            <input type="text" id="name" required>
            
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" required>
            
            <label for="people">Cantidad de personas:</label>
            <input type="number" id="people" min="1" required>
            
            <button type="submit">Confirmar Reserva</button>
        </form>
        
    `;
  // Mostrar el modal
  modal.style.display = "block";

  // Escuchar el evento de envío del formulario
  const reservationForm = modal.querySelector("#reservationForm");
  reservationForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = reservationForm.querySelector("#name").value;
      const email = reservationForm.querySelector("#email").value;
      const people = reservationForm.querySelector("#people").value;

      const confirmationMessage = `
          ¡Reserva confirmada!
          Nombre: ${name}
          Correo: ${email}
          Servicio: ${product.servicesName}
          Personas: ${people}
          Precio total: $${product.price * people}
          ¡Te esperamos!
      `;

      alert(confirmationMessage);
      closeModal();
  });
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("reservationModal");
  modal.style.display = "none";
}