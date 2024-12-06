import { createSignal } from "solid-js";

function App() {
  const [content, setContent] = createSignal(null);
  const [name, setName] = createSignal(null);

  const whispers = [
    { name: 2, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
    { name: 3, content: "" },
  ];

  const handleContent = (id) => {
    setContent(whispers.find((whisper) => whisper.name === id)?.content);
    setName(whispers.find((whisper) => whisper.name === id)?.name);
  };
  return (
    <div>
      <div  class=" flex flex-wrap px-4 py-2">
        {whispers.map((item) => (
          <div  class="px-4 py-2">
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-opacity-50" 
          onClick={() => handleContent(item.name)}>{item.name}</button>
          </div>
        ))}
      </div>
      <div class={`max-w-4xl mx-auto p-8 rounded-lg`}>
        <h1 class="text-3xl font-bold mb-4">{name()}</h1>
        <p class="text-gray-700 mb-4">{content()}</p>
      </div>
    </div>
  );
}

export default App;
