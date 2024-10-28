import './App.css'
import AddTimer from './componets/AddTimer';
import Header from './componets/Header';
import Timers from './componets/Timers';
import TimersContentProvider from './store/timers-context';

function App() {
  return (
    <TimersContentProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContentProvider>
  )
}

export default App;
