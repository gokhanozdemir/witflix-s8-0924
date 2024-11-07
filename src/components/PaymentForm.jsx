import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";


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
  "exp_month": "-1",
  "exp_year": "-1",
  "cctype": "",
  "address": "",
  "zipcode": "",
  "city": "-1",
  "district": "-1",
  "gdpr": false
}

function PaymentForm({ selectedPlan, cost }) {
  let history = useHistory();

  const { name: planName, price: planPrice } = selectedPlan;

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target
    console.log("type, name, value, checked:", type, name, value, checked)

    // FIXME ayrı bir fonsiyon oluştur iki parametresi olsun
    // fieldName ve fieldValue
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
    /* START Alan hata kontrolüne başlar */
    const updatedErrors = {
      ...errors,
    }

    // FIXME: initialErrorMessages adında bir const oluştur
    // mesaj stringlerini içeri taşı
    if (name === "creditcard") {
      if (value.length < 16) {
        updatedErrors[name] = "Kredi kartı numarası 16 hane olmalıdır."
      } else {
        updatedErrors[name] = ""
      }
    }

    if (name === "firstname" || name === "lastname" || name === "address" || name === "cvc") {
      if (value.length < 3) {
        updatedErrors[name] = "En az 3 karakter olmalıdır."
      } else {
        updatedErrors[name] = ""
      }
    }

    if (name === "zipcode") {
      if (value.length < 5) {
        updatedErrors[name] = "En az 5 karakter olmalıdır."
      } else {
        updatedErrors[name] = ""
      }
    }

    if (name === "cctype") {
      if (value === "") {
        updatedErrors[name] = "Bir kart tipi seçmelisiniz."
      } else {
        updatedErrors[name] = ""
      }
    }

    if (name === "gdpr") {
      if (!checked) {
        updatedErrors[name] = "GDPR onamı zorunludur."
      } else {
        updatedErrors[name] = ""
      }
    }

    if (name === "city" || name === "district" || name === "exp_month" || name === "exp_year") {
      if (value === "-1") {
        updatedErrors[name] = "Bir seçim yapınız."
      } else {
        updatedErrors[name] = ""
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        updatedErrors[name] = "Gecersiz email adresi."
      } else {
        updatedErrors[name] = ""
      }
    }

    setErrors(updatedErrors)
    /* END Alan hata kontrolüne BİTER */
  }

  const checkIsValid = () => {
    let isValidStatus = false;
    // FIXME Object.keys
    if ((formData.firstname && !errors.firstname) && (formData.lastname && !errors.lastname) && (formData.email && !errors.email) && (formData.cvc && !errors.cvc) && (formData.creditcard && !errors.creditcard) && (formData.address && !errors.address) && (formData.zipcode && !errors.zipcode) && (formData.city && !errors.city) && (formData.district && !errors.district) && (formData.gdpr && !errors.gdpr)) {
      isValidStatus = true
    }
    setIsValid(isValidStatus) // isValid
  }

  const handleCancel = () => {
    console.log("vazgeçtim nazlı netflikten")
    history.push("/");
  }

  useEffect(() => {
    // formda her hangi bir hata var mı?
    // isValid gibi bir state
    checkIsValid()

  }, [formData])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkIsValid()) {
      console.log("olala formda herhangi bir hata var")
      return
    }
    console.log("formdata", formData)
    // burada axios vs TODO
    setFormData(initialForm)
    setErrors({})
    setIsValid(false)
  }

  return (
    <div className="container-lg">
      <form onSubmit={handleSubmit} className="flex column gap-s">

        <div className="flex gap-s">
          <div className="input-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" value={formData.firstname} onChange={handleChange} name="firstname" id="firstname" />
            {errors.firstname && <div className="error">{errors.firstname}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" value={formData.lastname} onChange={handleChange} name="lastname" id="lastname" />
            {errors.lastname && <div className="error">{errors.lastname}</div>}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" onChange={handleChange} value={formData.email} name="email" id="email" />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="input-group">
          <label htmlFor="creditcard">Credit Card Number</label>
          <input type="text" onChange={handleChange} name="creditcard" value={formData.creditcard} id="creditcard" />
          {errors.creditcard && <div className="error">{errors.creditcard}</div>}
        </div>
        <div className="flex gap-s"><div className="input-group">
          <label htmlFor="cvc">CVC</label>
          <input type="number" onChange={handleChange} value={formData.cvc} name="cvc" id="cvc" />
          {errors.cvc && <div className="error">{errors.cvc}</div>}
        </div>
          <div className="input-group">
            <label htmlFor="exp_month">Month</label>

            <select id="exp_month" name="exp_month" value={formData.exp_month} onChange={handleChange} >
              <option value="-1" disabled={true}>Select Month</option>
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
            {errors.exp_month && <div className="error">{errors.exp_month}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="exp_year">Year</label>
            <select id="exp_year" name="exp_year" value={formData.exp_year} onChange={handleChange} >
              <option value="-1" disabled={true}>Select Year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
            {errors.exp_year && <div className="error">{errors.exp_year}</div>}
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
          {errors.cctype && <div className="error">{errors.cctype}</div>}
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" onChange={handleChange} value={formData.address} name="address" id="address" />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>
        <div className="flex gap-s">
          <div className="input-group">
            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" onChange={handleChange} value={formData.zipcode} name="zipcode" id="zipcode" />
            {errors.zipcode && <div className="error">{errors.zipcode}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <select id="city" name="city" onChange={handleChange} value={formData.city} >
              <option value="-1" disabled={true}>Select City</option>
              {cities.map((city) => <option key={city.cCode} value={city.cCode}>{city.name}</option>)}
            </select>
            {errors.city && <div className="error">{errors.city}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="district">District</label>
            <select id="district" name="district" defaultValue={"-1"} onChange={handleChange} value={formData.district} >
              <option value="-1" disabled={true}>Select District</option>
              {districts.map((district) => <option key={district.cCode} value={district.cCode}>{district.name}</option>)}
            </select>
            {errors.district && <div className="error">{errors.district}</div>}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="gdpr" className="flex gap-s">
            <input type="checkbox" checked={formData.gdpr} name="gdpr" id="gdpr" onChange={handleChange} />
            GDPR</label>
          {/* shortcircuiting */}
          {errors.gdpr && <div className="error">{errors.gdpr}</div>}
        </div>
        <div>Selected Plan: {planName} and initial price {planPrice}, Amount to be paid with discount {cost} </div>
        <div className="flex between ">
          <button disabled={!isValid} type="submit" className="action-button">Pay Now</button>
          <button type="button" onClick={handleCancel} className="secondary-button">Cancel</button>
          <button type="button" className="secondary-button">Reset Form</button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
