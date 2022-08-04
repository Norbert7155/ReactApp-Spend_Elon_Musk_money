import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import Counter from "./Counter";

const StyleMainComponent = styled.div`
  position: absolute;
  top: 600px;
  left: 0px;
  width: 100%;
`;

const StyleSpaceCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const MainComponent = () => {
  const [shop, setShop] = useState([
    {
      id: 0,
      img: "img/Apartment.jpg",
      name: "Regular Modern Apartment",
      prcice: 43000, //43000
      lot: 0,
    },
    {
      id: 1,
      img: "img/Home.jpg",
      name: "Home",
      prcice: 6000000,
      lot: 0,
    },
    {
      id: 2,
      img: "img/Building.jpg",
      name: "Modern Building",
      prcice: 12000000,
      lot: 0,
    },
    {
      id: 3,
      img: "img/Monalisa.jpg",
      name: "Monalisa by Leonardo da Vinci",
      prcice: 869000000,
      lot: 0,
    },
    {
      id: 4,
      img: "img/Helicopter.jpg",
      name: "Helicopter Bell 206",
      prcice: 750000,
      lot: 0,
    },
    {
      id: 5,
      img: "img/Island.jpg",
      name: "Private Island",
      prcice: 5550000,
      lot: 0,
    },
    {
      id: 6,
      img: "img/FordF150.jpg",
      name: "Ford F150",
      prcice: 65000,
      lot: 0,
    },
    {
      id: 7,
      img: "img/StartUp.jpg",
      name: "StartUp",
      prcice: 5000000,
      lot: 0,
    },
    {
      id: 8,
      img: "img/Yatch.jpg",
      name: "Yatch",
      prcice: 300000000,
      lot: 0,
    },
    {
      id: 9,
      img: "img/plane.jpg",
      name: "Plane",
      prcice: 16000000,
      lot: 0,
    },
    {
      id: 10,
      img: "img/Lamborghini.jpg",
      name: "Lamborghini Aventador",
      prcice: 912000,
      lot: 0,
    },
    {
      id: 11,
      img: "img/land.jpg",
      name: "1000 Acres of land",
      prcice: 4100000,
      lot: 0,
    },
  ]);
  const [remaining, setRemaining] = useState(217000000000);
  const allResources = 217000000000;
  const [percentage_of_expenses, setpercentage_of_expenses] = useState(100);

  const handleBuyButton = (id) => {
    const tab = [...shop];
    const index = tab.findIndex((item) => item.id === id);
    setRemaining(remaining - tab[index].prcice);
    tab[index].lot += 1;
    setShop(tab);
    console.log(remaining);
  };
  const handleSellButton = (id) => {
    const tab = [...shop];
    const index = tab.findIndex((item) => item.id === id);
    if (tab[index].lot < 1) {
      console.log("nie ma misnusa");
    } else {
      setRemaining(remaining + tab[index].prcice);
      tab[index].lot -= 1;
      console.log(tab[index].lot);
      setpercentage_of_expenses(allResources / remaining);
    }
  };
  useEffect(() => {
    setpercentage_of_expenses((100 * remaining) / allResources);
  }, [remaining]);

  return (
    <>
      <StyleMainComponent>
        <Counter
          remaining={remaining}
          percentage_of_expenses={percentage_of_expenses}
        />
        <StyleSpaceCard>
          {shop.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                prcice={item.prcice}
                lot={item.lot}
                remaining={remaining}
                buyButton={handleBuyButton}
                shellButton={handleSellButton}
              />
            );
          })}
        </StyleSpaceCard>
      </StyleMainComponent>
    </>
  );
};

export default MainComponent;
