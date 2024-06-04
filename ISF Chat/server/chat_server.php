<!-- Handling the logout of the user -->
<?php
  require_once('DB.php');
  $db = DB::getInstance();
  session_start();

  if(isset($_POST['logout'])) 
  {
      $uid = $_SESSION['uid'];
      $query = "UPDATE users SET online=0, logout_timestamp=CURRENT_TIMESTAMP() WHERE id=$uid";

      session_unset();
      session_destroy();

      if($db->query($query) === true){
        header("refresh:0;url=../");
      }
  } 
?>