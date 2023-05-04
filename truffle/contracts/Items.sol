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

    function firstAddToShop() public returns (string memory) {
        if (firstClicked == false) {
            shop.push(Shop("golden armor",200));
            shop.push(Shop("sword",50));
            shop.push(Shop("shoes",25));
            shop.push(Shop("iron helmet",50));
            shop.push(Shop("bow",25));
            shop.push(Shop("arrows (25)",25));
            shop.push(Shop("shield",500));
            firstClicked = true;
            return "Shop reseted";
        }
        else {
            return "Shop has already been reseted";
        }
    }

    function addBagItem() public returns (string memory) {
        bags.push(Bag("None",25));
        return "Shop reseted";
    }

    function viewShop() public view returns(Shop[] memory) {
        return shop;
    }

    function buyItem(string memory name) public returns(string memory) {
        for (uint i = 0; i < shop.length; i++) {

            if (money >= shop[i].value) {
                if (keccak256(abi.encode(shop[i].item)) == keccak256(abi.encode(name))) {
                    //Retire money to pay
                    money = money - shop[i].value;
                    //Delete item from shop
                    shop.pop(); //To dev
                    //Add item to bag
                    bags.push(); //To dev

                    return "Your article has been bought";
                }
            } else {
                return "No enough money";
            }
            
        }
        return "None article has been found"; // Value has been found
    }

    function getBag() public view returns(Bag[] memory) {
        return bags;
    }

    function getMoney() public view returns(uint256) {
        return money;
    }

    function sellBag() public returns(Bag[] memory) {

        for (uint i = 0; i < bags.length; i++) {
            uint[] memory moneys = new uint[](bags.length);
            moneys[i] = bags[i].value;
            money = money + moneys[i];
        }
        while(bags.length > 0) {
            bags.pop();
        }
        return bags;
    }
}
