import { useState } from "react"


const cities = [
  {
    cCode: "ank",
    name: "Ankara"
  },
  {
    cCode: "ist",
    name: "İstanbul"
  },
  {
    cCode: "izm",
    name: "İzmir"
  },
  {
    cCode: "ada",
    name: "Adana"
  },
  {
    cCode: "sam",
    name: "Samsun"
  },
  {
    cCode: "dnz",
    name: "Denizli"
  },
  {
    cCode: "esk",
    name: "Eskişehir"
  },
  {
    cCode: "ny",
    name: "Newyork"
  }
]

const districts = [
  {
    cCode: "ank",
    name: "Dist Ankara"
  },
  {
    cCode: "ist",
    name: "Dist İstanbul"
  },
  {
    cCode: "izm",
    name: "Dist İzmir"
  },
  {
    cCode: "ada",
    name: "Dist Adana"
  },
  {
    cCode: "sam",
    name: "Dist Samsun"
  },
  {
    cCode: "dnz",
    name: "Dist Denizli"
  },
  {
    cCode: "esk",
    name: "Dist Eskişehir"
  },
  {
    cCode: "ny",
    name: "Dist Newyork"
  }
]

const initialForm = {

  "creditcard": "",
  "firstname": "",
  "lastname": "",
  "email": "",
  "cvc": "",
  "exp_month": "11",
  "exp_year": "2024",
  "cctype": "",
  "address": "",
  "zipcode": "",
  "city": "ist",
  "district": "-1",
  "gdpr": true

}

function App() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target
    console.log("type, name, value, checked:", type, name, value, checked)


    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked // tek farklı satır
      })
    } else {
      setFormData({
        ...formData,
        [name]: value // tek farklı satır
      })
    }
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
                <input type="text" value={formData.firstname} onChange={handleChange} name="firstname" id="firstname" />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" value={formData.lastname} onChange={handleChange} name="lastname" id="lastname" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" onChange={handleChange} value={formData.email} name="email" id="email" />
            </div>
            <div className="input-group">
              <label htmlFor="creditcard">Credit Card Number</label>
              <input type="text" onChange={handleChange} name="creditcard" value={formData.creditcard} id="creditcard" />
            </div>
            <div className="flex gap-s"><div className="input-group">
              <label htmlFor="cvc">CVC</label>
              <input type="number" onChange={handleChange} value={formData.cvc} name="cvc" id="cvc" />
            </div>
              <div className="input-group">
                <label htmlFor="exp_month">Month</label>

                <select id="exp_month" name="exp_month" value={formData.exp_month} onChange={handleChange} >
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="exp_year">Year</label>
                <select id="exp_year" name="exp_year" value={formData.exp_year} onChange={handleChange} >
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div></div>
            <div className="input-group">
              <label>Visa or Master Card</label>
              <div className="flex gap-m">
                <label className="flex gap-s">
                  <input type="radio" checked={formData.cctype === "visa"} name="cctype" onChange={handleChange} value="visa" />
                  Visa
                </label>
                <label className="flex gap-s">
                  <input type="radio" checked={formData.cctype === "mastercard"} name="cctype" value="mastercard" onChange={handleChange} />
                  Master Card
                </label>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input type="text" onChange={handleChange} value={formData.address} name="address" id="address" />
            </div>
            <div className="flex gap-s">
              <div className="input-group">
                <label htmlFor="zipcode">Zip Code</label>
                <input type="text" onChange={handleChange} value={formData.zipcode} name="zipcode" id="zipcode" />
              </div>
              <div className="input-group">
                <label htmlFor="city">City</label>
                <select id="city" name="city" onChange={handleChange} value={formData.city} >
                  {cities.map((city) => <option key={city.cCode} value={city.cCode}>{city.name}</option>)}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="district">District</label>
                <select id="district" name="district" defaultValue={"-1"} onChange={handleChange} value={formData.district} >
                  <option value="-1" disabled={true}>Select District</option>
                  {districts.map((district) => <option key={district.cCode} value={district.cCode}>{district.name}</option>)}
                </select>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="gdpr" className="flex gap-s">
                <input type="checkbox" checked={formData.gdpr} name="gdpr" id="gdpr" onChange={handleChange} />
                GDPR</label>
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
