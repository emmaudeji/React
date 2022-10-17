import { useParams } from 'react-router-dom';

// use the useParams hook to grab the param on the url and use it in the component
function UserDetail() {
  const { userId } = useParams();

  return (
    <h1>User Details {userId} </h1>
  )
}

export default UserDetail