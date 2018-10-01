<!-- Scripts-->
<script src="assets/js/bundles/dashboard.bundle.js" type="text/javascript"></script>
<script src="assets/js/bundles/dashboard-index.bundle.js" type="text/javascript"></script>
<script src="assets/js/bundles/dashboard-ui-notifications.bundle.js" type="text/javascript"></script>
<script src="assets/js/custom.js" type="text/javascript"></script>
<script src="assets/js/fileinput.min.js" type="text/javascript"></script> 

<?php // DYNAMIC SCRIPTS ?>
<script>
    $(".gotobtn").on("click", function (e) {
        e.preventDefault();
        $.post("assets/scripts/api.php", {meth: 'switchpanel', panel: $(this).attr("gotopanel"), user: <?php echo $_SESSION['userIntel']['idusuario']; ?>}, function (data) {
            location.reload();
//        console.log(data);
        });
    });
    
//    alert('<?php echo $_SESSION['userIntel']['panel']; ?>');
</script>
