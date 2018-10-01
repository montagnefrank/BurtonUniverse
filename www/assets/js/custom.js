//NEUTRALIZE FORM
$("#form-signup,#form-signin").submit(function (e) {
    e.preventDefault();
});


//LOGIN EVENT
$(document).on('click', '#login-button', function (e) {

    e.preventDefault;
    var username = $('#form-signin-username').val(),
            pass = $('#form-signin-password').val(),
            self = this,
            formData = new FormData();

    // CHECK FOR EMPTY FIELDS
    if (username == '') {
        notyburt("Debe ingresar el usuario", 'warning');
        return false;
    }
    if (pass == '') {
        notyburt("Debe ingresar la contraseña", 'warning');
        return false;
    }

    formData.append('meth', 'login');
    formData.append('username', username);
    formData.append('password', pass);
    $.ajax({
        url: 'assets/scripts/api.php',
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.scriptResp == 'match') {
                console.log('login usuario exitoso');
                window.location.href = "/index.php";
                return false;
            }
            if (data.scriptResp == 'noMatch') {
                notyburt("No pudimos encontrar sus datos en nuestra plataforma", 'info');
            }
            if (data.scriptResp == 'silent') {
                notyburt("Error de sistema, contacte a su agente de soporte", 'warning');
            }
            if (data.scriptResp == 'updateloginqueryFail') {
                notyburt("Error de sistema, no pudimos validar sus datos", 'warning');
            }
        },
        error: function (error) {
            notyburt("Hubo un error de internet, intente de nuevo", 'danger');
            console.log(error);
        }
    });
});

//REGISTER EVENT
$(document).on('click', '#signup-button', function (e) {

    e.preventDefault;
    var username = $('#new_form-signup-username').val(),
            pass = $('#new_form-signup-password').val(),
            email = $('#new_form-signup-email').val(),
            self = this,
            formData = new FormData();

    // CHECK FOR EMPTY FIELDS
    if (username == '') {
        notyburt("Debe ingresar el usuario", 'warning');
        return false;
    }
    if (pass == '') {
        notyburt("Debe ingresar la contraseña", 'warning');
        return false;
    }
    if (email == '') {
        notyburt("Debe ingresar tu email", 'warning');
        return false;
    }

    formData.append('meth', 'reg');
    formData.append('username', username);
    formData.append('password', pass);
    formData.append('email', email);
    $.ajax({
        url: 'assets/scripts/api.php',
        type: 'POST',
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.scriptResp == 'regtrue') {
                console.log('registro usuario exitoso');
                window.location.href = "/index.php";
                return false;
            }
            if (data.scriptResp == 'userAlreadyInDB') {
                notyburt("Este usuario ya existe en nuestro sistema", 'warning');
            }
            if (data.scriptResp == 'emailAlreadyInDB') {
                notyburt("Este email ya existe en nuestro sistema", 'warning');
            }
            if (data.scriptResp == 'userexistqueryfail'
                    || data.scriptResp == 'emailexistqueryfail'
                    || data.scriptResp == 'insertuserFail'
                    || data.scriptResp == 'failuserReg'
                    || data.scriptResp == 'userqueryFail') {
                notyburt("Hubo un error en el sistema, contacte a su agente de soporte", 'danger');
                console.log(data);
            }
        },
        error: function (error) {
            notyburt("Hubo un error de internet, intente de nuevo", 'danger');
            console.log(error);
        }
    });
});

function notyburt(msg, style) {
    if (style == 'success') {
        var classes = '-success', title = 'Felicitaciones', image = 'assets/img/icons/suc.png';
    }
    if (style == 'info') {
        var classes = '-info', title = 'Informaci&oacute;n', image = 'assets/img/icons/info.png';
    }
    if (style == 'warning') {
        var classes = '-warning', title = 'Alerta', image = 'assets/img/icons/warn.png';
    }
    if (style == 'danger') {
        var classes = '-danger', title = 'Error', image = 'assets/img/icons/dang.png';
    }
    $.gritter.add({
        class_name: classes,
        title: title,
        text: msg,
        time: 4e3,
        image: image
    });
}