import React from 'react';
import PageContainer from './components/PageContainer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';
import Login from './pages/Login';
import About from './pages/About';
import EventPage from './pages/EventPage';
import Navigation from './components/Navigation';
import MyEventsPage from './pages/MyEventsPage';
import CommunityProfilePage from './pages/CommunityProfilePage';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const styles = {
  navbar: {
    background: 'red',
  },
  app: {
    backgroundImage:
      'url(https://cdnb.artstation.com/p/assets/images/images/020/065/699/large/bhavin-solanki-vlcsnap-2019-08-10-11h24m19s192.jpg?1566228322)',
  },
  aligned: {
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    boxShadow: '6px 1px 9px 1px #CD33FF',
  },
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Navigation />
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/eventsPage" element={<EventPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/spotify" element={<Profile />} />
              <Route path="/communityPage" element={<CommunityProfilePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
