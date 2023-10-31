import { useEffect, useState } from "react";

function App () {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    console.log('effect ', { enabled })
    
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY  })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
    // En la consola chromium se puede ver quien y cuantas veces se suscribe 
    // a algun elemento usando getEventListeners(window)
    // Limpiar useEffect cuando se desactiva el componente
    // o cuando cambia la dependencia antes de ejecutar el efecto nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
  
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#rgba(0, 0, 0, 0.5)',
        border: '2px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50, 
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}/>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar': 'Activar'} seguir el puntero
      </button>
    </main>
  )
}

export default App
