// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0
pragma solidity ^0.8.17;

contract Items {

    struct Bag {
        string item;
        uint256 value;
    }
    uint256 money;
    bool firstClicked;

    struct Shop {
        string item;
        uint256 value;
    }

    Bag[] public bags;
    Shop[] public shop;

    constructor () {
        money = 1000;
        firstClicked = false;
    }

    //Generate data
    function firstAddToShop() public returns (string memory) {
        if (firstClicked == false) {
            shop.push(Shop("golden armor",200));
            shop.push(Shop("sword",50));
            shop.push(Shop("shoes",25));
            shop.push(Shop("iron helmet",50));
            shop.push(Shop("bow",25));
            shop.push(Shop("arrows (25)",25));
            shop.push(Shop("shield",500));
            //Set firstClicked to true to stop generating data
            firstClicked = true;
            return "Shop reseted";
        }
        else {
            return "Shop has already been reseted";
        }
    }

    //Generate data to bag
    function addBagItem() public returns (string memory) {
        bags.push(Bag("None",25));
        return "Shop reseted";
    }

    //View the shop content
    function viewShop() public view returns(Shop[] memory) {
        return shop;
    }

    //Buy items
    function buyItem(string memory name) public returns(string memory) {
        for (uint i = 0; i < shop.length; i++) {

            //Check if user has enough money to pay
            if (money >= shop[i].value) {
                if (keccak256(abi.encode(shop[i].item)) == keccak256(abi.encode(name))) {

                    //Retire money to pay
                    money = money - shop[i].value;

                    //Add item to bag
                    bags.push(Bag(shop[i].item,shop[i].value));

                    //Delete item from shop
                    shop[i] = shop[shop.length - 1];
                    shop.pop();
                    return "Your article has been bought";
                }
            } else {
                return "No enough money";
            }
        }
        return "None article has been found";
    }

    //See bag content
    function getBag() public view returns(Bag[] memory) {
        return bags;
    }

    //Get money
    function getMoney() public view returns(uint256) {
        return money;
    }

    //Sell everything on the bag
    function sellBag() public returns(Bag[] memory) {

        //Get money for each items in the bag
        for (uint i = 0; i < bags.length; i++) {
            uint[] memory moneys = new uint[](bags.length);
            moneys[i] = bags[i].value;
            money = money + moneys[i];
        }
        //Transfert all items to shop
        while(bags.length > 0) {
            bags.pop();
        }
        return bags;
    }
}
