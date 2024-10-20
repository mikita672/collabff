import React, { useState } from 'react';
import './AccountInfo.scss';
// import { openPopUp } from '../../App'


const AccountInfo = ({openpp}) => {

    const [popUpInfoIsOpen, setPopUpInfoOpen] = useState(false);

    return (
        <div className="widget account-info">
            <div className="account-info__top-line">
                <h2 className="account-info__type">Currency account</h2>
                <div className="account-info__buttons">
                    {/* <button className="yellow_button account-info__settings"><img src={settings} alt="settings" /></button> */}
                    {/* <button className="yellow_button account-info__show-all" onClick={togglePopUp}>All accounts</button> */}
                    <button className="yellow_button account-info__show-all" onMouseDown={e => e.stopPropagation()} onClick={ () => openpp()}>All accounts</button>

                </div>
            </div>

            <div className="account-info__bottom-line">
                <div className="bottom-line__left-part">
                    <div className="account-info__id-account">
                        1234-5678-9012-3456-7890
                    </div>
                    <div className="account-info__name-account">
                        MARTINA MUSTERMAIER
                    </div>
                </div>


                <div className="bottom-line__right-part">
                    <div className="account-info__amount">
                        <h4>Amount:</h4>
                        <p>154 <span>EUR</span></p>
                    </div>
                    <div className="account-info__buttons">
                        <button className="grey_button account-info__buttons">Transfer</button>
                        <button className="grey_button account-info__buttons">History</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AccountInfo;
