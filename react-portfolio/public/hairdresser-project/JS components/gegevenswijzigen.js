function GegevensAanpassen() {
  document.getElementById("email").disabled = false;
  document.getElementById("email").placeholder = "test@test.com";

  document.getElementById("phone").disabled = false;
  document.getElementById("phone").placeholder = "06-12345678";

  document.getElementById("opslaan").style.display = "block";
}
