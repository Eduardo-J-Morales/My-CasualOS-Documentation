import { createSignal } from 'solid-js';

function App() {
  const [content, setContent] = createSignal('Contenido inicial');

  return (
    <div>
      <div>
        <button onClick={() => setContent('Contenido 1')}>Botón 1</button>
        <button onClick={() => setContent('Contenido 2')}>Botón 2</button>
        <button onClick={() => setContent('Contenido 3')}>Botón 3</button>
      </div>
      <div id="contenido">
        {content()}
      </div>
    </div>
  );
}

export default App;
