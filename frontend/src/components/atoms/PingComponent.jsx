import usePing from "../../hooks/apis/queries/usePing";

export const PingComponent = () => {
  const { isLoading, data } = usePing();

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <div>
      <h1>{data.msg}</h1>
    </div>
  );
};
