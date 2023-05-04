import useEth from "../../contexts/EthContext/useEth";

function ItemsBtnMoney( setMoneyValue ) {
  const { state: { contract, accounts } } = useEth();

  const money = async () => {
    const value = await contract.methods.getMoney().call({ from: accounts[0] });
    setMoneyValue(value);
  };

  return (
    <div className="btns">

      <button onClick={money}>
        Money
      </button>

    </div>
  );
}

export default ItemsBtnMoney;