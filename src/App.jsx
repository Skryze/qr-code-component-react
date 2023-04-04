import './App.css';
import { Card } from './components/Card';
import { QRCard } from './components/QRCard';


function App() {
  return (
    <div className="app_div">
      <Card>
        <QRCard />
      </Card>
    </div>
  );
}

export default App;
