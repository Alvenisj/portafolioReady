
const toggleTheme = document.getElementById('toggle-theme');
const toggleThemeIcon = document.getElementById('toggle-theme__icon');
const toggleThemeText = document.getElementById('toggle-theme__text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles =  document.documentElement.style;


/*CON ESTE CÓDIGO LE CAMBIAMOS LA CLASE AL "BODY" */
toggleTheme.addEventListener('click', () => {

    /*CON TOGGLE A MODO DE INTERRUPTOR, SI TIENE LA CLASE LA QUITA, SINO LA PONE */
    document.body.classList.toggle('dark');
   
    if(toggleThemeIcon.src.includes('moon.svg')){
        toggleThemeIcon.src = "assets/icons/sun.svg";
        toggleThemeText.textContent = 'Light Mode'
    } else {
        toggleThemeIcon.src = "assets/icons/moon.svg";
        toggleThemeText.textContent = 'Dark Mode';

    }
});



toggleColors.addEventListener('click', (e) => {

   rootStyles.setProperty('--primary-color', e.target.dataset.color)
   
    
})


/*CÓDIGO PARA HACER LA VENTANA MODAL*/

//en la variable openModal se guarda el valor del boton: "join us"
const openModal = document.querySelector('.hero__cta');
//en la variable modal se guarda el elemento section
const modal = document.querySelector('.modal');
// en la variable closeModal se guarda el elemento a de cerrar el modal
const closeModal = document.querySelector('.modal__close');


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    
});



