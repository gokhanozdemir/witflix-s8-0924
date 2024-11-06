import PaymentForm from "./components/PaymentForm"

function App() {

  return (
    <div className="App">
      <header>
        <div className="container-lg">NEETFLIK</div>
      </header>
      <main className="flex column gap-m main-container" >
        <PaymentForm />
      </main>

    </div>
  )
}

export default App
