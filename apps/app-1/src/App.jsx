import { Counter } from "@test/common/ui"

function App() {
  return (
    <main>
      <section>
        <h2>Count from 0</h2>
        <Counter />
      </section>

      <section>
        <h2>Count by 3</h2>
        <Counter step={3} />
      </section>

      <section>
        <h2>Count from 20</h2>
        <Counter start={20} />
      </section>
    </main>
  )
}

export default App
