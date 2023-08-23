export const Menu = ({ label, children }) => {
  return (
    <div>
      <div className="memo-menu-row">
        <div className="memo-menu-left-column">
          <p>{label}</p>
        </div>
        <div className="memo-menu-right-column">{children}</div>
      </div>
    </div>
  );
};
