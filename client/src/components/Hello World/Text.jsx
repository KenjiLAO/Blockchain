import useEth from "../../contexts/EthContext/useEth";

function Text({ setValue }) {

    const { state: { contract, accounts } } = useEth();
    const read = async () => {
        const value = await contract.methods.getHi().call({ from: accounts[0] });
        setValue(value);
        console.log(value);
      };
    return (
        <>
        <button onClick={read}>Hi</button>
        </>
    );
}

export default Text;