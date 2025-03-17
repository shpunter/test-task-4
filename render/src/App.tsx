import Render from "./Render/Render";

function App() {
  const item = {
    id: 1,
    type: "text" as const,
    description: "description",
    headline: "headline"
  };
  
  return <Render item={item} />;
}

export default App;
