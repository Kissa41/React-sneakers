import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import "./index.scss";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6457bfb31a4c152cf9897b01.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  console.log(searchValue);

  const onAddToCart = (obj) => {
    cartItems.find((item) => item.imageUrl === obj.imageUrl)
      ? setCartItems((prev) => [...prev])
      : setCartItems((prev) => [...prev, obj]);
    obj.isAdded = true;
  };
  const onRemoveFromCart = (obj) => {
    let index = cartItems.indexOf(
      cartItems.find((item) => item.imageUrl === obj.imageUrl)
    );
    cartItems.splice(index, 1);
    obj.isAdded = false;
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={(obj) => onRemoveFromCart(obj)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-35">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="cu-p clear"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap justify-center sneakers">
          {items
            .filter(item => item.title.includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlusClick={(obj) =>
                  obj.isAdded ? onRemoveFromCart(obj) : onAddToCart(obj)
                }
                onFavoriteClick={() => alert("Лайкнули")}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
