import './App.css';
import { Header } from './components/Header';
import { Attendance } from './components/Attendance';
import { Testimonial } from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <Attendance />
      <Testimonial />
    </div>
  );
}

export default App;
