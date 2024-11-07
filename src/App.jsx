import { useEffect, useState } from "react"
import PaymentForm from "./components/PaymentForm"

function App() {

  const membershipPlans = [
    {
      name: "Basic",
      price: 300
    },
    {
      name: "Standard",
      price: 500
    },
    {
      name: "Family Extra Plus",
      price: 700
    }
  ]

  const [formData, setFormData] = useState(membershipPlans[0]);
  const [finalPrice, setFinalPrice] = useState(0)

  const handleChange = (event) => {
    membershipPlans.find((plan) => {
      if (plan.name === event.target.value) {
        setFormData(plan)
      }
    })
  }

  useEffect(() => {
    const newPrice = (0.95 * formData.price)
    // indirimli vs matematiksel kompleksite
    setFinalPrice(newPrice)
  }, [formData])

  return (
    <div className="App">
      <header>
        <div className="container-lg">NEETFLIK</div>
      </header>
      <main className="flex column gap-m main-container" >
        <div className="container-s">
          {finalPrice > 0 && <p className="price">Aylık {formData.price} yerine, sadece {finalPrice} ₺ ödeyeceksin</p>}
          <form>
            <div className="input-group">
              <label>Membership Options</label>
              <div className="flex gap-m">
                {membershipPlans.map((plan) => (
                  <label key={plan.name} className="flex gap-s">
                    <input type="radio" checked={formData.name === plan.name} name="membershipPlan" onChange={handleChange} value={plan.name} />
                    {plan.name}
                  </label>
                ))}
              </div>
            </div>
          </form>
        </div>
        <PaymentForm selectedPlan={formData} cost={finalPrice} />
        {/* 
        PaymentForm({selectedPlan:formData})
          bütün attribute leri props olarak verir

        props={
        selectedPlan:formData
        } */}
      </main>

    </div>
  )
}

export default App
