interface Item {
  id: number;
  name: string;
}

interface Props {
  items: Item[];
  heading: string;
  onItemClick: (item: Item) => void;
}

function List({ items, heading, onItemClick }: Props) {
  //let items = props.items;
  //let heading = props.heading;

  return (
    <div>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.map((item: any) => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => onItemClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
