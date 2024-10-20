import './App.scss';
import Header from './components/Header/Header';
import FAQChatBot from './components/FAQChatBot/FAQChatBot';
import Dashboard from './components/Dashboard/Dashboard';
import DetailedInformation from './components/DetailedInformation/DetailedInformation';

import { useCallback } from 'react';

function App() {
  const MemoizedChatBot = useCallback(() => <FAQChatBot />, []);

  return (
    <div className="App">
      <Header />

      <Dashboard />

      <DetailedInformation />

      <MemoizedChatBot />
    </div>
  );
}

export default App;
