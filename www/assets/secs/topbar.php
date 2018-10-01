<!-- CONTROL BAR -->
<div class="navbar -dark -fixed-top -has-6-items">
    <div class="navbar-wrapper">
        <div class="sidebar-toggle d-lg-none d-none d-sm-block" id="sidebar-toggle-navbar-brand" data-target="#sidebar"><a href="javascript:void(0);"><i class="fa fa-bars"> </i></a></div>
        <a class="navbar-brand d-none d-sm-block" href="index.php">
            <img class="logo_nav" src="assets/img/btsolid.png" />
        </a>
        <ul class="navbar-nav -right">
            <li>
                <a class="has-morph-dropdown" href="#notifications-dropdown">
                    <i class="pe pe-bell"></i>

                    <?php
                    $notys = notyburt('fetch', $_SESSION['userIntel']['idusuario'], 'new');
                    $row_cnt = $notys->num_rows;
                    if ($row_cnt != 0) {
                        echo '<span class="navbar-item-count">' . $row_cnt . '</span>';
                    }
                    ?>

                </a>
            </li>
            <!--<li><a class="has-morph-dropdown" href="#applications-dropdown"><i class="pe pe-keypad"></i></a></li>-->
            <li class="navbar-profile"><a class="has-morph-dropdown" href="#profile-dropdown"><i class="pe pe-settings"></i></a></li>

            <!--CHAT BTN--> 
            <!--<li class="sidebar-toggle" id="sidebar-secondary-toggle" data-target="#sidebar-secondary"><a href="javascript:void(0);"><i class="fa fa-ellipsis-v"> </i></a></li>-->
        </ul>
        <div class="morph-dropdown-wrapper -dark -right">
            <div class="morph-dropdown-list -links">

                <!--PANEL DE NOTIFICACIONES-->
                <div class="morph-dropdown" id="notifications-dropdown">
                    <div class="morph-content notification_win">
                        <h3>Notificaciones</h3>
                        <?php
                        $notys = notyburt('fetch', $_SESSION['userIntel']['idusuario'], 'all');
                        if ($notys) {
                            $row_cnt = $notys->num_rows;
                            if ($row_cnt == 0) {
                                echo '<li><a href="#"> <strong>No hay notificaciones</strong> </a></li>';
                            } else {
                                echo '<ul class="morph-links -small">';
                                $i = 0;
                                while ($rows = $notys->fetch_array(MYSQLI_BOTH)) {
                                    if ($rows['status'] == 'new') {
                                        $bgcolor = 'background-color: rgba(141, 206, 161, 0.75);';
                                    } else {
                                        $bgcolor = 'background-color: rgba(45, 150, 241, 0.44);';
                                    }
                                    echo '<li style="' . $bgcolor . '"><a href="#"><table><tr><td><span style="font-size: 3rem;" class="' . $rows['type'] . '" ></span></td><td>' . $rows['msg'] . '.<small>' . $rows['timestamp'] . '</small></td></tr></table> </a></li>';
                                    if ($i > 4) {
                                        break;
                                    }
                                    $i++;
                                }
                                echo '</ul>';
                                echo '<div class="_margin-top-1x"><a class="btn -primary -block">Ver Todas</a></div>';
                                notyburt('read', $_SESSION['userIntel']['idusuario']);
                            }
                        } else {
                            echo '<li><a href="#"> <strong>Error</strong> No pudimos cargar tus notificaciones</a></li>';
                        }
                        ?>
                    </div>
                </div>

                <!--                    <div class="morph-dropdown" id="applications-dropdown">
                                        <div class="morph-content -gallery">
                                            <h3>Applications</h3>
                                            <p class="_text-muted">Open one of your connected social applications.</p>
                                            <ul class="morph-gallery">
                                                <li><a href="https://facebook.com/pixevil" target="_blank"><i class="fa fa-facebook-square"> </i>Facebook</a></li>
                                                <li><a href="https://twitter.com/pixevil" target="_blank"><i class="fa fa-twitter"> </i>Twitter</a></li>
                                                <li><a href="https://plus.google.com/+pixevil" target="_blank"><i class="fa fa-google-plus"> </i>Google Plus</a></li>
                                                <li><a href="https://linkedin.com/company/pixevil" target="_blank"><i class="fa fa-linkedin"> </i>LinkedIn</a></li>
                                                <li><a href="https://github.com/pixevil" target="_blank"><i class="fa fa-github"> </i>GitHub</a></li>
                                                <li><a href="https://bitbucket.org/" target="_blank" rel="nofollow"><i class="fa fa-bitbucket"> </i>BitBucket</a></li>
                                                <li><a href="https://slack.com/" target="_blank" rel="nofollow"><i class="fa fa-slack"> </i>Slack</a></li>
                                                <li><a href="https://dropbox.com/" target="_blank" rel="nofollow"><i class="fa fa-dropbox"> </i>DropBox</a></li>
                                            </ul>
                                            <div class="_margin-top-1x"><a class="btn -primary -block">View All Applications</a></div>
                                        </div>
                                    </div>-->

                <!--PANEL DE USUARIO-->
                <div class="morph-dropdown" id="profile-dropdown">
                    <div class="morph-content -links">
                        <div class="morph-profile"><img src="<?php
                        if ($_SESSION['userIntel']['avatar'] != "default") {
                            echo $_SESSION['userIntel']['avatar'];
                        } else {
                            echo "assets/img/logoheader.png";
                        }
                        ?>" />
                            <h4><?php echo $_SESSION['userIntel']['fullname']; ?></h4>
                            <p><?php echo $_SESSION['userIntel']['email']; ?></p>
                        </div>
                        <ul class="morph-links">
                            <li><a href="#" gotopanel='config' class="gotobtn"><span class="fa fa-user-circle"></span><span> Mi Perfil</span></a></li>
                        </ul>
                        <div class="_margin-top-1x"><a class="btn -primary -block" href="login.php"> <span class="fa fa-sign-out"></span><span> Salir</span></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>