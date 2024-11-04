import { useState } from "react"
import Profile from "./components/Profile"
import './Form.css'
const APIDataStatic = [
  {
    "createdAt": "2024-10-17T03:53:51.456Z",
    "name": "Alyssa Reinger IV",
    "avatarUrl": "https://api.multiavatar.com/1212.svg",
    "id": "1"
  },
  {
    "createdAt": "2024-10-17T07:00:18.480Z",
    "name": "Dr. Sharon Howe",
    "avatarUrl": "https://api.multiavatar.com/740.svg",
    "id": "2"
  },
  {
    "createdAt": "2024-10-16T19:29:04.974Z",
    "name": "Lila Murray",
    "avatarUrl": "https://api.multiavatar.com/128.svg",
    "id": "3"
  },
  {
    "createdAt": "2024-10-16T19:54:13.416Z",
    "name": "Mildred Grimes",
    "avatarUrl": "https://api.multiavatar.com/1135.svg",
    "id": "4"
  }
]


function App() {
  const [users, setUsers] = useState(APIDataStatic);
  const [form, setForm] = useState({ username: "" });

  const handleAddUser = (newUser) => {
    setUsers([newUser, ...users])
  }

  const handleChange = (event) => {
    // console.log(event)
    const newUser = {
      ...form,
      [event.target.name]: event.target.value
    }

    setForm(newUser)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedUser = {
      name: form.username,
      id: Date.now(),
      avatarUrl: `https://api.multiavatar.com/${form.username}.svg`
    }
    setForm({ username: "" })
    handleAddUser(submittedUser)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {form.username}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input value={form.username} onChange={handleChange} type="text" id="username" name="username" placeholder="Kullanıcı Adı" />
        </div>

        <button type="submit">Add User</button>
      </form>
      {users.map((user) => (

        <Profile
          key={user.id}
          info={user}
        />
      ))}

    </>
  )
}

export default App
