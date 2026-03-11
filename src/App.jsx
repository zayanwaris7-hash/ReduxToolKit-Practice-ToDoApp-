import { useSelector } from 'react-redux'
import InputBox from './Components/Inputbox'
import TodoList from './Components/TodoList'
import EmptyState from './Components/EmptyState'

function App() {
  // Ensure 'state.todos' matches the key in your store.js configureStore
  const Todo = useSelector((state) => state.todos);

  return (
    <>
      <div className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden">

        {/* 1. Animated Cyber-Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
        </div>

        <main className="max-w-2xl mx-auto pt-24 pb-12 px-6 relative z-10">

          {/* 2. Header */}
          <header className="group mb-12 relative">
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              FOCUS <span className="font-thin text-indigo-400">LAB</span>
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Task Protocol v2.0</p>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
              <span className="text-[10px] font-mono text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                  {/* Shows active count dynamically */}
                  ACTIVE: {Todo.length}
              </span>
            </div>
          </header>

          <div className="space-y-10">

            {/* 3. Floating Input Section */}
            <section className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-black/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-2 shadow-2xl">
                <InputBox />
              </div>
            </section>
            
            {/* 4. List Section */}
            <div className="space-y-4">
              {Todo.length > 0 ? (
                Todo.map((singleTodo) => (
                  <div key={singleTodo.id} className="transform transition-all duration-300 hover:scale-[1.01]">
                    {/* ONLY RENDER HERE with the todo prop */}
                    <TodoList todo={singleTodo} />
                  </div>
                ))
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App