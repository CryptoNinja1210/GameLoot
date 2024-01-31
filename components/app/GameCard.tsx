import Image from "next/image";
import Link from "next/link";
import { GameEntity } from "../../lib/interfaces/custom.types";

interface GameCardProps {
  game: GameEntity;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="mr-6 rounded-[24px] overflow-hidden cursor-pointer">
      <Link href={`/app/${game.id}`}>
        <Image
          src={game.thumbnailUrl}
          alt={game.gameName}
          width={250}
          height={160}
          style={{ width: "auto", height: "auth" }}
        />
      </Link>
    </div>
  )
}

export default GameCard;