$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba su nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#ff851b")
        }

        // Validado Apellidos ==============================
        if( $('#apellidos').val() == '' ){
            errores += '<p>Ingrese sus apellidos</p>';
            $('#apellidos').css("border-bottom-color", "#F14B4B")
        } else{
            $('#apellidos').css("border-bottom-color", "#ff851b")
        }

    
		// Validando Correo electronico ================
		if( $('#email').val() == '' ){
			errores += '<p>Ingrese su correo electronico</p>';
			$('#email').css("border-bottom-color", "#F14B4B");
		} else{
			$('#email').css("border-bottom-color", "#ff851b");
		}

		// Validando Mensaje ===========================
		if( $('#mensaje').val() == '' ){
			errores += '<p>Escriba un mensaje</p>';
			$('#mensaje').css("border-bottom-color", "#F14B4B");
		} else{
			$('#mensaje').css("border-bottom-color", "#ff851b");
		}

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
