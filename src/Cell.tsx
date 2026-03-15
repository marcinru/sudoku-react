interface CellProps {
  givenNumber: number | null;
}

export function Cell(props: CellProps) {
  const { givenNumber } = props;

  if (givenNumber == null) {
    return (
      <td>
        <span className="candidates"></span>
        <span className="value"></span>
      </td>
    );
  } else {
    return <td className="given-number">{givenNumber}</td>;
  }
}
