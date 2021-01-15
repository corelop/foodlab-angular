import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../servicios/fire-base.service';

declare var $: any;


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public fireBaseService: FireBaseService) { }

  ngOnInit(): void {

    $(function () {

      //cargarRecetas();
      $("input[type='radio']").on("click", function () {

          var tBusqueda = $("input[type='radio']:checked").val();
          console.log(tBusqueda);
          switch (tBusqueda) {
              case 'nombre':
                  $("#barraBusquedaN").css("display", "inherit");
                  $("#barraBusquedaD").css("display", "none");
                  $("#barraBusquedaI").css("display", "none");
                  break;
              case 'ingrediente':
                  $("#barraBusquedaN").css("display", "none");
                  $("#barraBusquedaD").css("display", "none");
                  $("#barraBusquedaI").css("display", "inherit");
                  break;
              case 'dieta':
                  $("#barraBusquedaN").css("display", "none");
                  $("#barraBusquedaD").css("display", "inherit");
                  $("#barraBusquedaI").css("display", "none");
                  break;
          }
      });
     /* function cargarRecetas() {

          $.ajax({
              url: "ultimasRecetas",
              dataType: 'JSON',
              data: "receta=receta",
              method: 'POST',
              success: function (result) {
                  //console.log("success");
                  var recetas = {};
                  var imgs = {};
                  var i = 0;
                  $.each(result, function (clave, receta) {
                      imgs[i] = "img/recetas/" + clave;
                      recetas[i] = receta;
                      //console.log(clave + "--" + receta);
                      i++;
                  });
                  galeria(imgs, recetas);
                  //console.log(imgs);
                  //console.log(recetas);
              }
          });
      };*/
    })
  }

  cargaReceta(){
    console.log(this.fireBaseService.obtenerReceta(26));
    return this.fireBaseService.obtenerReceta(26);

  }

}
