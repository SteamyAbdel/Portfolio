type Props = {};

export default function Bubbletext({}: Props) {
  return (
    <h2 className="text-center text-5xl text-white font-bold">
      {"NOUREDDINE Abdelali".split("").map((child, index) => (
        <span className={"hoverText"} key={index}>
          {child}
        </span>
      ))}
    </h2>
  );
}
