
$(document).ready(function () {
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
    $("body").removeClass('loading');

    $('.nav-about').on('click', function (e) {
        $('#aboutModal').modal();
        $('div.modal-backdrop').addClass("about-backdrop");
    });

    lozad(document.querySelector('img')).observe();
});