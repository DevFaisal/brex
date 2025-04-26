import { ReactNode } from "react";

const Page = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <section className={`max-w-[93em] mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Page;
