import useEth from "../../contexts/EthContext/useEth";

function ItemsBtnShop( setShopValue ) {
  const { state: { contract, accounts } } = useEth();

  const shop = async () => {
    const value = await contract.methods.viewShop().call({ from: accounts[0] });
    setShopValue(value);
  };


  return (
    <div className="btns">

      <button onClick={shop}>
        View shop
      </button>

    </div>
  );
}

export default ItemsBtnShop;