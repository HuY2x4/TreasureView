import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/pages/comp/components/BackgroundBorad';
export default class index extends Component {
  state = {
    active: 1,
  };
  change = (index) => {
    this.setState({ active: index });
  };
  render() {
    return (
      <BackgroundBorad background={'#ECEFFC'}>
        {/* attr没用 */}
        <nav
          className={styles.navtab}
          style={{ '--active-index': this.state.active }}
        >
          <ul>
            {['Home', 'Explore', 'Collection', 'Help'].map((val, index) => {
              return (
                <li
                  className={`${styles['navtab-item']} ${
                    this.state.active === index && styles.active
                  }`}
                  onClick={this.change.bind(this, index)}
                >
                  <svg
                    t="1580196202692"
                    className={styles.icon}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="781"
                    width="36"
                    height="36"
                  >
                    <path
                      d="M555.541333 117.994667l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H640V746.666667c0-70.688-57.312-128-128-128s-128 57.312-128 128v170.666666H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0z"
                      p-id="782"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>{val}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </BackgroundBorad>
    );
  }
}
