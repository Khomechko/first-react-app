import "./style.scss";

type Props = {
  createNumberById: () => string;
  email: string;
};

export const UserContact = ({ createNumberById, email }: Props) => {
  return (
    <div className="user-contact">
      <p className="number">{createNumberById()}</p>
      <p className="email">{email}</p>
    </div>
  );
};
