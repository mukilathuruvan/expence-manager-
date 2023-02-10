import { getUsers } from "@/utils/fetcher-methods/Users"
const UserList = async () => {
  const users = await getUsers()
  return (
    <>
      <ul>
        {
          users.map((user) => (
            <li key={user.id} className={`bg-slate-400 p-4`}>
              <div>
                <h2>{user.username}</h2>
                <h2>{user.name}</h2>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default UserList