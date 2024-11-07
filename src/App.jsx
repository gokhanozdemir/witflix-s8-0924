import { useEffect, useState } from "react"
import PaymentForm from "./components/PaymentForm"
import { MembershipSelector } from "./components/MembershipSelector"
function App() {

  const [choosenPlan, setChoosenPlan] = useState({})
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    const newPrice = 0.95 * choosenPlan.price;
    // indirimli vs matematiksel kompleksite
    setFinalPrice(newPrice);
  }, [choosenPlan]);

  return (
    <div className="App">
      <header>
        <div className="container-lg">NEETFLIK</div>
      </header>
      <main className="flex column gap-m main-container" >
        <div className="container-s">
          <MembershipSelector changeChoosenPlan={setChoosenPlan} finalPrice={finalPrice} />
        </div>
        <div className="container-s">
          <PaymentForm selectedPlan={choosenPlan} cost={finalPrice} />
        </div>
      </main>

    </div>
  )
}

export default App
