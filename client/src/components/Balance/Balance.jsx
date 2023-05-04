import Web3 from 'web3';

function Balance() {

    const web3 = new Web3(window.ethereum);
    const accounts = web3.eth.getAccounts();  
    console.log(accounts);

    return (
        <div >
            <p>Adresse du compte Metamask : {accounts}</p>
        </div>
      );
}

export default Balance;