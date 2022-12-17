(function ($) {
    function menu(){
        const _listaElementos = ['Caos','Elemental','Luz','Marcial','Orden','Oscuridad','Tech'];
        var htmlMenu = "";
        for (i = 0; i < _listaElementos.length; i++) {
            var listaPj = listaPersonajes.filter(info => info.elementos.some(item => item.elemento === _listaElementos[i]));
            /*htmlMenu+="<li class=\"m"+_listaElementos[i]+"\"><a href=\"#menu"+_listaElementos[i]+"\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\" role=\"button\" aria-controls=\"menu"+_listaElementos[i]+"\">";
            htmlMenu+="<i class=\"icon-menu icon-"+_listaElementos[i]+"\"></i> ";
            htmlMenu+=_listaElementos[i];
            htmlMenu+="</a><ul class=\"collapse list-unstyled\" id=\"menu"+_listaElementos[i]+"\">";*/

/*
            <li class="expanded">
            <a href="javascript:;">Elemento <i class="ec-icon ion-ios-arrow-down"></i></a>
            <ul class="sub-menu">
            <li><a href="javascript:;">PJ</a></li>
            </ul>
            </li>*/
            var htmlPj ="";
            for (let _pj of listaPj) {
                //htmlPj+="<li class=\"m"+_listaElementos[i]+"\"><a href=\"#\" onclick=\"VerPersonaje('"+_pj.id+"');\"><i class=\"icon-menu icon-"+_pj.id+"\"></i>"+_pj.nombre+"</a></li>";
            }
            /*htmlMenu+=htmlPj;
            htmlMenu+="</ul></li>";*/

            //document.getElementById('_menu').innerHTML=htmlMenu;
        }
    };

    /*$('.color-changer li span').on('click', function(e){
        var color = $(this).data('bgcolor');
        $('.dc-menu .dc-list').css({'background-color': color});
        e.preventDefault();
    });*/

    function fondoBody(fondo){
        document.body.style.backgroundImage = "url('"+fondo+"')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "top center";
        document.body.style.backgroundColor = "#000000";
    }

    $(document).ready(function() {
        fondoBody('https://drive.google.com/uc?export=view&id=1-4zGekVov3cC3lnOLjeFXoK6n4XyiuCt');
        $(function () {
            $('[data-bs-toggle="tooltip"]').tooltip()
           });

            /*var els = document.querySelectorAll(".fondo3"), refWidth    = els[0].clientWidth, refFontSize = parseFloat(window.getComputedStyle(els[0],null).getPropertyValue("font-size"));
            els.forEach((el,i) => el.style.fontSize = refFontSize * refWidth / els[i].clientWidth - 3 + "px")*/
        $(".sidebar .ec-list > .expanded > span").click(function() {
            var e = $(this).next(".sub-menu")
            , a = ".sidebar .ec-list > li.expanded > .sub-menu";
            0 === $(".page-sidebar-minified").length && ($(a).not(e).slideUp(function() {
                $(this).closest("li").removeClass("open")
            }),
            $(e).slideToggle(function() {
                var e = $(this).closest("li");
                $(e).hasClass("open") ? $(e).removeClass("open") : $(e).addClass("open")
            }))
        }),
        $(".sidebar .ec-list > .expanded .sub-menu li.expanded > span").click(function() {
            if (0 === $(".page-sidebar-minified").length) {
                var e = $(this).next(".sub-menu");
                $(e).slideToggle()
            }
        });
    });
    
})(jQuery);