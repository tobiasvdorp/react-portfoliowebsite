<?php 
  //Encrypt Password
  function encryptPassword($password){
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    return $hashed_password;
  }

  //Check if the given database exists in the database.
  function checkEmailExist($email){
    if(Database_Query_Fetch("SELECT * FROM `Account` WHERE Email = '$email'")){
      return TRUE;
    }else{
      return FALSE;
    }
  }

function checkPassword($email, $password)
{
  $result = Database_Fetch_Row("SELECT * FROM `Account` WHERE Email = '$email'");

  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      $hash = $row["Password"];
    }
  }

  return password_verify($password, $hash);
}

?>