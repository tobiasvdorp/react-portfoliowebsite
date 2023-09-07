<h2
    class="text-center text-3xl text-black  underline decoration-blue-700 underline-offset-8 font-semibold tracking-tight xl:text-4xl dark:text-white">
    Contact opnemen
</h2>
<!-- Contactform Flexbox -->
<div class="flex pt-2 m-2 sm:m-10 min-h-screen justify-center items-center" id="contact">
    <div
        class="flex dark:bg-blue-900  bg-gray-300  flex-col space-y-6 bg-cyn-700 w-full max-w-4xl p-3 sm:p-8 rounded-xl shadow-lg text-black dark:text-white">
        <div class="flex flex-col space-y-8 justify-between">


            <div>
                <!-- eerst alinea tekst  -->
                <h1 class="font-bold text-4xl tracking-wide">Contact ons!</h1>
                <p class="pt-2 text-sm"> Heb je vragen over onze praktijk of over onze diensten, stel ze gerust. We
                    proberen altijd binnen 24uur te reageren. Wil je sneller antwoord stuur dan een berichtje via
                    Whatsapp!
                </p>
            </div>

            <!-- Telefoonnummer met icon -->
            <div class="flex space-x-2 mb-10 items-center">
                <ion-icon name="chatbubble" class=" text-xl"></ion-icon>
                <span><a href="tel: +31 6 43114064">+31 6 22233322</a> </span>
            </div>

            <div>
                <!-- Email adres met icon  -->
                <div class="flex space-x-2 mb-10 items-center">
                    <ion-icon name="call" class="text-xl"></ion-icon>
                    <span><a href="mailto:Kappers@gmail.com">Kappers@gmail.com</a> </span>
                </div>
                <!--  Adres met icon  -->

                <div class="flex space-x-2 mb-10 items-center">
                    <ion-icon name="map" class=" text-xl"></ion-icon>
                    <span><a target="_blank"
                            href="https://www.google.com/maps/place/Hogeschool+Utrecht/@52.084651,5.1673684,15.79z/data=!4m9!1m2!2m1!1shu+in+de+buurt+van+Utrecht!3m5!1s0x47c6689b62bdb759:0x83518b0adbb1ee05!8m2!3d52.0836191!4d5.1737955!15sChpodSBpbiBkZSBidXVydCB2YW4gVXRyZWNodCIDiAEBkgEXZWR1Y2F0aW9uYWxfaW5zdGl0dXRpb27gAQA">De
                            Utrechtste weg 245</a> </span>
                </div>
            </div>

            <!-- De socials -->


            <div class="flex space-x-4 text-lg">
                <a href="https://www.facebook.com/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://www.instagram.com/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://www.twitter.com/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
            </div>
        </div>

        <!-- Invullen email -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 text-gray ">
            <form action="https://formsubmit.co/tobiasvandorp@gmail.com" class="space-y-8" method="POST">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium dark:text-white">Je
                        email</label>
                    <input type="email" id="email"
                        class="shadow-sm  text-white mb-1 border border-gray-300 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Email@gmail.com" required>
                </div>
                <!-- Invullen onderwerp -->
                <div>
                    <label for="subject"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Onderwerp</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Laat ons weten hoe we je kunnen helpen" required>
                </div>
                <!-- Invullen Bericht -->
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Je
                        bericht</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Laat een bericht achter..."></textarea>
                </div>
                <button type="submit"
                    class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-700  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verstuur
                    bericht</button>
            </form>
        </div>
    </div>
</div>





<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>