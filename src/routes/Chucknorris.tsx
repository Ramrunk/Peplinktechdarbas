import { useQuery } from "@tanstack/react-query";
const Chucknorris = () => {
  var {
    data: jokes,
    isLoading,
    error,
    dataUpdatedAt,
  } = useQuery({
    queryFn: () =>
      fetch("https://api.chucknorris.io/jokes/random?category=dev").then(
        (res) => res.json()
      ),
    queryKey: ["jokes"],
    refetchInterval: 15000,
  });
  var time = new Date(dataUpdatedAt);

  if (isLoading) {
    return <h2>Kraunasi...</h2>;
  }

  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <div id="joke">
      <div>
        <img src={jokes.icon_url}></img>
      </div>
      <div>{jokes.value}</div>
      <div>Paskutinį kartą atnaujinta: {time.toString()}</div>
    </div>
  );
};

export default Chucknorris;
