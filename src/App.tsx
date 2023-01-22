import { Content } from './components/Content'

function App() {
  return (
    <main className="w-80 h-auto bg-white p-4 rounded-2xl font-outfit flex flex-col shadow-lg shadow-gray-400"> 
      <div> 
        <img src="/image-qr-code.png" alt="QR code" className="rounded-xl hover:scale-105"/>
      </div>
      <Content />
    </main>
  )
}

export default App
