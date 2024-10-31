import { RxCross2 } from "react-icons/rx";

export default function List({ list, onDeleteItem }) {
  return (
    <div className="shopping-list-items">
      {list.map((item, index) => (
        <p key={item} className="shopping-item">
          {item}
          <RxCross2
            className="delete-btn"
            size={25}
            onClick={() => onDeleteItem(list.filter((_, i) => i != index))}
          />
        </p>
      ))}
    </div>
  );
}
