<?php

  //Check if both passwords that are filled in match.
  function checkMatchingPasswords($password1, $password2){
    if($password1 == $password2){
      //Encrypt password and send back.
      return encryptPassword($password1);
    }else{
      //Else return null.
      return NULL;
    }
  }
?>