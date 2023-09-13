<?php
    session_start(); //Starts session.

    if($_SESSION["Active"] != true){
        if ($_SESSION["Admin"] != 2 || $_SESSION["Admin"] != 1) {
            echo "<script type='text/javascript'>window.top.location='../index.php';</script>";
            exit;
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/tailwindOutput.css" type="text/css">
    <title>Agenda</title>

    <style>
        #date-input::-webkit-calendar-picker-indicator {
            position: absolute;
            width: 100%;
        }
    </style>
    <script src="../JS components/dashboard.js"></script>
</head>

<body class="h-screen w-screen text-gray-100 overflow-x-hidden bg-gray-900">
    <div class="h-full w-full grid md:grid-cols-[16rem_1fr] grid-cols-1">
        <!-- Sidebar -->
        <aside class="w-64 h-screen hidden md:block" aria-label="Sidebar">
            <div class="px-3 py-4 h-screen fixed flex flex-col bg-gray-50 dark:bg-gray-800">

                <!-- Sidebar profiel knop-->
                <div class="flex items-center hover:cursor-pointer hover:bg-gray-500 rounded p-4"
                    onclick="sideBarNav(1)">
                    <img class="w-10 h-10 rounded-full" src="../src/henk.jpeg">
                    <span class="m-2 select-none text-xl">Henk de Lange</span>
                </div>

                <!-- Sidebar agenda knop-->
                <div class="flex mb-auto items-center hover:cursor-pointer hover:bg-gray-500 rounded p-4 mt-4"
                    onclick="sideBarNav(2)">
                    <svg aria-hidden="true"
                        class="w-8 h-12 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="m-2 select-none text-xl">Agenda</span>
                </div>

                <!-- Sidebar uitloggen knop -->
                <div class="flex mt-auto items-center hover:cursor-pointer hover:bg-gray-500 rounded p-4" onclick="window.top.location='../index.php?uitloggen=true';">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none"
                        class="flex-shrink-0 w-6 h-12 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.402954 10C0.402954 10.2652 0.508311 10.5196 0.695848 10.7071C0.883384 10.8946 1.13774 11 1.40295 11H8.99295L6.69295 13.29C6.59923 13.383 6.52483 13.4936 6.47406 13.6154C6.42329 13.7373 6.39716 13.868 6.39716 14C6.39716 14.132 6.42329 14.2627 6.47406 14.3846C6.52483 14.5064 6.59923 14.617 6.69295 14.71C6.78592 14.8037 6.89652 14.8781 7.01838 14.9289C7.14024 14.9797 7.27094 15.0058 7.40295 15.0058C7.53497 15.0058 7.66567 14.9797 7.78753 14.9289C7.90939 14.8781 8.01999 14.8037 8.11295 14.71L12.113 10.71C12.204 10.6149 12.2754 10.5028 12.323 10.38C12.423 10.1365 12.423 9.86346 12.323 9.62C12.2754 9.49725 12.204 9.3851 12.113 9.29L8.11295 5.29C8.01972 5.19676 7.90903 5.1228 7.7872 5.07234C7.66538 5.02188 7.53481 4.99591 7.40295 4.99591C7.27109 4.99591 7.14053 5.02188 7.0187 5.07234C6.89688 5.1228 6.78619 5.19676 6.69295 5.29C6.59972 5.38324 6.52575 5.49393 6.47529 5.61575C6.42483 5.73757 6.39886 5.86814 6.39886 6C6.39886 6.13186 6.42483 6.26243 6.47529 6.38425C6.52575 6.50607 6.59972 6.61676 6.69295 6.71L8.99295 9H1.40295C1.13774 9 0.883384 9.10536 0.695848 9.29289C0.508311 9.48043 0.402954 9.73478 0.402954 10V10ZM13.403 0H3.40295C2.6073 0 1.84424 0.316071 1.28163 0.87868C0.719025 1.44129 0.402954 2.20435 0.402954 3V6C0.402954 6.26522 0.508311 6.51957 0.695848 6.70711C0.883384 6.89464 1.13774 7 1.40295 7C1.66817 7 1.92252 6.89464 2.11006 6.70711C2.2976 6.51957 2.40295 6.26522 2.40295 6V3C2.40295 2.73478 2.50831 2.48043 2.69585 2.29289C2.88338 2.10536 3.13774 2 3.40295 2H13.403C13.6682 2 13.9225 2.10536 14.1101 2.29289C14.2976 2.48043 14.403 2.73478 14.403 3V17C14.403 17.2652 14.2976 17.5196 14.1101 17.7071C13.9225 17.8946 13.6682 18 13.403 18H3.40295C3.13774 18 2.88338 17.8946 2.69585 17.7071C2.50831 17.5196 2.40295 17.2652 2.40295 17V14C2.40295 13.7348 2.2976 13.4804 2.11006 13.2929C1.92252 13.1054 1.66817 13 1.40295 13C1.13774 13 0.883384 13.1054 0.695848 13.2929C0.508311 13.4804 0.402954 13.7348 0.402954 14V17C0.402954 17.7956 0.719025 18.5587 1.28163 19.1213C1.84424 19.6839 2.6073 20 3.40295 20H13.403C14.1986 20 14.9617 19.6839 15.5243 19.1213C16.0869 18.5587 16.403 17.7956 16.403 17V3C16.403 2.20435 16.0869 1.44129 15.5243 0.87868C14.9617 0.316071 14.1986 0 13.403 0Z"
                            fill="white" />
                    </svg>
                    <span class="m-2 select-none text-xl">Uitloggen</span>
                </div>
            </div>
        </aside>

        <!-- Agenda tab -->
        <div class="w-full h-full flex justify-start place-items-start col-start-2" id="agenda">
            <div class="bg-gray-900 m-8 w-full">
                <div class="relative">
                    <input
                        class="text-black text-xl md:text-3xl p-4 rounded-t-xl text-center w-full bg-slate-300 border-2 border-slate-400"
                        type="date" id="date-input" onchange="callMyAjax(0, 0)">
                    <div
                        class="absolute h-full w-full left-0 top-0 hidden md:flex items-center justify-center pointer-events-none">
                        <button style="pointer-events: all;"
                            class="text-gray-800 text-6xl rounded-full focus:outline-none hover:scale-110 rotate-180 mt-4"
                            id="prev" onclick="previousDate()">
                            <span>&#10142;</span>
                        </button>
                        <button style="pointer-events: all;"
                            class="text-gray-800 text-6xl rounded-full focus:outline-none hover:scale-110 ml-64 mt-0"
                            id="next" onclick="nextDate()">
                            <span>&#10142;</span>
                        </button>
                    </div>
                </div>
                <div id="appointmentOutput">
                    <div class='p-4 bg-slate-700 border-l border-r border-b border-slate-400'>
                        <h1 class='text-2xl'>Selecteer een dag.</h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- User tab -->
        <div class="h-full w-full hidden col-start-2" id="user">
            <div class="container mx-auto my-5">
                <div class="md:flex no-wrap md:-mx-2 ">
                    <div class="my-4"></div>
                </div>
                <div class="w-full md:w-9/12 mx-2 h-64">
                    <img class="ml-8 border-2 border-blue-700 rounded-xl" src="../src/henk.jpeg" alt="">
                    <div class="bg-gray-900 p-3 shadow-sm rounded-sm">
                        <div class="flex items-center space-x-2 font-semibold text-white leading-8">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">Persoonlijke informatie</span>
                        </div>
                        <div class="text-white">
                            <div class="grid md:grid-cols-2 text-sm">
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Voornaam</div>
                                    <div class="px-4 py-2">Henk</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Achternaam</div>
                                    <div class="px-4 py-2">de Lange</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">geslacht</div>
                                    <div class="px-4 py-2">Vrouw</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">telefoonnummer</div>
                                    <div class="px-4 py-2">+06123123123</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Current Address</div>
                                    <div class="px-4 py-2">Utrecht Centraal, Utrecht, Nederland</div>
                                </div>

                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Email</div>
                                    <div class="px-4 py-2">
                                        <a class="text-white"
                                            href="mailto:jane@example.com">geweldigeEmail@hotmail.com</a>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Geboortedatum</div>
                                    <div class="px-4 py-2">05-21-2001</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4"></div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>