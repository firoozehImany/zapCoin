import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" style={{ height: 52 }}>
      <img src="/assets/images/zapCoinLogo.svg" alt="zapCoinLogo" width={100} />
    </Link>
  );
}
