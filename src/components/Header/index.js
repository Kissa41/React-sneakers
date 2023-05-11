import styles from './Header.module.scss';
function Header(props) {
  return (
    <header className={styles.header}>
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="Logotype" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>1205 руб. </span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;