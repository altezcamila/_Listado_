document.addEventListener('DOMContentLoaded', function () {
    const itemInput = document.getElementById('item');
    const addButton = document.getElementById('agregar');
    const listContainer = document.getElementById('contenedor');
    const clearButton = document.getElementById('limpiar');

    // Cargar ítems desde el Local Storage al cargar la página
    const savedItems = JSON.parse(localStorage.getItem('items')) || []; //recuperar el contenido almacenado en el local storage. Busca en el local storage y devuelve el contenido asociado con "items"
    savedItems.forEach(function (itemText) { //se inicia un ciclo que recorre cada elemento de "savedItems"
      const item = document.createElement('li'); // se crea un nuevo elemento "li" que representa un item de la lista
      item.className = 'list-group-item'; //darle estilo al al item de la lista
      item.textContent = itemText; //darle contenido al item
      listContainer.appendChild(item); //Se agrega el elemento "li" que se creó al contenedor de la lista
    });

    addButton.addEventListener('click', function () { //se crea un evento al botón "agregar"
      const newItemText = itemInput.value.trim(); //se obtiene el valor del input //trim: para eliminar cualquier espacio en blanco al principio y al final del texto que se ingresa
      if (newItemText !== '') { //se verifica que el valor del nuevo item no está vacio
        const newItem = document.createElement('li'); //se crea un nuevo elemento "li" que representa un item de la lista
        newItem.className = 'list-group-item'; //darle estilo al al item de la lista
        newItem.textContent = newItemText; //darle contenido al item
        listContainer.appendChild(newItem); //Se agrega el elemento "li" que se creó al contenedor de la lista
        itemInput.value = ''; //se limpia el input

        // Guardar ítems en el Local Storage
        savedItems.push(newItemText); //se agrega el nuevo item al array
        localStorage.setItem('items', JSON.stringify(savedItems)); //se almacena el array en el local storage
      }
    });

    clearButton.addEventListener('click', function () { //se agrega un evento al botón "limpiar"
      listContainer.innerHTML = ''; // se vacia el contenedor de la lista
      localStorage.removeItem('items'); //se elimina la entrada
      savedItems.length = 0; //se vacia el array
    });
  });

  