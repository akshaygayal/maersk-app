import "./Grid.css";

export default function Grid(props) {
  return (
    <div className="grid-container">
      {props.nums.map((number) => (
        <div className="grid-item">{number}</div>
      ))}
    </div>
  );
}
