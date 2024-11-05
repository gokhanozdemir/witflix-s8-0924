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
        <div className="container-lg flex column">
          <form onSubmit={handleSubmit}>


            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" />
            <label htmlFor="creditcard">Credit Card Number</label>
            <input type="text" name="creditcard" id="creditcard" />
            <label htmlFor="cvc">CVC</label>
            <input type="text" name="cvc" id="cvc" />
            <label htmlFor="exp_month">Month</label>
            <input type="text" name="exp_month" id="exp_month" />
            <label htmlFor="exp_year">Year</label>
            <input type="text" name="exp_year" id="exp_year" />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" name="zipcode" id="zipcode" />
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
            <label htmlFor="district">District</label>
            <input type="text" name="district" id="district" />



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
