interface CellProps {
  givenNumber: number | null;
  isSelected: boolean;
  onClick: () => void;
}

export function Cell(props: CellProps) {
  const { givenNumber, isSelected, onClick } = props;

  if (givenNumber == null) {
    return (
      <td className={isSelected ? 'selected' : undefined} onClick={onClick}>
        <span className="candidates"></span>
        <span className="value"></span>
      </td>
    );
  } else {
    return <td className="given-number">{givenNumber}</td>;
  }
}
