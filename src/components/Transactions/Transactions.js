import React from 'react';
import './Transactions.scss';

const Transactions = ({ transactions, openpp }) => {
    return (
        <div className="widget recent-transactions">
            <div className="recent-transactions__top-line">
                <h2 className="recent-transactions__type">Recent transactions</h2>
                <div className="recent-transactions__buttons">
                    {/* <button className="yellow_button recent-transactions__settings"></button> */}
                    <button className="yellow_button recent-transactions__show-all" onMouseDown={e => e.stopPropagation()} onClick={ () => openpp()}>All transactions</button>
                </div>
            </div>
            <div className="recent-transactions__table">
                <div className="recent-transactions__header">
                    <span className="recent-transactions__header-item place">Place</span>
                    <span className="recent-transactions__header-item date_and_time">Date and time</span>
                    <span className="recent-transactions__header-item transaction_amount">Transaction</span>
                    <span className="recent-transactions__header-item amount">Amount</span>
                </div>

                <div className="recent-transactions__body">
                    {transactions.slice(0,4).map((transaction, index) => (
                        <div key={index} className="recent-transactions__row">
                            <span className="recent-transactions__item place">{transaction.place}</span>
                            <span className="recent-transactions__item date_and_time">{transaction.date_and_time}</span>
                            <span className="recent-transactions__item transaction_amount" data-type={transaction.action}>{transaction.transaction_amount}</span>
                            <span className='recent-transactions__item amount'>{transaction.amount}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transactions;
