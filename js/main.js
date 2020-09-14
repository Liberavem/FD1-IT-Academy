$(document).ready(function () {

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
        });
    });

    $("#book-now").click(function () {
        let name = $('#name-input').val();
        if (name) {
            $("#book-table-now-modal").modal("toggle");
        } else {
            alert('Write your name ')
        }
    });

   $("#book-now-modal").click(function () {
        let name = $('#name-input-modal').val();
        if (name) {
            $("#book-table").modal("hide");
            $("#book-table-now-modal").modal("toggle");
        } else {
            alert('Введите имя')
        }
    });


});
