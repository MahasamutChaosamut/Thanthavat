
import Link from 'next/link';

const ActiveLink = ({
  children,
  className,
  activeClassName,
  href,
  ...props
}: any) => {
  return (
    <Link
      {...props}
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
