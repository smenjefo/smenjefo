import React from "react";

import styles from './styles/styles.module.scss';

interface IPaginationProps {
  itemsCount: number;
}

const Pagination: React.FC<IPaginationProps> = (props) => {
  const { itemsCount } = props;

  const items = () => {
    return [...Array(itemsCount).keys()].reverse();
  };

  return (
    <ul className={styles['pagination']}>
      {items().map((itemNumber) => {
        if (!itemNumber) {
          return null;
        }

        return (
          <li
            className={styles['pagination__item']}
            key={itemNumber}
          >
            {itemNumber}
          </li>
        );
      })}
    </ul>
  );
};

Pagination.defaultProps = {
  itemsCount: 0,
};

export default Pagination;
