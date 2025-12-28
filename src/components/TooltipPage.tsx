import Tooltip from "../core-components/Tooltip/Tooltip";

export default function ExamplePage() {
  return (
    <div style={{ padding: "40px" }}>
      <Tooltip content="This is a tooltip">
        <button>Click me</button>
      </Tooltip>
    </div>
  );
}
