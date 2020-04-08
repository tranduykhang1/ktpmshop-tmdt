$(document).ready(function() {

    let AoThun = () => {
        ($("#img-aothun").mouseover(() => {
            $("#img-aothun").attr('src', '../image/aothun-2.webp');
        })).mouseout(() => {
            $("#img-aothun").attr('src', '../image/aothun-1.webp');
        })
    }
    let Hoodie = () => {
        ($("#img-hoodie").mouseover(() => {
            $("#img-hoodie").attr('src', '../image/hoodie-2.jpg');
        }).mouseout(() => {
            $("#img-hoodie").attr('src', '../image/hoodie-1.jpg');
        }))
    }
    let Sweat = () => {
        ($("#img-sweat").mouseover(() => {
            $("#img-sweat").attr('src', '../image/sweat-2.webp');
        })).mouseout(() => {
            $("#img-sweat").attr('src', '../image/sweat-1.webp');
        })
    }

    AoThun();
    Hoodie();
    Sweat();

    let ToggleForm = () => {
        let isStatus = true;
        let text;
        $('.btn-toggle').click(() => {
            isStatus = !isStatus
            isStatus ? text = "Đăng nhập" : text = "Đăng kí"
            $('#status').text(text)
            $('form').animate({
                height: 'toggle',
                opacity: 'toggle'

            }, 'slow')
        })
    }
    ToggleForm()
})