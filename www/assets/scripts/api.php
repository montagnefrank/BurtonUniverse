<?php

////////////////////////////////////////////////////////////////////////////////////////DEBUG EN PANTALLA
error_reporting(E_ALL);
ini_set('display_errors', 1);

// INICIAMOS LA SESION PARA CARGAR VARIABLES PUBLICAS
session_start();

//HABILITAMOS EL ORIGEN PUBLICO
header("Access-Control-Allow-Origin: *");
header('Content-type: application/javascript; charset=utf-8');

//COMENZAMOS A LOGUEAR TODO EL OUTPUT
ob_start();

// ARCHIVOS NECSARIOS
require_once 'conn.php';
require_once 'funcs.php';
$json = array();

if ($_POST) {
    //CHANGE PANEL (WHEN USER CLICS IN MENU BTN)
    if ($_POST['meth'] == 'switchpanel') {
        $select = "UPDATE btu_usuario SET panel = '" . $_POST['panel'] . "' WHERE idUsuario = '" . $_POST['user'] . "'";
        $result = $dblink->query($select);
        $panel = $_POST['panel'];
        $_SESSION['userIntel']['panel'] = $panel;
    }

    //LOGIN USER
    if ($_POST['meth'] == 'login') {

        $username = $_POST["username"];
        $password = $_POST["password"];

        $query = "SELECT * FROM btu_usuario WHERE username = '$username'";
        $result = $dblink->query($query);
        loqu($query);
        if (!$result)
            die("{'scriptResp' : 'userqueryFail'}");
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        $_SESSION['userIntel'] = $row;

        if (($rows != 0) && (strcmp($row["username"], $username) == 0) && ($row['password'] === $password)) {

            /////////////////////////////////////////VEMOS SI TIENE IMAGEN CARGADA
            $isavatar = "../img/users/" . $row["avatar"] . ".jpg";
            $linkavatar = "assets/img/users/" . $row["avatar"] . ".jpg";
            if (file_exists($isavatar)) {
                $_SESSION['userIntel']['avatar'] = $linkavatar;
            } else {
                $_SESSION['userIntel']['avatar'] = "default";
            }

            $json['scriptResp'] = "match";

            // UPDATE LAST LOGIN
            $val_select = "UPDATE btu_usuario SET lastlogin = '" . date("Y-m-d H:i:s") . "' WHERE username = '$username'";
            $val_result = $dblink->query($val_select) or die("{'scriptResp' : 'updateloginqueryFail'}");

            $output = ob_get_contents();
            ob_end_clean();
            $json['output'] = $output;
            unset($_SESSION['userIntel']['password']);
            $_SESSION['login'] = 'valid';
            echo json_encode($json);
        } else {
            $json['scriptResp'] = "noMatch";
            $output = ob_get_contents();
            ob_end_clean();
            $json['output'] = $output;
            echo json_encode($json);
        }
        return;
    }

    //ADD NEW USER
    if ($_POST['meth'] == 'reg') {

        $username = $_POST["username"];
        $password = $_POST["password"];
        $email = $_POST["email"];

        $select = " /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = '" . $username . "';";
        $result = $dblink->query($select) or die("{'scriptResp' : 'userexistqueryfail'}");
        loqu($select);
        $row_cnt = $result->num_rows;

        if ($row_cnt > 0) {
            $json['msg'] = $select;
            $json['scriptResp'] = "userAlreadyInDB";
            $output = ob_get_contents();
            ob_end_clean();
            $json['output'] = $output;
            echo json_encode($json);
            return;
        } else {

            $select = " /* VALIDAR EMAIL */ SELECT email FROM btu_usuario WHERE username = '" . $username . "';";
            $result = $dblink->query($select) or die("{'scriptResp' : 'emailexistqueryfail'}");
            loqu($select);
            $row_cnt = $result->num_rows;
            if ($row_cnt > 0) {
                $json['msg'] = $select;
                $json['scriptResp'] = "emailAlreadyInDB";
                $output = ob_get_contents();
                ob_end_clean();
                $json['output'] = $output;
                echo json_encode($json);
                return;
            } else {

                $val_select = "INSERT INTO `btu_usuario` (`username`, `password`, `email`, `group`, `avatar`, `theme`, `panel`, `fullname`, `phone`, `address`, `lastlogin`, `membersice`, `empresa`, `status`)   VALUES  "
                        . "('" . $username . "','" . $password . "','" . $email . "','" .
                        "neus','default','default','newuser','Nuevo Usuario','neus','neus','" . date("Y-m-d H:i:s") . "','" . date("Y-m-d H:i:s") . "','neus','new')";
                $json['msg'] = $val_select;
                $json['scriptResp'] = 'insertuserFail';
                $val_result = $dblink->query($val_select) or die(json_encode($json));
                loqu($val_select);

                if ($val_result) {

                    $query = " /* POST REGISTRO */ SELECT * FROM btu_usuario WHERE username = '$username'";
                    $result = $dblink->query($query);
                    loqu($query);
                    if (!$result)
                        die("{'scriptResp' : 'userqueryFail'}");
                    $rows = $result->num_rows;
                    $result->data_seek(0);
                    $row = $result->fetch_array(MYSQLI_ASSOC);
                    $_SESSION['userIntel'] = $row;

                    /////////////////////////////////////////VEMOS SI TIENE IMAGEN CARGADA
                    $isavatar = "assets/img/users/" . $row["avatar"] . ".jpg";
                    if (file_exists($isavatar)) {
                        $_SESSION['userIntel']['avatar'] = $isavatar;
                    } else {
                        $_SESSION['userIntel']['avatar'] = "default";
                    }

                    $json['scriptResp'] = "regtrue";
                    notyburt('push', $_SESSION['userIntel']['idusuario'], 'newuser');
                    notyburt('push', $_SESSION['userIntel']['idusuario'], 'filluser');
                    $output = ob_get_contents();
                    ob_end_clean();
                    $json['output'] = $output;
                    unset($_SESSION['userIntel']['password']);
                    $_SESSION['login'] = 'valid';
                    echo json_encode($json);
                } else {
                    $json['scriptResp'] = "failuserReg";
                    $output = ob_get_contents();
                    ob_end_clean();
                    $json['output'] = $output;
                    echo json_encode($json);
                }
            }
        }
    }
} else {
    $json['scriptResp'] = "silent";
    $output = ob_get_contents();
    ob_end_clean();
    $json['output'] = $output;
    echo json_encode($json);
}
