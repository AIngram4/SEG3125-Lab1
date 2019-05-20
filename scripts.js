function setRestaurantFunction()
{
    document.getElementById("restaurant_button_1").addEventListener("click", goToMenu);
}

var goToMenu = function()
{
    window.location.href = "menu_page_2.html";
}

setRestaurantFunction();
