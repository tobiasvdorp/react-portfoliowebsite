<?php
session_start();

require("../PHP-backend/database.php");
require("../PHP-backend/security.php");
require("../PHP-backend/accountmaken_be.php");

//Creates variable if first time page load.
if (!isset($_SESSION["error_login"])) {
    $_SESSION["error_login"] = ""; //Reset to zero if exist.
}

if ($_SESSION["Active"] == true) {
    echo "<script type='text/javascript'>window.top.location='./profiel.php';</script>";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inloggen</title>
    <link rel="stylesheet" href="../css/tailwindOutput.css" type="text/css">
    <link rel="stylesheet" href="../css/input.css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-900 text-gray-200  font-sans">

    <div class="overflow-hidden h-screen w-screen">
        <div class="h-full w-full">
            <div class="h-12 flex place-items-center justify-start absolute">
                <a href="../index.php"
                    class="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-gray-100 p-2 py-1 mx-2 sm:mx-4 mt-2 sm:mt-5 rounded-md text-xl font-medium  z-10">&larr;
                    Home</a>
            </div>

            <div
                class="w-full h-full grid grid-flow-col grid-cols-1 lg:grid-cols-[50%_50%] justify-center place-items-center">
                <div
                    class="w-full h-full hidden lg:flex flex-col justify-start shadow-2xl shadow-black text-gray-200 bg-[url('./bg.png')] bg-cover">
                    <div
                        class="w-full h-full bg-slate-800 bg-opacity-90 flex flex-col justify-center place-items-center">
                        <h1 class="text-center text-5xl font-semibold mb-1 underline decoration-blue-700 underline-offset-8 "
                            id="welkomTerugText">Welkom
                            terug!</h1>

                    </div>
                </div>


                <div>
                    <!-- Inloggen -->

                    <form action="" method="POST">
                        <div class="flex flex-col text-center">
                            <label for="inloggen"
                                class="text-2xl font-bold text-center text-white mb-2 ">Inloggen</label>

                            <?php
                            showError($_SESSION["error_login"]);
                            ?>

                            <div class="flex flex-col text-center items-center">
                                <input type="email" id="email" placeholder="Email" name="email"
                                    class="p-2 px-4 w-72 rounded-md shadow-md bg-gray-600 text-white mb-1" required>
                                <input type="password" id="password" placeholder="Wachtwoord" name="password"
                                    class="p-2 px-4 w-72 rounded-md shadow-md bg-gray-600 text-white">
                            </div>

                        </div>
                        <!-- Nog geen account? Maak er een aan of ga door als gast -->
                        <div class="flex flex-row  justify-center text-center items-center gap-6">
                            <!-- Wachtwoord vergeten -->
                            <a href="./passforgot.php" class="text-blue-500 text-sm">Wachtwoord vergeten</a>

                            <a href="./accountmaken.php" class="text-blue-500 text-sm">Account aanmaken</a>

                        </div>

                        <!-- Inloggen -->
                        <div class="flex flex-col gap-y-3 items-center text-center justify-center">
                            <!-- Inloggen button -->
                            <!-- SUBMIT -->
                            <div class="flex justify-center">
                                <input type="submit" name="login" value="Inloggen"
                                    class="button font-bold bg-blue-500 px-10 py-1 mt-3 rounded-md text-white mx-1" />
                            </div>
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
        case "error":
            echo '<div class="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg mt-2 mb-5" role="alert">
              <p>Er is iets fout gegaan.</p>
              </div>';
            break;
    }

    unset($_SESSION["error_login"]);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['login'])) {
    $email = $_POST["email"];
    $password = $_POST["password"];

    //Check if email exists in the database.
    if (checkEmailExist($email)) {
        if (checkPassword($email, $password)) {
            //Redirect user to profile and set all $_SESSION variables.
            $conn = Database_Con();
            $sql = "SELECT * FROM `Account` WHERE Email = '$email'";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $_SESSION["Id"] = $row["Account_ID"];
                    $_SESSION["Name"] = $row["Name"];
                    $_SESSION["Lastname"] = $row["Lastname"];
                    $_SESSION["Fullname"] = $row["Name"] . " " . $row["Lastname"];
                    $_SESSION["Phone"] = $row["Phone"];
                    $_SESSION["Email"] = $row["Email"];
                    $_SESSION["Admin"] = $row["Admin"];
                }
                $_SESSION["Active"] = true;
            }

            //When the session has been created and the user has logged in :
            if ($_SESSION["Active"] == true) {
                echo "<script type='text/javascript'>window.top.location='./profiel.php';</script>";
                exit;
            }
        } else {
            $_SESSION["error_login"] = "error";
            echo "<meta http-equiv='refresh' content='0'>";
        }
    } else {
        $_SESSION["error_login"] = "error";
        echo "<meta http-equiv='refresh' content='0'>";
    }
}


?>