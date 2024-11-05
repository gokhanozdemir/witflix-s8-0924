import { useState } from "react"


function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    // console.log(event)
    const newUser = {
      ...formData,
      [event.target.name]: event.target.value
    }

    setFormData(newUser)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formdata", formData)
    const submittedUser = {
      name: formData.username,
      id: Date.now(),
      avatarUrl: `https://api.multiavatar.com/${formData.username}.svg`
    }
    setFormData({})
  }

  return (
    <div className="App">
      <header>
        <div className="container-lg">NEETFLIK</div>
      </header>
      <main className="flex column gap-m main-container" >
        <div className="container-lg">
          <form onSubmit={handleSubmit}>



            <button type="submit">Pay Now</button>
            <button type="button">Cancel</button>
            <button type="button">Reset Form</button>
          </form>
        </div>


      </main>

    </div>
  )
}

export default App
