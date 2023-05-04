import Text from "./Text";
import { useState } from "react";
import ItemsBtnBag from "./ItemsBtnBag";
import ItemsBtnMoney from "./ItemsBtnMoney";
import ItemsBtnShop from "./ItemsBtnShop";

function Items() {

    const [bagValue, setBagValue] = useState("-_-");
    const [moneyValue, setMoneyValue] = useState("0");
    const [shopValue, setShopValue] = useState("isi");
    return (
        <>
        <Text value={bagValue}/>
        <ItemsBtnBag setBagValue={setBagValue}/>
        <Text value={moneyValue}/>
        <ItemsBtnMoney setMoneyValue={setMoneyValue}/>
        <Text value={shopValue}/>
        <ItemsBtnShop setShopValue={setShopValue}/>
        
        </>
    );
}

export default Items;