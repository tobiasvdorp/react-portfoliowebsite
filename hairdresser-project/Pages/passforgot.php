<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wachtwoord vergeten</title>
    <link rel="stylesheet" href="../css/tailwindOutput.css" type="text/css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-900 text-gray-200 font-sans flex items-center justify-center h-screen">
    <div class="">
        <!-- Wachtwoord vergeten container -->
        <div class="justify-center items-center md:w-[40vw] sm:w-[60vw] " id="wachtwoordVergetenBlok">
            <!-- Titel -->
            <h1
                class="text-center text-3xl m-5 mt-0 sm:mt-5 mb-2 text-black dark:text-white underline decoration-blue-700 underline-offset-8">
                Wachtwoord vergeten?
            </h1>
            <div class=" h-1/2 flex flex-col justify-center">
                <!-- Text -->
                <h2 class="text-center  text-md  mt-4 mx-4  text-white">
                    Geen
                    probleem!
                    Vul
                    hier jouw
                    email-adres
                    in, je ontvangt zo snel mogelijk instructies voor het resetten van jouw wachtwoord.</h2>
                <!-- Input, versturen, terug naar login -->
                <div class="flex flex-col justify-start place-items-center m-3">
                    <div class="w-80 my-2 flex flex-col justify-center place-items-center">
                        <!-- Input -->
                        <input type="email" id="email" placeholder="Vul hier jouw email-adres in"
                            class="p-2 px-4 w-72 rounded-md shadow-md bg-gray-600 text-white mb-1" required>
                    </div>
                    <!-- Versturen / terug naar login -->
                    <div class=" m-auto">
                        <div class="w-full h-full flex flex-col justify-center place-items-center">
                            <!-- Versturen button -->
                            <button type="submit"
                                class="py-2 font-semibold px-8 rounded-md bg-blue-700 text-md hover:bg-blue-800  shadow-black text-white">Email
                                versturen</button>
                            <!-- terug naar login -->
                            <a href="./login.php" class="text-sm mt-1 text-blue-600 underline hover:text-blue-400">Terug
                                naar login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>