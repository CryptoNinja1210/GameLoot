import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useGames } from "../../hooks/useGames";
import { CategoryEnum } from "../../lib/interfaces/custom.types";
import GameCard from "./GameCard";

interface GamesRowProps {
  category: CategoryEnum;
  cardsPerRow: number;
}

export default function GamesRow({ category, cardsPerRow }: GamesRowProps) {
  const { isGamesLoading, games, } = useGames({ category, name: "" });

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (games.length > 0) {
      setTimeout(() => {
        sliderRef?.current?.slickGoTo(Math.min(currentSlide, games.length - cardsPerRow));
      }, 10);
    }
  }, [cardsPerRow, currentSlide, games]);

  return (
    <div ref={parentRef}>
      <div className="text-lg mt-4 mb-2">
        {category} Games
      </div>

      {isGamesLoading ? (
        <p>Loading...</p>
      ) : games.length === 0 ? (
        <p>Nothing yet</p>
      ) : (
        <Slider
          ref={sliderRef}
          beforeChange={(_, nextSlide) => setCurrentSlide(nextSlide)}
          centerPadding="50px"
          rows={1}
          dots={false}
          arrows={false}
          infinite={false}
          speed={300}
          swipeToSlide
          variableWidth={true}
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </Slider>
      )}
    </div>
  )
}