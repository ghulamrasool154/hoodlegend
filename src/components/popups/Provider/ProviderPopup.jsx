import React from "react";
import metamask from "../../pages/Main/images/matamask.png";
import walletcollect from "../../pages/Main/images/walletconnect.png";
import "./ProviderPopup.css";
const ProviderPopup = () => {
  return (
    <>
      <div className="ProviderPopup---option">
        <div className="ProviderPopup">
          <h3 className="provider--title">Select your provider</h3>
          <div className="provider--companies">
            <div className="pro--comp--left">
              <div className="com--img">
                <img src={metamask} alt="metamask" />
              </div>
              <h3>METAMASK</h3>
              <p>Connect with your Metamask wallet</p>
            </div>
            <div className="pro--comp--right">
              <div className="com--img">
                <img src={walletcollect} alt="walletcollect" />
              </div>
              <h3>WALLETCONNECT</h3>
              <p>Scan with WalletConnect to connect</p>
            </div>
          </div>
          <div className="provider--companies---overlay"></div>
        </div>
      </div>
    </>
  );
};

export default ProviderPopup;
