type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, align = "left", light = false }: Props) {
  return (
    <div className={`heading heading--${align}${light ? " heading--light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
