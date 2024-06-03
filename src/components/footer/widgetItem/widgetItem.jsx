
export default function Widget({ title, children }) {
  return (
    <div className="widget">
      <div>{title}</div>
      {children}
    </div>
  );
}
