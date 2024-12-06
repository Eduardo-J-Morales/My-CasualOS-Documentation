import { createSignal } from "solid-js";

function App() {
  const [content, setContent] = createSignal(null);
  const [name, setName] = createSignal(null);

  const whispers = [
    { name: "@onCreate", content: "A whisper that is sent to a bot when it is first created." },
    { name: "@onDestroy", content: "A whisper that is sent ot a bot when it is being destroyed." },
    { name: "@onModDrop", content: "A whisper that is sent to a bot that a mod was dropped on. If a custom @onModDrop is not specified, then the mod will be applied automatically. If a custom @onModDrop is specified, then the mod need to be applied manually via applyMod(bot, ..mods)." },
    { name: "@onModDropEnter", content: "A whisper that is sent to the bot that a mod started to be dragged onto." },
    { name: "@onModDropExit", content: "A whisper that is sent to the bot that a mod was just dragged off of." },
    { name: "@onClick", content: "A whisper that is sent to the bot that was clicked." },
    { name: "@onKeyClicked", content: "A whisper that is sent to the bot when a key is clicked on it. This event will only be available for bots that have their #form set to keyboard" },
    { name: "@onPointerEnter", content: "A whisper that is sent to the bot when the mouse cursor start to hover over it." },
    { name: "@onPointerExit", content: "A whisper that is sent to a bot when the mouse cursor stops hovering over it." },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
    { name: "", content: "" },
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
