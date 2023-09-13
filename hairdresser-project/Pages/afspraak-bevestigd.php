<?php class Afspraak
{
    public $title;
    public $hairlength;
    public $treatment;
    public $barber;
    public $date;
    public $time;

    public $name;
    public $email;

}
$Afspraak_1 = new Afspraak();
$Afspraak_1->title = "Appointment 1";
$Afspraak_1->hairlength = "Gemiddeld";
$Afspraak_1->treatment = "Baard bijwerken";
$Afspraak_1->barber = "Henk";
$Afspraak_1->date = "2023-28-01";
$Afspraak_1->time = "15:00";
$Afspraak_1->name = "Milan";
$Afspraak_1->email = "haarfijnmarjolein@gmail.com";
?>

<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Afspraak bevestigd </title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="../css/input.css" type="text/css" />
    <link rel="stylesheet" href="../css/tailwindOutput.css" type="text/css" />

</head>

<body class="bg-gray-900 text-black dark:text-white flex items-center h-screen  justify-center">


    <div class="flex flex-col gap-2 sm:gap-6 w-full justify-center items-center ">
        <h1 class="text-center text-3xl m-5 mb-2 whitespace-nowrap underline decoration-blue-700 underline-offset-8">
            Bedankt,
            <?php echo $Afspraak_1->name ?>!
        </h1>
        <h2 class="text-center ">
            Je afspraak is bevestigd. Wij kijken er erg naar uit om je te zien. Tot snel!
        </h2>
        <!-- Terug naar de homepagina -->
        <a href="../index.php"
            class="font-bold bg-blue-500 px-10 sm:px-20 py-1 mt-2 text-center rounded-md whitespace-nowrap mx-1 max-w-xs">Terug

            naar
            homepagina</a>
    </div>

</body>

</html>
<?php
// Include required phpmailer files
require '../phpmailer/includes/PHPMailer.php';
require '../phpmailer/includes/SMTP.php';
require '../phpmailer/includes/Exception.php';
// Define name spaces
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Create a new PHPMailer instance
$mail = new PHPMailer();
// Set mailer to use smtp
$mail->isSMTP();
// Define smtp host
$mail->Host = 'smtp.gmail.com';
// Enable smtp authentication
$mail->SMTPAuth = true;
// Set type of encryption (ssl/tls)
$mail->SMTPSecure = 'tls';
// Set port to connect smtp
$mail->Port = 587;
// Set gmail username
$mail->Username = 'haarfijnmarjolein@gmail.com';
// Set gmail password
$mail->Password = 'vmtaviidiovbturd';
// Mail is in HTML 
$mail->IsHTML(true);
// Set email subject
$mail->Subject = 'Uw afspraakbevestiging';
// Set sender email
$mail->setFrom('haarfijnmarjolein@gmail.com');
// Email body
$mail->Body =

    "<h2 style='font-weight:400;'>Beste " . $Afspraak_1->name . ", <br><br>    
    Bedankt voor het kiezen van Haarfijn Marjolein! <br>
    Uw afspraak is succesvol aangemaakt. Hierbij een overzicht van uw afspraakgegevens: <br> <br>
    <span style='font-weight:600;'>Haarlengte</span> " . $Afspraak_1->hairlength . " <br>  
    <span style='font-weight:600;'>Behandeling:</span> " . $Afspraak_1->treatment . " <br>
    <span style='font-weight:600;'>Kapper:</span> " . $Afspraak_1->barber . " <br>
    <span style='font-weight:600;'>Datum:</span> " . $Afspraak_1->date . " <br> 
    <span style='font-weight:600;'>Tijd:</span> " . $Afspraak_1->time . " <br><br>
    <a href='https://goo.gl/maps/yrWRgr7LJfonA2LM8' target:'_blank' style='box-shadow:inset 0px -3px 0px -1px #54a3f7;
	background-color:#007dc1;border-radius:4px;border:1px solid #124d77;display:inline-block;cursor:pointer;color:#ffffff;font-family:Trebuchet MS;font-size:15px;padding:6px 24px;text-decoration:none;'>Route</a> 
    <a href='http://localhost/webdev/kappersproject/pages/profiel.php' target:'_blank' style='box-shadow:inset 0px -3px 0px -1px #54a3f7;background-color:#007dc1;border-radius:4px;border:1px solid #124d77;display:inline-block;cursor:pointer;color:#ffffff;font-family:Trebuchet MS;font-size:15px;padding:6px 24px;text-decoration:none;'>Afspraken beheren</a> <br><br>
    Wij kijken er naar uit om u te zien! <br><br>
    Met vriendelijke groet, <br>
    Team Haarfijn Marjolein<br><br>
    <a href='http://localhost/webdev/kappersproject/index.php' target:'_blank' style='color:#007dc1;'>www.haarfijnmarjolein.nl</a>

    </h2>";

// Add a recipient
$mail->addAddress($Afspraak_1->email);
// Finally send the email
if ($mail->send()) {
    // Email sent
    echo '<div id="alert-border-3" class="message flex fixed top-4 p-4 mb-4 mx-2 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800 animated fadeInDown" role="alert">';
    echo '<svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>';
    echo '<div class="ml-3 text-sm font-medium">';
    echo 'U heeft een bevestigingsmail van uw afspraak ontvangen.';
    echo '</div>';
    echo '<button onclick="Sluiten()" type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-300 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">';
    echo '<span class="sr-only">Dismiss</span>';
    echo '<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
    echo '</button>';
    echo '</div>';

} else {
    // Failed to send email

    echo '<div id="alert-border-2" class="fixed top-4 message flex p-4 mb-4 mx-2 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">';
    echo '<svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>';
    echo '<div class="ml-3 text-sm font-medium">';
    echo 'Er is iets misgegaan met het versturen van de bevestigingsmail. Uw afspraak is wel gemaakt.';
    echo '</div>';
    echo '<button onclick="Sluiten()" type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-300 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">';
    echo '<span class="sr-only">Dismiss</span>';
    echo '<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
    echo '</button>';
    echo '</div>';

}
// Closing smtp connection
$mail->smtpClose(); ?>



<script src="../JS components/Sluiten.js"></script>