type Props = {};

export default function Bubbletext({}: Props) {
  return (
    <h2 className="text-center text-5xl font-thin text-gray-300">
      {"NOUREDDINE Abdelali".split("").map((child, index) => (
        <span className={"hoverText"} key={index}>
          {child}
        </span>
      ))}
    </h2>
  );
}
