import React, { useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesPage from "./features/games/GamesPage";
import { getGames } from "./features/games/gameSlice";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
