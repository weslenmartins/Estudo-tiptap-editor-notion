import { AsideMenu } from './components/Aside'
import Editor from './components/Editor'
import './index.css'

function App() {
  return (
    <div className="Pastel min-h-screen bg-gradient-to-r from-blue-400 to-emerald-400 p-8 text-zinc-50">
      <div className="mx-auto grid min-h-[720px] w-full grid-cols-[16rem_1fr] overflow-hidden rounded-xl border border-black/20 bg-zinc-800 shadow-sm xl:w-[1100px]">
        <AsideMenu />

        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}

export default App
