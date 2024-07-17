import "./style.scss";

export const UserContact = ({ createNumberById, email }) => {
  return (
    <div className="user-contact">
      <p className="number">{createNumberById()}</p>
      <p className="email">{email}</p>
    </div>
  );
};
