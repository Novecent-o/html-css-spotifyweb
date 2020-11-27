$(document).ready(
    function () {
        
        $('.green_menu').mouseenter(
            function() {
                $(this).addClass('active_green');
            }
        );
        $('.green_menu').mouseleave(
            function() {
                $(this).removeClass('active_green');
            }
        );

        $('.n_icone').mouseenter(
            function() {
                $(this).addClass('active_grey');
            }
        );
        $('.n_icone').mouseleave(
            function() {
                $(this).removeClass('active_grey');
            }
        );
    }
);

document.getElementById('text-js').innerHTML = 'Artisti di strada senza speranza';
document.getElementById('text-js2').innerHTML = 'Pensato per John Travolto';
document.getElementById('text-js3').innerHTML = 'Ascolta queste playlist se ti vuoi far del male';

