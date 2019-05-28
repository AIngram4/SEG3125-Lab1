/* OBJECTS */
var foodItem = function(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = 0;
};

var cart = {
    items: [],
    total: 0,
};

var removeItem = function (id) {
    if (cart.items[id] > 0) {
        cart.items[id].qty--;
        cart.total -= cart.items[id].price;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

var addItem = function(id) {
    console.log(id);
    cart.items[id].qty++;
    cart.total += cart.items[id].price;
    localStorage.setItem('cart', JSON.stringify(cart));
};

function setButtonFunctions()
{
    var numRestaurants = 9;
    var numMenuItems = 3;

    var goToMenu = function()
    {
        window.location.href = "menu_page.html";
    }

    if (document.title == "Restaurant List")
    {
        for (var i = 1; i <= numRestaurants; i++)
        {
            document.getElementById("restaurant_button_" + i).addEventListener("click", goToMenu);
        }
    }
    else if (document.title == "Menu")
    {
        var storedCart = JSON.parse(localStorage.getItem('cart'));
        if ( storedCart != undefined)
        {
            cart = storedCart;
            console.log("meep");
        }
        else
        {
            for (var i = 0; i < numMenuItems; i++)
            {
                var item = document.getElementById("menu_item_" + (i + 1));
                var itemObj = new foodItem(i - 1, item.querySelector(".menu_name").innerHTML, parseFloat(item.querySelector(".item_price").innerHTML.replace("$", "")));
                cart.items[i] = itemObj;
            }
        }
        for (var i = 0; i < numMenuItems; i++)
        {
            (function() {
                var id = i;
                document.getElementById("menu_item_" + (id + 1)).addEventListener("click", function(){addItem(id)});
            }());
        }
    }
}

var initShoppingCart = function()
{
    var storedCart = JSON.parse(localStorage.getItem('cart'));
    var itemHTML = "<div class=\"item\" id=\"\"%ITEM_ID%\">\n" +
                   "\t<div class=\"item_name\">%ITEM_NAME%</div>\n" +
                   "\t<button id=\"item_delete_button\"><i class=\"ion-ios-close-outline\"></i></button>\n" +
                   "\t<div class=\"item_price\">$%ITEM_PRICE%</div>\n" +
                   "\t<div class=\"item_qty\">Qty: %ITEM_QTY%</div>\n" +
                   "</div>"
    var newHTML;

    function addNewItem(item)
    {
        newHTML = itemHTML.replace("%ITEM_ID%", item.id);
        newHTML = newHTML.replace("%ITEM_NAME%", item.name);
        newHTML = newHTML.replace("%ITEM_PRICE%", item.price);
        newHTML = newHTML.replace("%ITEM_QTY%", item.qty);

        document.querySelector(".items").insertAdjacentHTML("beforeend", newHTML);
    };

    for(var i = 0; i < storedCart.items.length; i++)
    {
        if (storedCart.items[i].qty > 0)
        {
            addNewItem(storedCart.items[i]);
        }
    }

    document.querySelector(".total_cost").innerHTML = "Total: $" + parseFloat(Math.round(storedCart.total * 100) / 100).toFixed(2);
};

if (document.title == "Cart")
{
    initShoppingCart();
}

$(document).ready(function() {
    setButtonFunctions();
});


/* ORGANIZE THE PLACEMENT OF ALL THESE STUPID FUNCTIO NS */