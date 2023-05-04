import useEth from "../../contexts/EthContext/useEth";

function ItemsBtnBag( setBagValue ) {
  const { state: { contract, accounts } } = useEth();

  const bag = async () => {
    const value = await contract.methods.getBag().call({ from: accounts[0] });
    setBagValue(value);
  };

  return (
    <div className="btns">

      <button onClick={bag}>
        Bag
      </button>

    </div>
  );
}

export default ItemsBtnBag;