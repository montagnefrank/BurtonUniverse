<?php
///////////////////////////////////////////////////////////////////////////////////////////DEBUG EN PANTALLA
//error_reporting(E_ALL);
//ini_set('display_errors', 1);

session_start();
session_destroy();
require ("assets/scripts/videorandom.php");
?>
<!DOCTYPE html >
<html lang="en">
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />

    <?php require ("assets/secs/head.php"); ?>

    <body itemscope="itemscope" itemtype="http://schema.org/WebPage">

        <div class="video-background">
            <div class="video-foreground">
                <iframe src="https://www.youtube.com/embed/<?php echo $video; ?>?controls=0&showinfo=0&rel=0&mute=1&modestbranding=1&autoplay=1&loop=1&playlist=<?php echo $video; ?>" 
                        frameborder="0" 
                        allowfullscreen>
                </iframe>
            </div>
        </div>

        <div class="loader-wrapper">
            <div class="loader">
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
                <span class="loader-block"></span>
            </div>
        </div>

        <!-- Content-->
        <div class="content -dark -without-sidebar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col -lg-12">
                        <div class="panel -dark -focused">
                            <div class="panel-heading -dark -with-icon-lg"><i class="pe pe-users"></i>
                                <h3>Descubre </h3><span> c&oacute;mo traemos la tecnolog&iacute;a a tus manos </span>
                            </div>
                            <div class="panel-body">
                                <form class="form -dark" id="form-signup" action="/" data-toggle="validator" method="POST">
                                    <div class="form-group">
                                        <label class="form-label" for="new_form-signup-username">Usuario </label>
                                        <input class="form-control" id="new_form-signup-username" name="new_username" type="text" required="required" placeholder="Usuario" value="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="new_form-signup-password">Contraseña</label>
                                        <input class="form-control" id="new_form-signup-password" name="new_password" type="password" required="required" placeholder="Contraseña" value="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="new_form-signup-email">Email</label>
                                        <input class="form-control" id="new_form-signup-email" name="new_email" type="email" required="required" placeholder="Correo electr&oacute;nico" value="" />
                                    </div>
                                    <div class="form-group _margin-top-2x _margin-bottom-none">
                                        <div class="form-check -checkbox">
                                            
<!--                                            <input class="form-check-input" id="form-signin-remember" name="password" type="checkbox" checked="checked" />
                                            <label for="form-signin-remember">Remember me </label>-->
                                            
                                            <button class="btn -primary _pull-right" name="signup" id="signup-button">Registrarme </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <p class="_text-center"><a class="_text-muted" href="login.php">Ya soy miembro, deseo iniciar sesi&oacute;n!</a></p>
                    </div>
                </div>
            </div>
        </div>
        
        <?php require ("assets/secs/scripts.php"); ?>
    </body>

</html>