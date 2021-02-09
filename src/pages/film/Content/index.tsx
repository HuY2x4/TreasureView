import React, { Component } from 'react';
import styles from './index.less';

export default class index extends Component<any> {
  state = {
    type: 'movie',
  };
  render() {
    const { data } = this.props;
    return (
      <div className={styles.wrap}>
        <header>
          <ul className={styles.tab_wrap}>
            {data.map((val: any, index: number) => {
              return (
                <li
                  key={index}
                  className={`${styles.tab_item} ${
                    this.state.type == val.type && styles.tab_item_choose
                  }`}
                  onClick={() => {
                    this.setState({ type: val.type });
                  }}
                >
                  {val.name}
                </li>
              );
            })}
          </ul>
        </header>
        <main>
          <ul className={styles.list_wrap}>
            {data
              .find((val: any) => val.type === this.state.type)
              .content.map((val: any, index: number) => {
                return (
                  <li className={styles.film_wrap}>
                    <img src={val.cover} alt="" className={styles.film_cover} />
                    <div className={styles.film_name}>{val.name}</div>
                  </li>
                );
              })}
          </ul>
        </main>
      </div>
    );
  }
}
