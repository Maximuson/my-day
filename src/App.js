
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import './App.css';
import { showNotifications } from './store/actions/notifications';


function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(showNotifications({text: "some text"}))
  },[])

  return (
    <div className="App">
    </div>
  );
}

export default connect(null, null)(App);
