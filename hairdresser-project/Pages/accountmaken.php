<?php
session_start();

require("../PHP-backend/database.php");
require("../PHP-backend/security.php");
require("../PHP-backend/accountmaken_be.php");

if (!isset($_SESSION["error_register"])) {
  $_SESSION["error_register"] = "";
}
?>

<!DOCTYPE HTML>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Account aanmaken</title>
  <link rel="stylesheet" href="../css/input.css" type="text/css" />
  <link rel="stylesheet" href="../css/style.css" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-900 text-gray-200 w-screen h-screen font-sans flex items-center justify-center overflow-x-hidden">
  <div class="flex justify-center items-center  ">
    <!-- Nieuw account aanmaken -->
    <div id="accountAanmakenBlok" class="">
      <div class="flex flex-col m-2">
        <h1
          class="text-center text-3xl m-5 mb-2 text-black dark:text-white underline decoration-blue-700 underline-offset-8">
          Account aanmaken
        </h1>
        <h2 class="text-center whitespace-normal">
          Vul het formulier in om een account te maken.
        </h2>

        <!-- Error message -->
        <?php
        showError($_SESSION["error_register"]);
        ?>
        <!-- End of error message -->

      </div>
      <div class="flex justify-center mx-2 my-5">
        <!-- Account aanmaken gegevens container -->
        <form action="accountmaken.php" method="POST"
          class="m-4 lg:m-8 p-4 bg-gray-800 border shadow-2xl border-blue-700">
          <!-- NAAM -->
          <div class="flex flex-row flex-wrap gap-2">
            <!-- Voornaam -->
            <div class="flex-col flex">
              <label for="name" class="text-">Voornaam</label>
              <input type="text" name="name"
                class="px-4 w-40 lg:w-64 py-1 rounded-md shadow-md bg-gray-600 text-white mb-1" required />
            </div>
            <!-- Tussenvoegsel -->
            <div class="flex-col flex">
              <label for="extra">Tussenvoegsel</label>
              <input type="text" name="name_extra"
                class="px-4 w-28 py-1 rounded-md shadow-md bg-gray-600 text-white mb-1" />
            </div>
            <!-- Achternaam -->
            <div class="flex-col flex">
              <label for="lastname">Achternaam</label>
              <input type="text" name="lastname"
                class="px-4 py-1 w-40 lg:w-64 rounded-md shadow-md bg-gray-600 text-white mb-1" required />
            </div>
          </div>

          <div class="flex flex-row gap-2 flex-wrap">
            <!-- EMAIL -->
            <div class="flex flex-col flex-wrap w-64">
              <label for="email">E-mail</label>
              <input type="email" name="email" class="px-4 py-1 w-64 rounded-md shadow-md bg-gray-600 text-white mb-1"
                required />
            </div>
            <!-- TELEFOONNUMMER -->
            <div class="flex flex-col flex-wrap w-64">
              <label for="phone">Telefoonnummer</label>
              <input type="tel" name="phone"
                class="px-4 py-1 w-40 lg:w-64 rounded-md shadow-md bg-gray-600 text-white mb-1" required />
            </div>
          </div>

          <!-- PASSWORD -->
          <div class="flex flex-row gap-3 flex-wrap">
            <div class="flex flex-col flex-wrap">
              <label for="password">Wachtwoord</label>
              <input type="password" name="password"
                class="px-4 w-40 lg:w-64 rounded-md shadow-md bg-gray-600 text-white mb-1 py-1" required />
            </div>

            <!-- PASSWORD 2 -->
            <div class="flex flex-col flex-wrap">
              <label for="password_v">Herhaal wachtwoord</label>
              <input type="password" name="password_v"
                class="px-4 w-40 lg:w-64 rounded-md shadow-md bg-gray-600 text-white mb-1 py-1" required />
            </div>
          </div>

          <!-- SUBMIT -->
          <div class="flex justify-center">
            <input type="submit" name="register" value="Account aanmaken"
              class="button font-bold bg-blue-500 px-10 py-1 mt-8 rounded-md text-white mx-1" />
          </div>
        </form>
      </div>
    </div>
  </div>
</body>

</html>

<?php

function showError($i)
{
  switch ($i) {
    case "pwMatch":
      echo '<div class="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg mt-20" role="alert">
              <p>De ingevulde wachtwoorden komen niet overeen.</p>
              </div>';
      break;
    case "emailExists":
      echo '<div class="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg mt-20" role="alert">
             <p>Er is al een account met het ingevulde email address.</p>
             </div>';
      break;
  }


  //remove session variable :
  unset($_SESSION["error_register"]);
}

//Get information from form :
if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['register'])) {
  $name = $_POST["name"];
  $name_extra = $_POST["name_extra"];
  $lastname = $name_extra . " " . $_POST["lastname"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  $password_v = $_POST["password_v"];
  $phone = "0625540909"; //UPDATE ME TO BE A POST!!!!

  //Check if Passwords match : 
  $encrypted_password = checkMatchingPasswords($password, $password_v);
  //If password don't match :
  if ($encrypted_password == NULL) {
    $_SESSION["error_register"] = "pwMatch";
    echo "<meta http-equiv='refresh' content='0'>";
  } else {
    //Check if email exists in the database : 
    if (checkEmailExist($email)) {
      $_SESSION["error_register"] = "emailExists";
      echo "<meta http-equiv='refresh' content='0'>";
    } else {
      //Create account in database : 
      $sql = "INSERT INTO Account 
        (Email, Password, Name, Lastname, Phone, Admin) VALUES 
        ('$email', '$encrypted_password', '$name', '$lastname', '$phone', '2')";

      //Run query.
      if (Database_Query_Bool($sql) === TRUE) {
        echo '<script>alert("Show Successful message and redirect to home page.")</script>';

      } else {
        echo '<script>alert("Show error that the query didnt upload.")</script>';
      }
    }

  }

}

?>