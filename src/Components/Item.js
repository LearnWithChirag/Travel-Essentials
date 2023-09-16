import '../CSS/Item.css';
export default function Item({ item, onDeleteItems, onToggleItems }) {
    return (
      <li className="items-list">
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItems(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
           {item.data}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    );
  }