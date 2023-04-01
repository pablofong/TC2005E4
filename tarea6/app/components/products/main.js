// Tabla JSON
const table = document.querySelector("#tabla-datos tbody"); // Selecciona el elemento tbody de la tabla
console.log('Hello, world!');

function data(){ // Función para cargar los datos
  console.log('Fetching data...');
  fetch('public/data.json')
  .then(response => response.json()) // Promesa para convertir la respuesta en JSON
  .then(data => { 
    console.log(data)
    let html = ""; // Variable para almacenar el código HTML
    data.forEach(element => {
      const row = document.createElement("tr"); // Crea un elemento tr
      row.innerHTML += `
        <th scope="row">${element.id}</th>
        <td>${element.type}</td>
        <td>${element.name}</td>
        <td class="cen">${element.price}</td>
        <td class="cen">${element.instock}</td>
        <td class="cen">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
          </svg>
        </td>
        <td class="cen">
          <button class="pen">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
          </button>
        </td>
        <td>
          <button type="button" class="trash" id="trash-button" onclick="deleteRow(this)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </td>
      `;
      table.appendChild(row); // Agrega la fila al final de la tabla (al final del elemento tbody)
    });
    document.getElementById("table").innerHTML = html; // Modifica el contenido de la tabla
  })
  .catch(error => console.log('Hubo un error al cargar los datos: ' + error)) 
}
data();


// Delete row
function deleteRow(button) {
  const row = button.parentNode.parentNode; // Obtiene el elemento <tr> del botón
  const confirmation = document.getElementById("delete-confirmation"); // Obtiene el elemento de confirmación
  
  confirmation.classList.remove("hidden"); // Muestra el elemento de confirmación
  document.body.classList.add("gray"); // Agrega la clase "gray" al elemento <body>
  confirmation.querySelector("#cancel-delete").onclick = function() { // Agrega el cancelar al botón "Cancelar"
    confirmation.classList.add("hidden");
    document.body.classList.remove("gray");
  };
  
  confirmation.querySelector("#confirm-delete").onclick = function() { // Agrega el borrar al botón "Confirmar"
    row.parentNode.removeChild(row); // Elimina el elemento <tr>
    confirmation.classList.add("hidden");
    document.body.classList.remove("gray");
  };
}


const deleteButtons = document.querySelectorAll(".delete-button"); // Obtiene todos los botones de eliminar

deleteButtons.forEach((button) => { // Agrega el evento click a cada botón
  button.addEventListener("click", () => {
    const confirmDelete = document.getElementById("delete-confirmation"); // Obtiene el elemento de confirmación
    document.body.classList.add("gray");
    confirmDelete.classList.remove("hidden");
    const cancelDelete = document.getElementById("cancel-delete"); // Obtiene el botón "Cancelar"
    const confirmDeleteBtn = document.getElementById("confirm-delete"); // Obtiene el botón "Confirmar"
    cancelDelete.addEventListener("click", () => {
      confirmDelete.classList.add("hidden");
    });
    confirmDeleteBtn.addEventListener("click", () => { 
      deleteRow(button); // Elimina la fila
      confirmDelete.classList.add("hidden"); // Oculta el elemento de confirmación
    });
  });
});


