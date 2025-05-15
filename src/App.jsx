import { useState } from "react";
import Header from "./components/header";
import GetirContent from "./views/getir-content";

function App() {
  const [content, setContent] = useState("getir");

  return (
    <main>
      <Header
        selectedMenu={content}
        onMenuItemClick={(clickedItem) => {
          setContent(clickedItem);
        }}
      />
      {content === "getir" ? <GetirContent /> : ""}
      {content === "getiryemek" ? "getiryemek sayfası içeriği" : ""}
    </main>
  );
}

export default App;
