const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

interface ControlsProps {
  onClick: (num: number) => void;
}

export function Controls({ onClick }: ControlsProps) {
  return (
    <div id="controls">
      <div id="number-controls">
        {numbers.map((number) => (
          <button
            className="number-control"
            key={number}
            onClick={() => {
              onClick(number);
            }}
          >
            {number}
          </button>
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
