import styles from './Drawer.module.scss';

function Drawer({onClose, items = []}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
        </h2>

        <div className={styles.items}>
          {items.map((obj)=>(
          <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className={styles.cartItemImg}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img className={styles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
            </div>
          ))}
        </div>

        <div className={styles.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.greenButton}>
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
