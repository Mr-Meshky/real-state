import { ChildrenProps } from "../template/type";

export const Title = ({ children }: ChildrenProps) => {
  return (
    <h3 className="text-primary text-lg font-normal border-b-2 border-[#c0c0c0] mb-5 pb-2.5">
      {children}
    </h3>
  );
};
