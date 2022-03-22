import './App.css';
import { Header } from './components/Header';
import { Attendance } from './components/Attendance';
import { Testimonial } from './components/Testimonial';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Attendance />
      <Testimonial />
      <About />
    </div>
  );
}

export default App;
