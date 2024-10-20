import React, { useState, useEffect } from "react";
import Modal from "react-modal"; // Import the modal library
import "./NotificationsWidget.scss";
// import LinkIcon from "../../images/linkIcon.png";
// import CloseIcon from "../../images/closeIcon.png";

// // Set app element for accessibility
// Modal.setAppElement("#root"); // Adjust the selector based on your app's structure

const NotificationsWidget = ({notifications}) => {
  // const [notifications, setNotifications] = useState([]);
  const [totalNumber, setTotalNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // useEffect(() => {
  //   fetch(notifications)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTotalNumber(data.length); // Store total number of notifications
  //       setNotifications(data); // Store all notifications
  //     })
  //     .catch((error) => console.error("Error fetching notifications:", error));
  // }, []);

  const openModal = () => setIsModalOpen(true); // Function to open modal
  const closeModal = () => setIsModalOpen(false); // Function to close modal

  return (
    <div className="notifications-widget">
      <div className="notifications-header">
        <h2>Notifications</h2>
        <div className="badge">{totalNumber}</div>
        <button className="yellow_button all-notifications-btn" onClick={openModal}>
          All notifications
        </button>
      </div>

      <hr className="hr-line" />
      {notifications.slice(0, 2).map((notification, index) => (
        <div className="notification-item" key={index}>
          <span className="bullet-point">•</span>
          <div className="notification-text">{notification.text}</div>
          <div className="notification-time">
            {new Date(notification.date).toLocaleDateString()}
          </div>
          <a
            href={notification.link}
            className="notification-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="" alt="linkIcon" />
          </a>
        </div>
      ))}

      {/* Modal for showing all notifications */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="All Notifications"
        style={modalStyles} // Custom styles for the modal
      >
        <div className="notifications-header">
          <h2>All Notifications:</h2>
          <button onClick={closeModal}><img className="close-icon" src="" alt="Close" /></button>
        </div>
        <ul>
          {notifications.map((notification, index) => (
            <div className="notification-item-popup" key={index}>
              <span className="bullet-point">•</span>
              <div className="notification-text">{notification.text}</div>
              <div className="notification-time">
                {new Date(notification.date).toLocaleDateString()} {/* Displaying Date */}
              </div>
              <a
                href={notification.link}
                className="notification-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src="" alt="linkIcon" />
              </a>
            </div>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

// Custom styles for the modal
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Overlay color
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    borderRadius: "8px",
    width: "480px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
  },
};

// Export the main component
export default NotificationsWidget;
