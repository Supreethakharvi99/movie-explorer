import Header from "./components/Header"


function App() {

  return (
  <div className="min-h-screen bg-slate-100">
    <Header/>

    <main className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="text-center text-3xl font-bold text-slate-900">
      Movie Explorer
     </h2>

     <p className="mt-2 text-slate-500">
      Search and discover movies you love.
     </p>
    </main>
  </div>
  )
}

export default App
