import Image from "next/image";
import { GameEntity } from "../../../lib/interfaces/custom.types";
import { Typography } from "@material-tailwind/react";

interface AboutTabProps {
  game: GameEntity;
}

export default function AboutTab({ game }: AboutTabProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <Typography variant="h5" className="my-4">
          About the game
        </Typography>
        {game.description || "Game's Description will be placed here."}
      </div>

      <div className="flex flex-col gap-8 w-[256px]">
        <Typography variant="h5" className="my-4">
          ScreenShots
        </Typography>
        <Image
          src={game.thumbnailUrl}
          width={256}
          height={150}
          alt="Screenshot"
        />
        <Image
          src={game.thumbnailUrl}
          width={256}
          height={150}
          alt="Screenshot"
        />
      </div>
    </div>
  )
}