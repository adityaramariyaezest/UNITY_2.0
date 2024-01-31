import Link from "next/link";
import { FunctionComponent } from "react";

interface MyLinkProps {
  classes?: string;
  label: string;
  to: string;
}

const MyLink: FunctionComponent<MyLinkProps> = ({ label, classes, to, ...props }) => {
  return (
    <Link {...props} href={to} className={`${classes} hover:text-blue-500`}>
      {label}
    </Link>
  );
};

export default MyLink;
