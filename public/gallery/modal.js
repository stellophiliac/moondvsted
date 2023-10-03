function toggleModal(IMAGE, caption) {
    var modal = document.getElementById('modalID'); // for convinience 
    // console.log(IMAGE); //prints image file directory; comment out if uneeded
    var modalm1 = document.createElement("img"); // creates <img>
    modalm1.style = 'width:80%; max-width: 100%; height: 80%; display: block; align-items: center; margin: auto; object-fit:contain;';
    modalm1.id = 'modalm1'; // added id to <img> so I can delete it later
    modalm1.src = IMAGE; //image source so in this case yourmom 
    modal.appendChild(modalm1);
    modal.style = 'display: block'; //show modal
};
function hideModal() {
    var modal = document.getElementById('modalID');
    modal.style = 'display: none'; //hide modal
    document.getElementById('modalm1').remove(); //delete <img>
};