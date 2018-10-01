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
                            <div class="panel-heading -dark -with-icon-lg"><i class="pe pe-user"></i>
                                <h3>Bienvenido </h3><span> estamos esperando por ti</span>
                            </div>
                            <div class="panel-body">
                                <form class="form -dark" id="form-signin" action="/" data-toggle="validator" method="POST">
                                    <div class="form-group">
                                        <label class="form-label" for="form-signin-username">Usuario </label><input class="form-control" id="form-signin-username" name="username" type="text" required="required" placeholder="Usuario" value="" /></div><!-- /Form Group-->
                                    <div class="form-group">
                                        <label for="form-signin-password">Contraseña</label><input class="form-control" id="form-signin-password" name="password" type="password" required="required" placeholder="Contraseña" value="" /><a class="form-text _text-muted _text-right" href="#"> <small>Olvidaste tus credenciales?</small></a></div><!-- /Form Group-->
                                    <div class="form-group _margin-top-2x _margin-bottom-none">
                                        <div class="form-check -checkbox">
                                            
<!--                                            <input class="form-check-input" id="form-signin-remember" name="password" type="checkbox" checked="checked" />
                                            <label for="form-signin-remember">Remember me </label>-->
                                            
                                            <button class="btn -primary _pull-right" name="signin" id="login-button">Ingresar </button>
                                        </div>
                                    </div><!-- /Form Group-->
                                </form>
                            </div>
                        </div>
                        <p class="_text-center"><a class="_text-muted" href="reg.php">No tengo cuenta, deseo suscribirme!</a></p>
                    </div>
                </div>
            </div>
        </div>
        <?php require ("assets/secs/scripts.php"); ?>
    </body>

</html>