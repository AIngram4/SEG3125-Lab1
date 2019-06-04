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
        totalItems: 0
    };

    var init = function()
    {
        var storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart !== null)
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
            cart.totalItems--;
            cart.items[id].qty--;
            cart.total -= cart.items[id].price;

            var elem = document.getElementById("item_" + id);
            if (cart.items[id].qty === 0)
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
        cart.totalItems++;
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
    };

    var getCartSize = function()
    {
        return cart.totalItems;
    };

    return {
        removeItem: removeItem,
        addItem: addItem,
        numItems: numItems,
        getCart: getCart,
        getTotalCost: getTotalCost,
        getCartSize: getCartSize,
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
                document.getElementById("menu_item_" + (id + 1)).querySelector("button").addEventListener("click", function(){addItemCallback(id)});
            }());
        }
    };

    var addItem = function(id)
    {
        var html = "<div class=\"added_text animated_text\">Added to cart</div>";
        var e = document.getElementById("menu_item_" + (id + 1));
        e.insertAdjacentHTML("beforeend", html);
        setTimeout(function(){e.querySelector(".added_text").remove();}, 900);
    };

    return {
        init: init,
        addItem: addItem
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

    var updateCartSize = function(size)
    {
        var e = document.getElementById("cart_size");
        if (size > 0)
        {
            if (e !== null)
            {
                e.innerHTML = size;
            }
            else
            {
                document.querySelector(".shopping_cart").insertAdjacentHTML("beforeend", "<p id=\"cart_size\">" + size + "</p>");
            }
        }
        else
        {
            e.remove();
        }
    };

    return {
        addNewItem: addNewItem,
        updateCartSize: updateCartSize
    };
}());

var checkoutController = (function()
{
    var init = function()
    {
        document.getElementById("payment_method").addEventListener("change", showCCInfo);
    };

    var showCCInfo = function()
    {
        var div = document.querySelector(".creditCardForm");
        var e = document.getElementById("payment_method");
        if (e.options[e.selectedIndex].value === "credit")
        {
            div.style.display = "block";
        }
        else
        {
            div.style.display = "none";
        }
    };

    var updateTotalCost = function(total)
    {
        document.querySelector(".total_cost").innerHTML = "Total: $" + parseFloat(Math.round(parseFloat(total) * 100) / 100).toFixed(2);
    };

    return {
        init: init,
        showCCInfo: showCCInfo,
        updateTotalCost: updateTotalCost
    };

}());

var controller = (function(cartCtrl, menuCtrl, restaurantCtrl, checkoutCtrl, UICtrl){

    var init = function()
    {
        cartCtrl.init();
        UICtrl.updateCartSize(cartCtrl.getCartSize());
        if (document.title === "Cart")
        {
            var cart = cartCtrl.getCart();
            for(var i = 0; i < cartCtrl.numItems(); i++)
            {
                UICtrl.addNewItem(cart.items[i], removeItem);
            }
            checkoutCtrl.updateTotalCost(cartCtrl.getTotalCost());
        }
        else if (document.title === "Restaurant List")
        {
            restaurantCtrl.init();
        }
        else if (document.title === "Menu")
        {
            menuCtrl.init(addItem);
        }
        else if (document.title === "Checkout")
        {
            checkoutController.init();
            checkoutCtrl.updateTotalCost(cartCtrl.getTotalCost());
        }
    };

    /* Private function */
    function removeItem(id)
    {
        cartCtrl.removeItem(id);
        checkoutCtrl.updateTotalCost(cartCtrl.getTotalCost());
        UICtrl.updateCartSize(cartCtrl.getCartSize());
    }

    function addItem(id)
    {
        cartCtrl.addItem(id);
        menuCtrl.addItem(id);
        UICtrl.updateCartSize(cartCtrl.getCartSize());
    }

    return {
        init: init
    };

}(cartController, menuController, restaurantController, checkoutController, UIController));

$(document).ready(function() {
    controller.init();
});