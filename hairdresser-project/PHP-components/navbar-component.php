<!-- Navbar -->
<nav style="position: fixed; width: 100%;"
  class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-t-none rounded-b dark:bg-gray-900 sticky top-0 z-40 duration-1000 transition-all">
  <!-- Navbar container -->
  <div class="flex flex-wrap items-center justify-between mx-auto max-w-[100rem]">
    <!-- Logo  -->
    <a href="" class="dark:invert block md:hidden lg:block">
      <img src="./src/Icons/logo.png" class="h-10 mr-3 mt-1" alt="Logo" />
    </a>

    <!-- Afspraak button -->
    <div class="flex md:order-2 afspraak-button">
      <button type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 transition-all duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
        onclick="window.location.href='./Pages/afspraak-maken.php'">
        Afspraak maken
      </button>

      <!-- Hamburger button -->
      <button onclick="navbar()" data-collapse-toggle="navbar-cta" type="button"
        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only"></span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>

    <!-- Navbar pagina-items -->
    <div class="items-center justify-between w-full md:flex md:w-auto md:order-1 hidden transition-all duration-1000"
      id="navbar-cta">
      <ul
        class="flex lg:gap-x-8 gap-x-1 gap-y-1 flex-col p-4 mt-4 border transition-all duration-1000 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#home"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            aria-current="page">Home</a>
        </li>
        <li>
          <a href="#onswerk"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 duration-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ons
            werk</a>
        </li>
        <li>
          <a href="#behandelingen"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 duration-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Behandelingen</a>
        </li>
        <li>
          <a href="#onsteam"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 duration-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ons
            team</a>
        </li>
        <li>
          <a href="#contact"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 duration-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
        <li>
          <a href="./pages/login.php"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 duration-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><?php if ($_SESSION["Active"] == true) {
              echo "Profiel";
            } else {
              echo "Inloggen"; }; ?></a>
        </li>
        <?php
            if (isset($_SESSION["Admin"])) {
              if ($_SESSION["Admin"] == 1 || $_SESSION["Admin"] == 2) {
                echo "<li><a href='./pages/dashboard.php' class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 duration-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Dashboard</a></li>";
              }
            }
        ?>
      </ul>
    </div>
  </div>
</nav>
