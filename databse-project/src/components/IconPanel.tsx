import "./IconPanel.css";

interface Props {
  items: string[];
  heading: string;
}

function IconPanel(props: Props) {
  return (
    <div className="outerPanel">
      <h2>{props.heading}</h2>
      <div className="innerPanel">
        {props.items.slice(0, 9 * 4).map((item) => (
          <img
            src={item}
            alt={item}
            key={item}
            onClick={() => {
              console.log(item);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default IconPanel;

/**
 * {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}, {index}
          </li>
        ))}
 * 
 */
