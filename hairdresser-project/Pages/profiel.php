<?php
session_start(); //Starts session.

if ($_SESSION["Active"] != true) {
  echo "<script type='text/javascript'>window.top.location='../index.php';</script>";
  exit;
}

class Afspraak
{
  public $title;
  public $description;
  public $date;
  public $time;
  public $barber;
}

$Afspraken_array = array();
$Account_ID = $_SESSION["Id"];

//Connection to dabase : 
$conn = new mysqli("localhost", "root", "", "hairforce_one"); // Create connection

$sql = "SELECT * FROM Appointment WHERE Account_Id = '12'"; //$Account_ID

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $temp_afspraak = new Afspraak();
    $temp_afspraak->title = "Afspraak";
    $temp_afspraak->description = $row["Type"];
    $temp_afspraak->date = $row["Date"];
    $temp_afspraak->time = $row["Time"];
    $temp_afspraak->barber = $row["Barber"];

    array_push($Afspraken_array, $temp_afspraak);
  }
} else {
  echo '<script>alert("No Afspraaken Results.")</script>';
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profiel</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="../JS components/gegevenswijzigen.js"></script>
  <link rel="stylesheet" href="../css/tailwindOutput.css" type="text/css">
</head>

<body class="bg-gray-900 sm:w-screen w-[133vw]">

  <!-- Uitloggen -->
  <div class="flex justify-between">
    <a class="bg-blue-600 hover:bg-blue-700 transition-all duration-200 py-1 px-3 m-3 rounded-md text-white"
      href="../index.php"> &larr;
      Home</a>
    <a href="../index.php?uitloggen=true" class="flex flex-row gap-1 items-center justify-end m-2">
      <img src="../src/Icons/logout2.png" alt="uitloggen" class="h-5 invert" />
      <h3 class="text-white font-semibold text-right">Uitloggen</h3>
    </a>
  </div>

  <div class="flex items-center justify-center">
    <div>
      <!-- Titel welkom -->
      <div>
        <h2
          class="text-center text-[3rem] m-5 mb-10 text-black dark:text-white underline decoration-blue-700 underline-offset-8">
          Welkom, <?= $_SESSION["Name"] ?>
        </h2>
      </div>

      <!-- Gegevens en afspraken flex container -->
      <div class="flex flex-col md:flex-row flex-wrap md:justify-center gap-10 lg:gap-30 mx-2">
        <!-- Mijn gegevens container -->
        <form action="profiel.php" method="POST">
          <div class="flex flex-col items-center text-white">
            <h2 class="text-3xl text-white text-center mb-2">Mijn gegevens</h2>
            <!-- Gegevens vak -->
            <div class="border-8 h-96 border-blue-700 px-20 py-10 pt-7 flex flex-col text-center gap-1 bg-gray-500">
              <h3 class="text-xl font-bold underline">Naam</h3>
              <input type="text" id="naam" name="name" disabled class="text-center placeholder-black capitalize"
                placeholder="<?= $_SESSION["Fullname"] ?>"></input>
              <h3 class="text-xl font-bold underline">Telefoonnummer</h3>
              <input type="number" id="phone" name="phone" disabled class="text-center placeholder-gray-700 text-black"
                value="<?= $_SESSION["Phone"] ?>"></input>
              <h3 class="text-xl font-bold underline">E-mail</h3>
              <input type="text" id="email" name="email" disabled class="text-center placeholder-gray-700 text-black"
                value="<?= $_SESSION["Email"] ?>"></input>


              <button href="#" id="opslaan" name="save_changes"
                class="bg-blue-500 mt-10 hidden -mb-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Opslaan
              </button>

        </form>

        <!-- Gegevens aanpassen / wachtwoord veranderen -->
        <div class="flex flex-col flex-wrap items-center justify-center mt-10 gap-2">
          <a href="#" onclick="GegevensAanpassen();">
            <h3 id="gegevensaanpassen" class="text-white underline font-semibold whitespace-nowrap">
              Gegevens aanpassen
            </h3>
          </a>
          <a href="">
            <h3 class="text-white underline font-semibold whitespace-nowrap">
              Wachtwoord veranderen
            </h3>
          </a>
        </div>
      </div>
    </div>

    <!-- Mijn afspraken container -->
    <div class="flex flex-col items-center text-white">
      <h2 class="text-3xl text-white text-center mb-2">Mijn afspraken</h2>
      <!-- Afspraken vak -->
      <div class="border-8 h-96 border-blue-600 p-2 pt-5 flex flex-col text-center gap-1 bg-gray-500 overflow-auto">
        <h3 class="text-center">Geplande afspraken</h3>
        <?php
        for ($i = 0; $i < count($Afspraken_array); $i++) {
          // Afspraak container
          echo "<div class='appointment border w-96'>";
          // Row container
          echo "<div class='flex flex-row divide-x'>";
          // Left container
          echo "<div class='flex flex-col mr-1 items-center justify-center divide-y w-1/2 py-2'>";
          echo "<h3 class='appointment_title font-bold'>" . $Afspraken_array[$i]->title . "</h3>";
          echo "<hr />";
          // Datum en tijd container
          echo "<div class='flex flex-row gap-2'>";
          echo "<h3 class='float-left'>" . $Afspraken_array[$i]->date . " om " . mb_substr($Afspraken_array[$i]->time, 0, -10) . "</h3>";
          echo "</div></div>";
          // Right container
          echo "<div class='flex flex-row items-center gap-6'>";
          echo "<h3 class='ml-3  text-center'>Medewerker: <span class='capitalize'>" . $Afspraken_array[$i]->barber . "</span></h3>";

          echo "</div></div></div>";
        }
        ?>
      </div>
    </div>
  </div>
  </div>
  </div>
</body>

</html>

<?php
function checkEmail($_email)
{
  //Create SQL Query to check if email exists.
  $sql = "SELECT * FROM `Account` WHERE Email = '$_email'";

  $conn = new mysqli("localhost", "root", "", "hairforce_one"); // Create connection

  $results = $conn->query($sql);

  $row = $results->fetch_assoc();

  return (is_array($row) && count($row) > 0);
}

function uploadChanges($_Email, $_Phone)
{

  //Connection to dabase : 
  $conn = new mysqli("localhost", "root", "", "hairforce_one"); // Create connection

  $Account_ID = $_SESSION["Id"];

  if (checkEmail($_Email) == 1 && $_Email != $_SESSION["Email"]) {
    echo '<script>alert("Email already exists!")</script>';
  } else {
    //Create SQL Query :
    $sql = "UPDATE Account SET Email = '$_Email', Phone = '$_Phone' WHERE Account_ID = '$Account_ID'";
    echo $sql;

    //Run SQL Query
    if ($conn->query($sql) === TRUE) {
      $_SESSION["Email"] = $_Email;
      $_SESSION["Phone"] = $_Phone;
      echo "<meta http-equiv='refresh' content='0'>";
    } else {
      echo '<script>alert("Error with uploading query")</script>';
    }
  }

}


if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['save_changes'])) {
  uploadChanges($_POST["email"], $_POST["phone"]);
}

?>