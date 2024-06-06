import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeDots
      color="#304ffe"
      height={45}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
};
