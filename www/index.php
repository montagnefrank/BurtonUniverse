<?php
///////////////////////////////////////////////////////////////////////////////////////////DEBUG EN PANTALLA
error_reporting(E_ALL);
ini_set('display_errors', 1);

// VALIDAMOS LOGIN ACTIVO
session_start();

// VERIFICAMOS QUE SE HAYA INICIADO SESION
if (!isset($_SESSION['login'])) {
    header("Location: login.php");
}

// DEFINIMOS LA VENTANA QUE SE VA A MOSTRAR
$panel = $_SESSION['userIntel']['panel'];

//LLAMAMOS LAS FUNCIONES DE PHP
require_once 'assets/scripts/funcs.php';
?>

<!DOCTYPE html >
<html lang="en">
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />

    <?php require ("assets/secs/head.php"); ?>

    <body itemscope="itemscope" itemtype="http://schema.org/WebPage">
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

        <?php require ("assets/secs/topbar.php"); ?>
        <?php require ("assets/secs/menu.php"); ?>
        <?php require ("assets/secs/opc.php"); ?>

        <?php require ("modules/" . $panel . "/view.php"); ?>

        <?php require ("assets/secs/scripts.php"); ?>
        <?php require ("modules/" . $panel . "/model.php"); ?>
    </body>

</html>