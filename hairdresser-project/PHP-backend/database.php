<?php
  //connect to database
  function Database_Con(){
    //Create a connection with the database :
    $conn = new mysqli("localhost", "root", "", "hairforce_one");

    return $conn;
  }

  //Run Query to database
  function Database_Query_Bool($query){
    //Create database connection : 
    $conn = Database_Con();

    if ($conn->query($query) === TRUE) {
      //If query runs, return true.
      return TRUE;
    } else {
      //If query doesn't run, return false.
      return FALSE;
    }
  }

  function Database_Query_Fetch($query){
    //Create database connection : 
    $conn = Database_Con();

    //Get result from database : 
    $result = $conn->query($query);
    if(mysqli_num_rows($result) == 0){
      //returns NULL when fetch is empty.
      return NULL;
    }else{
      //returns result from fetch.
      return $result;
    }
  }

  function Database_Fetch_Row($query){
    $conn = Database_Con();

    $result = $conn->query($query);

    return $result;
  }

?>