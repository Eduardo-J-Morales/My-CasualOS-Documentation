import { createSignal } from "solid-js";

function App() {
  const [content, setContent] = createSignal(null);
  const [name, setName] = createSignal(null);
  const [code, setCode] = createSignal(null);

  const whispers = [
    { 
    name: "@onCreate", 
    content: `A whisper that is sent to a bot when it is first created.`,
    code: `` 
  },
  { 
    name: "@onDestroy", 
    content: `A whisper that is sent to a bot when it is being destroyed.`,
    code: `` 
  },
  { 
    name: "@onModDrop", 
    content: `A whisper that is sent to a bot that a mod was dropped on.
    If a custom @onModDrop is not specified, then the mod will be applied automatically. 
    If a custom @onModDrop is specified, then the mod needs to be applied manually via applyMod(bot, ...mods).`,
    code: `interface Mod {
  [tag: string]: any;
}

let that: {
  mod: Mod
};` 
  },
  { 
    name: "@onModDropEnter", 
    content: `A whisper that is sent to the bot that a mod started to be dragged onto.`,
    code: `let that: {
  mod: Mod,
  dimension: string
};` 
  },
  { 
    name: "@onModDropExit", 
    content: `A whisper that is sent to the bot that a mod was just dragged off of.`,
    code: `let that: {
  mod: Mod,
  dimension: string
};` 
  },
  { 
    name: "@onClick", 
    content: `A whisper that is sent to the bot that was clicked.`,
    code: `
    let that: {
  /**
   * The face of the bot that was clicked.
   */
  face: 'left' | 'right' | 'front' | 'back' | 'top' | 'bottom';
  
  /**
   * The dimension that the bot was clicked in.
  */
  dimension: string;

  /**
   * The UV Coordinates that were clicked on the bot.
   */
  uv: Vector2;

  /**
   * The modality that was used to click the bot.
   * 
   * - mouse - The mouse was used to click the bot.
   * - touch - A touch screen was used to click the bot.
   * - controller - A XR controller was used to click the bot.
   * - finger - A finger was used to click the bot in XR.
   */
  modality: 'mouse' | 'touch' | 'controller' | 'finger';

  /**
   * For "finger" modalities, which hand was used to click the bot.
   */
  hand: 'left' | 'right';

  /**
   * For "finger" modalities, which finger was used to click the bot.
   */
  finger: 'index' | 'middle' | 'ring' | 'pinky' | 'thumb' | 'unknown';

  /**
   * For "mouse" modalities, which button was used to click the bot.
   */
  buttonId: 'left' | 'middle' | 'right';
}
    ` 
  },
  { 
    name: "@onKeyClick", 
    content: `
    A whisper that is sent to the bot when a key is clicked on it. 
    This event will only be available for bots that have their #form set to keyboard.`,
    code: `let that: {
  key: string
};` 
  },
  { 
    name: "@onPointerEnter", 
    content: `A whisper that is sent to a bot when the mouse cursor starts to hover over it.`,
    code: `let that: {
  /**
   * The bot that the pointer hovered.
   */
  bot: Bot;
  
  /**
   * The dimension that the bot was hovered in.
   */
  dimension: string;

  /**
   * The modality that was used to hover over the bot.
   * 
   * - mouse - The mouse was used to hover over the bot.
   * - touch - A touch screen was used to hover over the bot.
   * - controller - A XR controller was used to hover over the bot.
   * - finger - A finger was used to hover over the bot in XR.
   */
  modality: 'mouse' | 'touch' | 'controller' | 'finger';

  /**
   * For "finger" modalities, which hand was used to hover over the bot.
   */
  hand: 'left' | 'right';

  /**
   * For "finger" modalities, which finger was used to hover over the bot.
   */
  finger: 'index' | 'middle' | 'ring' | 'pinky' | 'thumb' | 'unknown';

  /**
   * For "mouse" modalities, which button was used to hover over the bot.
   */
  buttonId: 'left' | 'middle' | 'right';
};` 
  },
  { 
    name: "@onPointerExit", 
    content: `A whisper that is sent to a bot when the mouse cursor stops hovering over it.`,
    code: `let that: {
  /**
   * The bot that the pointer hovered.
   */
  bot: Bot;
  
  /**
   * The dimension that the bot was hovered in.
   */
  dimension: string;

  /**
   * The modality that was used to hover over the bot.
   * 
   * - mouse - The mouse was used to hover over the bot.
   * - touch - A touch screen was used to hover over the bot.
   * - controller - A XR controller was used to hover over the bot.
   * - finger - A finger was used to hover over the bot in XR.
   */
  modality: 'mouse' | 'touch' | 'controller' | 'finger';

  /**
   * For "finger" modalities, which hand was used to hover over the bot.
   */
  hand: 'left' | 'right';

  /**
   * For "finger" modalities, which finger was used to hover over the bot.
   */
  finger: 'index' | 'middle' | 'ring' | 'pinky' | 'thumb' | 'unknown';

  /**
   * For "mouse" modalities, which button was used to hover over the bot.
   */
  buttonId: 'left' | 'middle' | 'right';
};` 
  },
  { 
    name: "@onPointerDown", 
    content: `A whisper that is sent to a bot when the user starts clicking it.`,
    code: `let that: {
  /**
   * The bot that the pointer started clicking.
   */
  bot: Bot;
  
  /**
   * The dimension that the bot was clicked in.
   */
  dimension: string;

  /**
   * The modality that was used to click the bot.
   * 
   * - mouse - The mouse was used to click the bot.
   * - touch - A touch screen was used to click the bot.
   * - controller - A XR controller was used to click the bot.
   * - finger - A finger was used to click the bot in XR.
   */
  modality: 'mouse' | 'touch' | 'controller' | 'finger';

  /**
   * For "finger" modalities, which hand was used to click the bot.
   */
  hand: 'left' | 'right';

  /**
   * For "finger" modalities, which finger was used to click the bot.
   */
  finger: 'index' | 'middle' | 'ring' | 'pinky' | 'thumb' | 'unknown';

  /**
   * For "mouse" modalities, which button was used to click the bot.
   */
  buttonId: 'left' | 'middle' | 'right';
};` 
  },
  { 
    name: "@onPointerUp", 
    content: `A whisper that is sent to a bot when the user stops clicking it.`,
    code: `let that: {
  /**
   * The bot that the pointer stopped clicking.
   */
  bot: Bot;
  
  /**
   * The dimension that the bot was clicked in.
   */
  dimension: string;

  /**
   * The modality that was used to click the bot.
   * 
   * - mouse - The mouse was used to click the bot.
   * - touch - A touch screen was used to click the bot.
   * - controller - A XR controller was used to click the bot.
   * - finger - A finger was used to click the bot in XR.
   */
  modality: 'mouse' | 'touch' | 'controller' | 'finger';

  /**
   * For "finger" modalities, which hand was used to click the bot.
   */
  hand: 'left' | 'right';

  /**
   * For "finger" modalities, which finger was used to click the bot.
   */
  finger: 'index' | 'middle' | 'ring' | 'pinky' | 'thumb' | 'unknown';

  /**
   * For "mouse" modalities, which button was used to click the bot.
   */
  buttonId: 'left' | 'middle' | 'right';
};` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },
  { 
    name: "", 
    content: ``,
    code: `` 
  },


  ];

  const handleContent = (id) => {
    setName(whispers.find((whisper) => whisper.name === id)?.name);
    setContent(whispers.find((whisper) => whisper.name === id)?.content);
    setCode(whispers.find((whisper) => whisper.name === id)?.code)
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
      <div class="bg-black text-white text-start mx-40 rounded-md">
        <pre>
          <code >
            {code()}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;
