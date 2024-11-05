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
          <form onSubmit={handleSubmit} className="flex column gap-s">

            <div className="flex gap-s">
              <div className="input-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="input-group">
              <label htmlFor="creditcard">Credit Card Number</label>
              <input type="text" name="creditcard" id="creditcard" />
            </div>
            <div className="flex gap-s"><div className="input-group">
              <label htmlFor="cvc">CVC</label>
              <input type="text" name="cvc" id="cvc" />
            </div>
              <div className="input-group">
                <label htmlFor="exp_month">Month</label>
                <input type="text" name="exp_month" id="exp_month" />
              </div>
              <div className="input-group">
                <label htmlFor="exp_year">Year</label>
                <input type="text" name="exp_year" id="exp_year" />
              </div></div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" />
            </div>
            <div className="flex gap-s">
              <div className="input-group">
                <label htmlFor="zipcode">Zip Code</label>
                <input type="text" name="zipcode" id="zipcode" />
              </div>
              <div className="input-group">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" />
              </div>
              <div className="input-group">
                <label htmlFor="district">District</label>
                <input type="text" name="district" id="district" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="gdpr">GDPR</label>
              <input type="text" name="gdpr" id="gdpr" />
            </div>

            <div className="flex between ">
              <button type="submit" className="action-button">Pay Now</button>
              <button type="button" className="secondary-button">Cancel</button>
              <button type="button" className="secondary-button">Reset Form</button>
            </div>
          </form>
        </div>


      </main>

    </div>
  )
}

export default App
