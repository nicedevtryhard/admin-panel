import "./Dialog.scss";
export default function Dialog({ active, setActive, children }) {
  return (
    <div
      className={active ? "dialog active" : "dialog"}
      onClick={() => setActive(false)}
    >
      <div className="dialog__container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
