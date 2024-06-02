const Dictionary = {
    EMPTY_STRING: "",
    DYNAMIC_BUTTON_ID_INIT: "deleteImg-",
    MODAL_SHOW: 'show',
    MODAL_HIDE: 'hide',
    DELETE_IMG_ERROR_MESSAGE: "Error al intentar eliminar la imagen: ",
    DELETE_IMG_SUCCESS_MESSAGE: "¡Imagen eliminada exitosamente!"
};

const ElementKeys = {
    mainModal: 'mainModal',
    modalImage: 'modalImage',
    cardTitleModal: 'cardTitleModal',
    deleteImg: 'deleteImg',
    cardTitle: 'cardTitle',
    cardImgtop: '.card-img-top',
    closeModalButton: 'closeModalButton',
    btnDanger: '.btn-danger'
};

const showModal = (event) => {
    const mainModal = document.getElementById(ElementKeys.mainModal);
    const modalImage = document.getElementById(ElementKeys.modalImage);
    const cardTitleModal = document.getElementById(ElementKeys.cardTitleModal);
    const cardTitleId = event.target.parentNode.lastElementChild.firstElementChild.id;
    const cardTitle = document.getElementById(cardTitleId);
    modalImage.src = event.target.src;
    cardTitleModal.textContent = cardTitle.textContent;
    $(mainModal).modal(Dictionary.MODAL_SHOW);
}

const closeModal = () => {
    const mainModal = document.getElementById(ElementKeys.mainModal);
    $(mainModal).modal(Dictionary.MODAL_HIDE);
};

const deleteArtwork = (event) => {
    const imgId = event.target.parentNode.parentNode.firstElementChild.id;
    const imgToDelete = document.getElementById(imgId);
    imgToDelete ? removeChildNodes(imgToDelete) : showMessage(Dictionary.DELETE_IMG_ERROR_MESSAGE + imgId);
    closeModal(event);
};

const removeChildNodes = (imgToDelete) => {
    let divPadre = imgToDelete.parentNode;
    while (divPadre.firstChild) { divPadre.removeChild(divPadre.firstChild); };
    showMessage(Dictionary.DELETE_IMG_SUCCESS_MESSAGE);
};

const showMessage = (message) => {
    alert(message);
};

document.addEventListener("DOMContentLoaded", () => {
    const artworks = document.querySelectorAll(ElementKeys.cardImgtop);
    const closeModalButton = document.getElementById(ElementKeys.closeModalButton);
    const deleteButtons = document.querySelectorAll(ElementKeys.btnDanger);
    closeModalButton.addEventListener('click', closeModal);
    artworks.forEach((artwork) => { artwork.addEventListener('click', showModal); });
    deleteButtons.forEach((deleteButton) => { deleteButton.addEventListener('click', deleteArtwork); });
});


