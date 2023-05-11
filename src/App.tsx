import { Outlet } from 'react-router-dom';
import './App.css'
import { AppBar } from './components/AppBar';
import { Counter } from './components/Counter';

function App() {

  return (
    <>
      <AppBar />
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default App
