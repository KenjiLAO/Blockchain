import useEth from "../../contexts/EthContext/useEth";

function Text({ setValue }) {

    const { state: { contract} } = useEth();
    const read = async () => {
        const value = await contract.methods.getHi().call();
        setValue(value);
      };
    return (
        <>
        <button onClick={read}>Hi</button>
        </>
    );
}

export default Text;