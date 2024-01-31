import { useState, useEffect } from "react";
import axios from "axios";
import Moeda from "./Moeda";

function CryptoTableList() {
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setMoedas(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredMoedas = moedas.filter((moeda) => moeda.name.toLowerCase());
  return (
    <div className="divide-y divide-jacarta-100 dark:divide-jacarta-600">
      {filteredMoedas.slice(0, 5).map((moeda) => {
        return (
          <Moeda
            key={moeda.id}
            name={moeda.name}
            rank={moeda.market_cap_rank}
            price={moeda.current_price}
            symbol={moeda.symbol}
            volume={moeda.market_cap}
            image={moeda.image}
            priceChange={moeda.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}
export default CryptoTableList;
