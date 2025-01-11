export default function WayToTeach({ title, desc }) {
  return (
    <li>
      <p>
        <strong>{title}</strong> {desc}
      </p>
    </li>
  );
}