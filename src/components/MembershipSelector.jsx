import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function MembershipSelector({ changeChoosenPlan, finalPrice }) {
  const membershipPlans = [
    {
      name: "Basic",
      price: 300,
    },
    {
      name: "Standard",
      price: 500,
    },
    {
      name: "Family Extra Plus",
      price: 700,
    },
  ];

  const [formData, setFormData] = useState(membershipPlans[0]);

  const handleChange = (event) => {
    membershipPlans.find((plan) => {
      if (plan.name === event.target.value) {
        setFormData(plan);
      }
    });
  };

  useEffect(() => {
    changeChoosenPlan(formData);
  }, [formData]);

  return (
    <>
      <>
        {finalPrice > 0 && (
          <p className="price">
            Aylık {formData.price} yerine, sadece {finalPrice} ₺ ödeyeceksin
          </p>
        )}
        <form>
          <div className="input-group">
            <label>Membership Options</label>
            <div className="flex gap-m">
              {membershipPlans.map((plan) => (
                <label key={plan.name} className="flex gap-s">
                  <input
                    type="radio"
                    checked={formData.name === plan.name}
                    name="membershipPlan"
                    onChange={handleChange}
                    value={plan.name}
                  />
                  {plan.name}
                </label>
              ))}
            </div>
          </div>
        </form>
      </>
      <div>
        <Link to="/payment">Next step</Link>

      </div>
    </>
  )
}
