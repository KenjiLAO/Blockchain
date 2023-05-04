import Web3 from 'web3';



function Balance() {

    const web3 = new Web3(window.ethereum);
    async function getAccounts() {
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
      }
      
      const account = getAccounts();
      console.log(account);
    return (
        <div >
            <p>Adresse du compte Metamask : {account}</p>
        </div>
      );
}

export default Balance;