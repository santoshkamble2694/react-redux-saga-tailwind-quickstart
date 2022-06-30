import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { increaseCounter, decreaseCounter, getUsersList } from '../../redux/actions/counterAction';

const Home = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.count)
  const userList = useSelector(state => state.counter.users)

  const increase = () => {
    dispatch(increaseCounter())
  }

  const decrease = () => {
    dispatch(decreaseCounter())
  }

  useEffect(() => {
    if (!userList.length) {
      dispatch(getUsersList())
    }
  }, [])

  return (
    <div>
      <p>Home page</p>
      <Link to={ROUTES.ABOUT}>goto About page</Link>
      <div>Count: {counter}</div>
      <button className='rounded-full bg-indigo-500 p-2 mr-2' onClick={increase}>Increase Count</button>
      <button className='rounded-full bg-red-400 p-2' onClick={decrease}>Decrease Count</button>
      <h2>Sample table data using redux, redux-saga & axios</h2>
      <table className='border-collapse border border-slate-400 w-full'>
        <tr>
          <th className='border border-slate-300'>Name</th>
          <th className='border border-slate-300'>Email</th>
          <th className='border border-slate-300'>Phone</th>
          <th className='border border-slate-300'>Website</th>
        </tr>
        {userList.length > 0 && userList.map((user, index) => {
          return (
            <tr key={user.id} index={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Home