import {Outlet, useSearchParams} from 'react-router-dom';

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get('filter') === 'active'

  return (
    <>
      <h1>Users 1</h1>
      <h1>Users 2</h1>
      <h1>Users 3</h1>

      <Outlet/>

      <div>
        <button onClick={() => setSearchParams({filter: 'active'})} >Set Active</button>
        <button onClick={() => setSearchParams({}) }>Reset</button>
        {
          showActiveUser ? <h2>This is Active User</h2> : <h2>Regular User</h2>
        }
      </div>

    </>
    
  )
}

export default Users