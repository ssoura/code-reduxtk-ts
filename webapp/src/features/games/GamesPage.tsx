import React from "react";
import { useAppSelector } from "../../store/store";

function GamesPage() {
  const items = [1, 2, 3, 3, 4];
  const { games } = useAppSelector((state) => state.games);
  console.log(games);
  return <div></div>;
}

export default GamesPage;
