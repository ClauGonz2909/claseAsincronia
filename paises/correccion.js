function misPaises(data) {
    let containerPaises = document.getElementById('containerCountry');
    let paisesList = document.createElement('ul'); // Crear el elemento <ul> fuera del bucle
    paisesList.classList.add('paises');

    data.forEach((element) => {
        let pais = document.createElement('li');
        pais.classList.add('pais');
        pais.textContent = element.name.common;
        paisesList.appendChild(pais); // Agregar cada <li> al <ul>
    });

    containerPaises.appendChild(paisesList); // Agregar el <ul> al contenedor fuera del bucle
}
