
import { useState } from 'react';
import { ethers } from 'ethers';

function Wallet() {

  // Properties

  const [walletAddress, setWalletAddress] = useState("MetaMask");

  // Helper Functions

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (<>
    <section className="wallet">
    <div className="wallet__container">
        <div className="wallet__inner">
            <div className="wallet__image">
                <img className="wallet__img" src="./img/account/placeholder.jpg" alt="Image"/>
            </div>
            <div className="wallet__content">
                <div className="wallet__titel">
                    <h2 className="wallet__titel-top">Connect wallet</h2>
                    <p className="wallet__text">Choose a wallet you want to connect. There are several wallet providers.</p>
                </div>
                <div className="wallet__info">
                    <button className="wallet__link" style={{backgroundColor:"#2B2B2B", border:"0px solid white"}} onClick={requestAccount}>
                        <div className="wallet__options">
                            <img className="wallet__logo" src="./img/account/metamask.svg" alt="Metamask"/>
                            <p className="wallet__name" style={{color:"white", cursor:"pointer"}}>{walletAddress && walletAddress.slice(0, 8)}</p>
                        </div>
                    </button>
                    <a className="wallet__link" href="#">
                        <div className="wallet__options">
                            <img className="wallet__logo" src="./img/account/wallet.svg" alt="Wallet"/>
                            <p className="wallet__name">Wallet Connect</p>
                        </div>
                    </a>
                    <a className="wallet__link" href="#">
                        <div className="wallet__options">
                            <img className="wallet__logo" src="./img/account/coinbase.svg" alt="Coinbase"/>
                            <p className="wallet__name">Coinbase</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  );
}

export default Wallet;
