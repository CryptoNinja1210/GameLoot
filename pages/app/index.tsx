import { useElementSize } from "usehooks-ts";
import GamesRow from "../../components/app/GamesRow";
import PageContainer from "../../components/layout/PageContainer";

const App = () => {
  const [squareRef, { width }] = useElementSize();
  const cardsPerRow = Math.floor((width || 1) / 260);

  return (
    <PageContainer>
      <div ref={squareRef}>
        <GamesRow category="Action" cardsPerRow={cardsPerRow} />
        <GamesRow category="Adventure" cardsPerRow={cardsPerRow} />
        <GamesRow category="Beauty" cardsPerRow={cardsPerRow} />
        <GamesRow category="Bike" cardsPerRow={cardsPerRow} />
        <GamesRow category="Card" cardsPerRow={cardsPerRow} />
      </div>
    </PageContainer>
  )
}

export default App;