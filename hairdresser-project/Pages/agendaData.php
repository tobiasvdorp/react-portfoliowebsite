<?php
    // Parameters from JS function callMyAjax(func, $appID)
    $date = $_POST['date'];
    $function = $_POST['function'];
    $appID = $_POST['appID'];

    // Checks which function to run in the file
    if ($function == 0) { checkAppointments($date); }
    else if ($function == 1) { addAppointment($date); }
    else if ($function == 2) { delAppointment($appID, $date); }
    else if ($function == 3) { adjustAppointment($appID, $date); }

    function Database_con() {
        // New database connection
        $conn = new mysqli("localhost", "root", "", "hairforce_one");
        return $conn;
    }

    // Function to check for and return appointments on a specific date
    function checkAppointments($selectedDate) {
        // Make a connection to the database
        $conn = Database_con();

        // Get an array of appointments for the selected date
        $getAppointments = $conn -> query("SELECT * FROM appointment WHERE Date='$selectedDate' ORDER BY Time ASC");
        $index = 0;
        $appointments = array();
        while ($row = mysqli_fetch_assoc($getAppointments)) {
            $appointments[$index] = $row;
            $index++;
        }
        
        // Check if there are planned appointments on the selected date
        if (count($appointments) > 0) {
            foreach($appointments as $appointment) {
                // Using account ID to get the client's Name and Lastname from the database
                $acc_ID = $appointment['Account_ID'];
                $getAccounts = $conn->query("SELECT * FROM account WHERE Account_ID=$acc_ID");
                $accInfo = mysqli_fetch_assoc($getAccounts);

                // Set appointments to html on dashboard.php
                echo "<div class='p-4 bg-slate-700 border-l border-r border-b border-slate-400' id='appointment-" . $appointment['Id'] . "'><div class='absolute mt-2 right-32 text-6xl select-none hover:cursor-pointer hover:scale-110' onclick='adjustAppointment(" . $appointment['Id'] . ")'>&#9998;</div><div class='absolute mt-2 right-8 text-6xl select-none hover:cursor-pointer hover:scale-110' onclick='delAppointment(" . $appointment['Id'] . ")'>&#10060;</div><h1 class='text-2xl'><span id='appointment-" . $appointment['Id'] . "-appTime'>" . mb_substr($appointment['Time'], 0, -10) . "</span> | Kapper <span id='appointment-" . $appointment['Id'] . "-appBarber'>" . $appointment['Barber'] . "</span></h1><p><span id='appointment-" . $appointment['Id'] . "-appType'>" . $appointment['Type'] . "</span></p><p>" . $accInfo['Name'] . " " . $accInfo['Lastname'] . " - 0" . $accInfo['Phone'][0] . " " . substr($accInfo['Phone'], 1) . "</p></div>";

                if ($appointment === end($appointments)) {
                    echo "<div class='p-4 bg-slate-700 border-l border-r border-b border-slate-400 whitespace-nowrap' id='newAppointment'><h1 class='text-xl hover:cursor-pointer hover:underline' onclick='newAppointment()'>+ Nieuwe afspraak inplannen</h1></div>";
                }
            }
        }
        // If there are no appointments on selected date
        else {
            echo "<div class='p-4 bg-slate-700 border-l border-r border-b border-slate-400'><h1 class='text-2xl'>Er staan op deze dag geen afspraken gepland...</h1></div>";
            echo "<div class='p-4 bg-slate-700 border-l border-r border-b border-slate-400 whitespace-nowrap' id='newAppointment'><h1 class='text-xl hover:cursor-pointer hover:underline' onclick='newAppointment()'>+ Nieuwe afspraak inplannen</h1></div>";
        }

        // Close the connection to the database
        $conn -> close();
    }

    // Function to add an appointment on the selected date
    function addAppointment($selectedDate) {
        $time = $_POST['time'];
        $type = $_POST['type'];
        $barber = $_POST['barber'];
        $phone = $_POST['phone'];

        // Making sure phone is using the correct format
        $data_phone = trim(substr($phone, 1));
        $data_phone = str_replace(" ", "", $data_phone);

        // Make a connection to the database
        $conn = Database_con();

        // Make a new 'Gast' account for this specific phone number
        $query1 = "INSERT INTO account (Name, Phone, Admin)
                VALUES ('Gast', '$data_phone', 1)";
        $conn->query($query1);

        // Get the account ID from the new guest account
        $query2 = "SELECT Account_ID FROM account
                WHERE Phone='$data_phone'";
        $result = $conn->query($query2);
        $row = $result->fetch_assoc();
        $acc_ID = $row['Account_ID'];

        // Insert the new appointment into database
        $query3 = "INSERT INTO appointment (Account_ID, Type, Barber, Date, Time)
                VALUES ('$acc_ID', '$type', '$barber', '$selectedDate', '$time')";
        $conn->query($query3);

        // Close the connection to the database
        $conn -> close();

        // Check and return the new list of appointments
        checkAppointments($selectedDate);
    }

    // Function to delete a specific appointment
    function delAppointment($appID, $selectedDate) {
        // Make a connection to the database
        $conn = Database_con();

        // Getting the appointment's connected account ID
        $query1 = "SELECT Account_ID FROM appointment
                WHERE Id='$appID'";
        $result = $conn->query($query1);
        $row = $result->fetch_assoc();
        $acc_ID = $row['Account_ID'];

        // Deleting the connected account if it is a guest account (no password)
        $query2 = "DELETE FROM account
                WHERE Account_ID='$acc_ID' AND Password=''";
        $conn->query($query2);

        // Deleting the appointment
        $query3 = "DELETE FROM appointment
                WHERE Id = '$appID'";
        $conn->query($query3);

        // Close the connection to the database
        $conn -> close();

        // Check and return the new list of appointments
        checkAppointments($selectedDate);
    }

    // Function to adjust a specific appointment
    function adjustAppointment($appID, $selectedDate) {
        $newDate = $_POST['adjustDate'];
        $time = $_POST['adjustTime'];
        $type = $_POST['adjustType'];
        $barber = $_POST['adjustBarber'];

        // Make a connection to the database
        $conn = Database_con();
        $query = "UPDATE appointment 
                SET Time = '$time', Date = '$newDate', Type = '$type', Barber = '$barber'
                WHERE Id = '$appID'";
        $conn->query($query);

        // Close the connection to the database
        $conn -> close();

        // Check and return the new list of appointments
        checkAppointments($selectedDate);
    }
?>
