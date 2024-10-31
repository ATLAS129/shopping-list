import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

export default function App() {
  const [text, setText] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <>
      <div className="shopping-list">
        <Input
          onAddText={(text) => text && setShoppingList((e) => [...e, text])}
        />
        <List
          list={shoppingList}
          onDeleteItem={(filteredList) => setShoppingList(filteredList)}
        />
      </div>
    </>
  );
}
