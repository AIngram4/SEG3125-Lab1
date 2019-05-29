var cartController = (function()
{
    var numMenuItems = 3;

    /* Private variables */
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

    var init = function()
    {
        var storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart != undefined)
        {
            cart = storedCart;
        }
        else
        {
            for (var i = 0; i < numMenuItems; i++)
            {
                var item = document.getElementById("menu_item_" + (i + 1));
                if (item != null)
                {
                    var itemObj = new foodItem(i, item.querySelector(".menu_name").innerHTML, parseFloat(item.querySelector(".item_price").innerHTML.replace("$", "")));
                    cart.items[i] = itemObj;
                }
            }
        }
    };

    /* Public functions */
    var removeItem = function(id) {
        if (cart.items[id].qty > 0)
        {
            cart.items[id].qty--;
            cart.total -= cart.items[id].price;

            var elem = document.getElementById("item_" + id);
            if (cart.items[id].qty == 0)
            {
                elem.parentNode.removeChild(elem);
            }
            else
            {
                elem.querySelector(".item_qty").innerHTML = "Qty: " + cart.items[id].qty;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };

    var addItem = function(id) {
        cart.items[id].qty++;
        cart.total += cart.items[id].price;
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    var numItems = function() {
        return cart.items.length;
    };

    var getCart = function() {
        return cart;
    };

    var getTotalCost = function()
    {
        return cart.total;
    }

    return {
        removeItem: removeItem,
        addItem: addItem,
        numItems: numItems,
        getCart: getCart,
        getTotalCost: getTotalCost,
        init: init
    };

}());

var menuController = (function()
{
    var numMenuItems = 3;

    var init = function(addItemCallback)
    {
        for (var i = 0; i < numMenuItems; i++)
        {
            (function() {
                var id = i;
                document.getElementById("menu_item_" + (id + 1)).addEventListener("click", function(){addItemCallback(id)});
            }());
        }
    };

    return {
        init: init
    };
}());

var restaurantController = (function()
{
    var numRestaurants = 9;
    var goToMenu = function()
    {
        window.location.href = "menu_page.html";
    };

    var init = function()
    {
        for (var i = 1; i <= numRestaurants; i++)
        {
            document.getElementById("restaurant_button_" + i).addEventListener("click", goToMenu);
        }
    };

    return {
        init: init
    }
}());

var UIController = (function()
{
    /* Private variables */
    var itemHTML = "<div class=\"item\" id=\"%ITEM_ID%\">\n" +
        "\t<div class=\"item_name\">%ITEM_NAME%</div>\n" +
        "\t<button id=\"item_delete_button\"><i class=\"ion-ios-close-outline\"></i></button>\n" +
        "\t<div class=\"item_price\">$%ITEM_PRICE%</div>\n" +
        "\t<div class=\"item_qty\">Qty: %ITEM_QTY%</div>\n" +
        "</div>";
    var newHTML;

    /* Public functions */
    var updateTotalCost = function(total)
    {
        document.querySelector(".total_cost").innerHTML = "Total: $" + parseFloat(Math.round(parseFloat(total) * 100) / 100).toFixed(2);
    };

    var addNewItem = function(item, removeItemCallback)
    {
        if (item.qty > 0)
        {
            newHTML = itemHTML.replace("%ITEM_ID%", ("item_" + item.id).toString());
            newHTML = newHTML.replace("%ITEM_NAME%", item.name);
            newHTML = newHTML.replace("%ITEM_PRICE%", item.price);
            newHTML = newHTML.replace("%ITEM_QTY%", item.qty.toString());

            document.querySelector(".items").insertAdjacentHTML("beforeend", newHTML);

            var elem = document.getElementById("item_" + item.id).querySelector("#item_delete_button");
            elem.addEventListener("click", function(){removeItemCallback(item.id)});
        }
    };

    return {
        addNewItem: addNewItem,
        updateTotalCost: updateTotalCost,
    };
}());

var controller = (function(cartCtrl, menuCtrl, restaurantCtrl, UICtrl){

    var init = function()
    {
        if (document.title === "Cart")
        {
            cartCtrl.init();
            var cart = cartCtrl.getCart();
            for(var i = 0; i < cartCtrl.numItems(); i++)
            {
                UICtrl.addNewItem(cart.items[i], removeItem);
            }
            UICtrl.updateTotalCost(cartCtrl.getTotalCost());
        }
        else if (document.title === "Restaurant List")
        {
            restaurantCtrl.init();
        }
        else if (document.title === "Menu")
        {
            cartCtrl.init();
            menuCtrl.init(cartCtrl.addItem);
        }
    };

    /* Private function */
    function removeItem(id)
    {
        cartCtrl.removeItem(id);
        UICtrl.updateTotalCost(cartCtrl.getTotalCost());
    };

    return {
        init: init
    };

}(cartController, menuController, restaurantController, UIController));

$(document).ready(function() {
    controller.init();
});