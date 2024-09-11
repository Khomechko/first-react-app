import "./style.scss";

type Props = {
  number: string;
  email: string;
};

export const UserContact = ({ number, email }: Props) => {
  return (
    <div className="user-contact">
      <p className="number">{number}</p>
      <p className="email">{email}</p>
    </div>
  );
};
