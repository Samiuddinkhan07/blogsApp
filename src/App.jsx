import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth/auth';
import { login,logout } from './store/authSlice';
import './App.css';
import PageLayout from './components/pageLayout/PageLayout';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() =>{
    authService.isUserLogged()
    .then((response) => {
      if(response) dispatch(login({response}));
      else dispatch(logout({}))
    })
    .finally(() =>  setLoading(false))
  },[])
  return !loading ? (
    <PageLayout/>
  ) : (null)
}

export default App
