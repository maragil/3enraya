function hideModal () {

    let modal = document.querySelectorAll('.modal')[0];
    let modalContainer = document.querySelectorAll('.modal-container')[0];

    modal.classList.toggle('modal-close');//activamos la clase modal-close

    setTimeout(
        function () {
            modalContainer.style.opacity = '0';
            modalContainer.style.visibility = 'hidden';
        },

        1000)//retardo con el que se va a esconder el modal
}

export default hideModal;