import { createSignal } from 'solid-js';

function App() {
  const [content, setContent] = createSignal('');
  const [Name, setName] = createSignal('');

 const whispers = [
    { name: 1, content: 'Whisper 1' },
    { name: 2, content: 'Whisper 2' },
    { name: 3, content: 'Whisper 3' },
  ]

  const handleContent = (id) => {
    setContent(whispers.find(whisper => whisper.name === id)?.content);
    setName(whispers.find(whisper => whisper.name === id)?.name);
  }
  return (
    <div>
        <div className="justify-center space-x-4 p-4 bg-gray-100">
        {whispers.map(item => (
          <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-opacity-50"
          onClick={() => handleContent(item.name)}>{item.name}</button>
        ))}
      </div>
      <div id="contenido">
      <h1 class="text-3xl font-bold mb-4">Título del Artículo</h1>
        {content()}
      </div>
    </div>
  );
}

export default App;
