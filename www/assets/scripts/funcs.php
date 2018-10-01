<?php

require_once 'conn.php';

//**************************************************//
//**********    FUNCTIONS      *********************//
//**************************************************//
//STORES ALL QUERIES SENT TO MARIADB
function loqu($query) {
    global $dblink;
    $insert = "INSERT INTO btu_querylog (datetime,query) VALUES ('" . date("Y-m-d H:i:s") . "','" . addslashes($query) . "')";
    $result = $dblink->query($insert);
    if (!$result) {
        return false;
    } else {
        return true;
    }
}

// MANAGE NOTIFICATIONS
function notyburt($action, $user, $type) {

    global $dblink;
    $types = array(
        'newuser' => array(
            'icon' => 'pe pe-check',
            'msg' => '<strong>Felicitaciones</strong> tu cuenta ha sido creada con &eacute;xito',
        ),
        'filluser' => array(
            'icon' => 'pe pe-magic-wand',
            'msg' => '<strong>Recuerda</strong> debes completar los datos de tu cuenta para continuar',
        ),
    );

    if ($action == "push") {
        $insert = "INSERT INTO `btu_notyburt` (`timestamp`, `msg`, `status`, `user`, `type`) VALUES ('" . date("Y-m-d H:i:s") . "','" . $types[$type]['msg'] . "','new','" . $user . "','" . $types[$type]['icon'] . "')";
        $result = $dblink->query($insert);
        if (!$result) {
            return 'notpushed';
        } else {
            loqu($insert);
            return 'pushed';
        }
    }

    if ($action == "fetch") {
        if ($type == 'new') {
            $insert = "SELECT * FROM `btu_notyburt` WHERE `user` = '" . $user . "' AND status = 'new' ORDER BY `status`";
            $result = $dblink->query($insert);
            if (!$result) {
                return 'notfetched';
            } else {
                loqu($insert);
                return $result;
            }
        }
        if ($type == 'all') {
            $insert = "SELECT * FROM `btu_notyburt` WHERE `user` = '" . $user . "' ORDER BY `status`";
            $result = $dblink->query($insert);
            if (!$result) {
                return 'notfetched';
            } else {
                loqu($insert);
                return $result;
            }
        }
    }

    if ($action == "read") {
        $insert = "UPDATE btu_notyburt SET status = 'read' WHERE user = '" . $user . "'";
        $result = $dblink->query($insert);
        if (!$result) {
            return 'notread';
        } else {
            loqu($insert);
            return 'read';
        }
    }
}

// LIST MEMBERS OF SPECIFIC GROUP
function voidmembers($action, $user) {
    
}

?>
