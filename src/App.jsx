import { useEffect, useState } from "react"
import PaymentForm from "./components/PaymentForm"
import { MembershipSelector } from "./components/MembershipSelector"

import {
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

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
        <div className="container-lg">
          <Link to="/" >NEETFLIK</Link>
          {/* <a href="/">anchor etiketi kullnılacak her yerde Link</a> */}
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/payment">Payment</NavLink>
            </li>

          </ul>
        </div>
      </header>
      <main className="flex column gap-m main-container" >
        <Switch>
          <Route path="/" exact>
            <div className="container-s">
              <MembershipSelector changeChoosenPlan={setChoosenPlan} finalPrice={finalPrice} />
            </div>
          </Route>
          <Route path="/payment">
            <div className="container-s">
              <PaymentForm selectedPlan={choosenPlan} cost={finalPrice} />
            </div>
          </Route>

        </Switch>
      </main>

    </div>
  )
}

export default App
