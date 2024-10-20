import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';


// Custom theme for the ChatBot
const theme = {
  background: '#dadada',
  fontFamily: 'Arial',
  headerBgColor: '#005050',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#FFCC00',
  botFontColor: '#00000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// Memoized ChatBot component to prevent re-renders
const FAQChatBot = React.memo(() => {
  const [showChat, setShowChat] = useState(false);

  // // Toggle chat visibility
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: "2000" }}>
      {/* Button to show/hide the chat */}
      <button
        onClick={toggleChat}
        style={{
          padding: '25px 25px',
          borderRadius: '50%',
          background: '#FFD900',
          color: '#fff',
          border: 'none',
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faCommentsDollar} style={{ transform: 'scale(1.5)' }} /> {/* 150% larger */}
      </button>

      {/* Conditionally render the ChatBot component */}
      {showChat && (
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={[
              {
                id: '1',
                message: 'Hi! How can I help You?',
                trigger: '2',
              },
              {
                id: '2',
                options: [
                  { value: 'faq', label: 'Frequently Asked Questions', trigger: '3' },
                  { value: 'contact', label: 'Contact Support', trigger: '4' },
                  { value: 'own question', label: 'I want to ask another question', trigger: '10' },
                ],
              },
              {
                id: '3',
                message: 'Here you can find answers to frequently asked questions.',
                trigger: '5',
              },
              {
                id: '4',
                message: 'You can contact us via email: support@commerzbank.com',
                trigger: 9,
              },
              {
                id: '5',
                options: [
                  { value: 'main_customization', label: 'How can I customize main page?', trigger: '6' },
                  { value: 'fees_value', label: 'Where can I see the value of fees for transactions?', trigger: '7' },
                  { value: 'Howtologout', label: 'How can I log in in other account?', trigger: '8' },
                ],
              },
              {
                id: '6',
                message: 'You can drag widgets to change their position',
                trigger: 9,
              },
              {
                id: '7',
                message: 'You can see the value of fees on https://www.commerzbank.de/portal/en/englisch/products-offers/services/rates-charges/rates-charges.html',
                trigger: 9,
              },
              {
                id: '8',
                message: "You can proceed to log in page by clicking Log Out button in the top right corner of the page",
                trigger: 9,
              },
              {
                id: '9',
                message: 'Anything else?',
                trigger: 2,
              },
              {
                id: '10',
                message: 'You can write you question down below, it will be directed to the Commerzbank assistant',
                trigger: 11,
              },
              {
                id: '11',
                user: true,
                trigger: 9,
              },
            ]}
          />
        </ThemeProvider>
      )}
    </div>
  );
});

export default FAQChatBot;
