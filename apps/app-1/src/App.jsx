import { Clock, Counter } from "@test/common/ui"

function App() {
  return (
    <main>
      <section>
        <h2>Count from 0</h2>
        <Counter />
      </section>

      <section>
        <h2>Clock</h2>
        <Clock />
      </section>
    </main>
  )
}

export default App
