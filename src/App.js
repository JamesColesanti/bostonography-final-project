import './App.css';
import EmissionsChart from './charts/EmissionsChart';
import EnergyUsageChart from './charts/EnergyUsageChart';

function App() {
  return (
    <div>
      <div>
        <h1>
          Emissions Chart
        </h1>
      </div>
      <EmissionsChart />
      <div>
        <h1>
          Energy Usage Chart
        </h1>
      </div>
      <EnergyUsageChart />
    </div>
  );
}

export default App;
