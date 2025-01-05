import Link from "next/link";

function PickColorPage() {
  const colors = ["red", "green", "blue", "purple"];
  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>
          <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PickColorPage;
