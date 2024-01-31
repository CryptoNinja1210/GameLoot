import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { getGames, getOneGame, getAllGames } from "../lib/api/gameAPIs";
import { CategoryEnum, GameEntity } from "../lib/interfaces/custom.types";

const GAMES_PER_PAGE = 100;

interface UseGamesProps {
  category: CategoryEnum;
  name?: string;
}

// Hook to fetch games by Category. Supports infinite loading.
export function useGames({ category, name }: UseGamesProps) {
  const { isLoading, data, size, setSize, mutate } = useSWRInfinite(
    (index) => ["getGames", category, name, index * GAMES_PER_PAGE],
    ([, category, name]) => getGames({
      category,
      gameName: name || "",
    })
  );

  const lastResponse = data && data[data.length - 1];

  const games = data ? ([] as GameEntity[]).concat(...data) : [];

  const isEmpty = data?.at(0)?.length === 0;

  const isLoadingMore = isLoading ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  const isReachingEnd = isEmpty || (lastResponse && lastResponse.length <= GAMES_PER_PAGE);

  const loadMore = () => isReachingEnd ? null : setSize(size + 1);

  return {
    isGamesLoading: isLoading,
    isGamesLoadingMore: isLoadingMore,
    loadMoreGames: loadMore,
    isGamesReachingEnd: isReachingEnd,
    games,
    refreshGames: mutate
  };
}

export const useOneGame = (gameId: string) => {
  const { isLoading, data } = useSWR(
    gameId ? ["getOneGame", gameId] : null,
    ([, gameId]) => getOneGame(gameId)
  );

  return { isLoading, data };
}

export const useAllGames = () => {
  const { isLoading, data } = useSWR(["getAllGames"] ,() => getAllGames());

  return { isLoading, data };
}