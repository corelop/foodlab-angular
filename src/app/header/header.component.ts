import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public ngOnInit() {
    

    $(document).ready(function () {

      /*
            $('[data-toggle="tooltip"]').tooltip();
      
            $('#bRegistro').click(function (e) {
                e.preventDefault();
                //console.log("click");
      
                $('#modalSesion')
                    .modal('hide')
                    .on('hidden.bs.modal', function (e) {
                        $('#bRegistro').modal('show');
                        //console.log("mostrar");
      
                        $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
                    });
      
            });
      */
      var show = 0;
      $('body').on('click', '.perfil', function () {
        if (show == 0) {
          $('.menuDesplegable ul').animate({
            'opacity': 1
          }, 600);
          $('.menuDesplegable ul').animate({
            'margin-top': '20px'
          }, {
            duration: 800,
            queue: false
          });
          show = 1;
        } else {
          $('.menuDesplegable ul').animate({
            'opacity': 0
          }, 600);
          $('.menuDesplegable ul').animate({
            'margin-top': '0'
          }, {
            duration: 800,
            queue: false
          });
          show = 0;
        }
      });

      $(window).on('resize', function () {
        var w = $(window);
        if (w.width() >= 650) {

          $("figure input[type='image']").attr("src", "assets/img/Logo.png");
        } else {

          $("figure input[type='image']").attr("src", "assets/img/LogoS.png");
        }
      });

    });

  }

}
