const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

export function Controls() {
  return (
    <div id="controls">
      <div id="number-controls">
        {numbers.map((number) => (
          <button className="number-control">{number}</button>
        ))}
      </div>
      <input
        id="candidate-switch"
        type="checkbox"
        aria-label="Is candidate move"
      />
    </div>
  );
}
