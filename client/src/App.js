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

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

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
              <Route path='/spotify' element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
