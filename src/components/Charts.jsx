import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, currentCoinData }) => {
  return (
    <div className="charts">
      {/* {coinData.map(coin => ( */}
      {currentCoinData ? 
        <div className="chart__container" key={currentCoinData.name}>
          <h2 className="coin__title">{currentCoinData.name}</h2>
          <h4 className="coin__symbol">{currentCoinData.symbol}</h4>
          <div className="coin__logo">
            <img src={currentCoinData.image} height="40" alt={currentCoinData.name} />
          </div>
          <Chart sparklineData={currentCoinData.sparkline_in_7d.price} />
        </div>
        : null} 
      {/* ))} */}
    </div>
  );
};
export default Charts;
