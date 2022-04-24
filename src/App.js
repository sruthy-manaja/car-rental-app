import Header from './components/header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
import BookingFlow from './components/dashboard/BookingFlow';
import Dashboard from './components/dashboard/Dashboard';


function App() {

  return (
    <div className="App">
     <Layout>
      <BookingFlow/>
      <Dashboard/>
       </Layout>
    </div>
  );
}

export default App;
