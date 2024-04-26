function paises() {
    fetch('https://restcountries.com/v3.1/all')

        .then((response) => {
            if (!response.ok) {
                throw new error('error en la solicitud')
            }
            return response.json()

        })

        .then((data) => {
            misPaises(data)
           
        })

        .catch((error) => {
            console.error('hubo un problema',error)

        })

        

}
paises()


function misPaises(data){

    let containerPaises = document.getElementById('containerCountry')
    let paises = document.createElement('ul');
    paises.classList.add('paises');
    containerPaises.appendChild(paises);

    data.forEach(element => {
    
       
        let pais = document.createElement('li');
        pais.classList.add('pais');
        pais.textContent = element.name.common;

        paises.appendChild(pais)

            
        });




}
