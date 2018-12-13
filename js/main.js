$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('#about').on('click', function(e){
    $('#aboutModal').modal();
    $('div.modal-backdrop').addClass("about-backdrop");

});
var el = document.querySelector('img');
var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();