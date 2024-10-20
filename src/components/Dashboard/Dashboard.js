import React, { useState } from 'react';
import './Dashboard.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
import TasksTable from '../TasksTable/TasksTable';
import AccountInfo from '../AccountInfo/AccountInfo';
import Notifications from '../Notifications/Notifications';
import Transactions from '../Transactions/Transactions';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
    const [isPopupOpen1, setPopupOpen1] = useState(false);
    const [isPopupOpen2, setPopupOpen2] = useState(false);
    const [isPopupOpen3, setPopupOpen3] = useState(false);

    const tasks = [
        { description: 'Approve transaction 002312', due: '21.10.2024' },
        { description: 'Sign document 31', due: '22.10.2024' },
        { description: 'Complete KYC process', due: '23.10.2024' },
        { description: 'Review budget report for Q3', due: '24.10.2024' },
        { description: 'Schedule meeting with legal team', due: '25.10.2024' },
        { description: 'Prepare presentation for stakeholders', due: '26.10.2024' },
        { description: 'Update client records', due: '27.10.2024' },
        { description: 'Submit financial audit report', due: '28.10.2024' },
        { description: 'Finalize project milestone 2', due: '29.10.2024' },
    ];
    

    const transactions = [
        { place: "Lodz", date_and_time: "15.10.2024 15:15", action: "1", transaction_amount: "100", amount: "1100" },
        { place: "Lodz", date_and_time: "15.10.2024 15:10", action: "0", transaction_amount: "120", amount: "1000" },
        { place: "Warsaw", date_and_time: "16.10.2024 11:30", action: "1", transaction_amount: "500", amount: "1700" },
        { place: "Krakow", date_and_time: "17.10.2024 09:05", action: "0", transaction_amount: "450", amount: "1250" },
        { place: "Gdansk", date_and_time: "18.10.2024 16:45", action: "1", transaction_amount: "800", amount: "1800" },
        { place: "Wroclaw", date_and_time: "18.10.2024 14:25", action: "0", transaction_amount: "350", amount: "1500" },
        { place: "Poznan", date_and_time: "19.10.2024 12:50", action: "1", transaction_amount: "250", amount: "1750" },
        { place: "Szczecin", date_and_time: "19.10.2024 10:40", action: "0", transaction_amount: "600", amount: "2400" }

    ];

    const notifications = [
        { text: 'Your credit status has been upgraded to the next level.', date: '2024-10-18T19:10:00', link: 'https://example.com/credit-status' },
        { text: 'Welcome to Commerzbank Club! Check your benefits.', date: '2024-10-17T19:10:00', link: 'https://example.com/commerzbank-club' },
        { text: 'New updates are available for your account.', date: '2024-10-09T12:45:00', link: 'https://example.com/account-updates' },
        { text: 'Please review your transaction history.', date: '2024-10-10T16:30:00', link: 'https://example.com/transaction-history' },
    ];

    const layout = [
        { i: 'accountInfo', x: 0, y: 0, w: 7, h: 1 },
        { i: 'tasksTable', x: 7, y: 0, w: 5, h: 1 },
        { i: 'transactions', x: 0, y: 1, w: 7, h: 1 },
        { i: 'notifications', x: 7, y: 1, w: 5, h: 1 },
    ];

    const accounts = [
        { name: "MARTINA MUSTERMAIER", status_id: "1", status_name: "OK", id: "3451-2313-1233-2354-6533-4231", amount: "12 342" },
        { name: "RAKEL SAMIRA", status_id: "0", status_name: "BANNED", id: "4565-4567-4279-6813-4581-2356", amount: "7 745" },
        { name: "JASON IVAN", status_id: "1", status_name: "OK", id: "1231-8767-5135-4897-9798-1234", amount: "1 222" },
        { name: "HUGO MICHELA", status_id: "1", status_name: "OK", id: "2452-5464-7894-5646-5465-7894", amount: "1 342" },
    ]

    const togglePopup1 = () => setPopupOpen1(!isPopupOpen1);
    const togglePopup2 = () => setPopupOpen2(!isPopupOpen2);
    const togglePopup3 = () => setPopupOpen3(!isPopupOpen3);

    return (
        <div className="dashboard">
            <div className="dashboard-wrapper">
                <h1 className="dashboard-title">Dashboard</h1>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={{ lg: layout }}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 12, md: 12 }}
                    rowHeight={350}
                >
                    <div key="accountInfo">
                        <AccountInfo openpp={togglePopup1} />
                    </div>
                    <div key="tasksTable">
                        <TasksTable tasks={tasks} openpp={togglePopup3} />
                    </div>
                    <div key="transactions">
                        <Transactions transactions={transactions} openpp={togglePopup2} />
                    </div>
                    <div key="notifications">
                        <Notifications notifications={notifications} />
                    </div>
                </ResponsiveGridLayout>
            </div>

            {isPopupOpen1 && (
                <div id='popup-1' className="popup">
                    <div className="popup-wrapper">
                        <div className="popup-content">
                            <div className="popup-top-line">
                                <h2 className="popup-title">All Accounts</h2>
                                <button className='popup-close-button' onClick={togglePopup1}><span></span></button>
                            </div>
                            <div className="popup-accounts">

                                {accounts.map((account, index) => (
                                    <div className="popup-account_container">
                                        <div className="account_container-left_part">
                                            <p className="account_container-left_part-name">{account.name}</p>
                                            <p className="account_container-left_part-id">{account.id}</p>
                                            <p className="account_container-left_part-status">Status: <span data-type={account.status_id}>{account.status_name}</span></p>
                                        </div>
                                        <div className="account_container-right_part">
                                            <p className="account_container-right_part-amount">Amount: <p>{account.amount}<span> EUR</span></p></p>
                                            <div className="account_container-right_part-buttons">
                                                <button className="grey_button account_container-right_part-button">Transfer</button>
                                                <button className="grey_button account_container-right_part-button">History</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isPopupOpen2 && (
                <div id='popup-2' className="popup">
                    <div className="popup-wrapper">
                        <div className="popup-content">
                            <div className="popup-top-line">
                                <h2 className="popup-title">All Transactions</h2>
                                <button className='popup-close-button' onClick={togglePopup2}><span></span></button>
                            </div>
                            <div className="popup-transactions">

                                <div className="transactions__header">
                                    <span className="transactions__header-item place">Place</span>
                                    <span className="transactions__header-item date_and_time">Date and time</span>
                                    <span className="transactions__header-item transaction_amount">Transaction</span>
                                    <span className="transactions__header-item amount">Amount</span>
                                </div>

                                <div className="transactions__body">
                                    {transactions.map((transaction, index) => (
                                        <div key={index} className="transactions__row">
                                            <span className="transactions__item place">{transaction.place}</span>
                                            <span className="transactions__item date_and_time">{transaction.date_and_time}</span>
                                            <span className="transactions__item transaction_amount" data-type={transaction.action}>{transaction.transaction_amount}</span>
                                            <span className='transactions__item amount'>{transaction.amount}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isPopupOpen3 && (
                <div id='popup-3' className="popup">
                    <div className="popup-wrapper">
                        <div className="popup-content">
                            <div className="popup-top-line">
                                <h2 className="popup-title">All Tasks</h2>
                                <button className='popup-close-button' onClick={togglePopup3}><span></span></button>
                            </div>
                            <div className="popup-tasks">
                                <div className="popup-tasks__header">
                                    <span className="popup-tasks__header-item">Description</span>
                                    <span className="popup-tasks__header-item">Due</span>
                                    <span className="popup-tasks__header-item">Link</span>
                                </div>

                                <div className="popup-tasks__body">
                                    {tasks.map((task, index) => (
                                        <div key={index} className="popup-tasks__row">
                                            <span className="popup-tasks__item description">{task.description}</span>
                                            <span className="popup-tasks__item due">{task.due}</span>
                                            <span className="popup-tasks__item link">
                                                <a className="link-button">&#8635;</a>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
