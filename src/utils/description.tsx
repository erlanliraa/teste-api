interface Props {
  label: string;
  value: string | React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
  labelFontsize?: string;
  valueFontsize?: string;
}
export function Description({
  label,
  value,
  textAlign = 'left',
  labelFontsize,
  valueFontsize,
}: Props) {
  return (
    <div className="flex gap-1 ">
      <div
        className="font-bold"
        style={{
          fontSize: labelFontsize,
        }}
      >
        {label}:
      </div>
      <div
        style={{
          fontSize: valueFontsize,
          textAlign,
        }}
      >
        {value}
      </div>
    </div>
  );
}
