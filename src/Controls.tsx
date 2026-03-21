const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

interface ControlsProps {
  isCandidateMove: boolean;
  onCandidateSwitchChange: () => void;
  onClick: (num: number) => void;
}

export function Controls({
  isCandidateMove,
  onCandidateSwitchChange,
  onClick,
}: ControlsProps) {
  return (
    <div id="controls">
      <div id="number-controls">
        {numbers.map((number) => (
          <button
            className="text-2xl h-[2em] w-[2em] border border-black bg-white hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer rounded"
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
        checked={isCandidateMove}
        onChange={onCandidateSwitchChange}
      />
    </div>
  );
}
