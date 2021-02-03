import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/components/BackgroundBorad';
export default class index extends Component {
  render() {
    const menuText = ['Home', 'Archives', 'Tags', 'Categorires', 'About'];
    return (
      <BackgroundBorad background="#1A1E23">
        <ul className={styles['float-text-menu']}>
          {menuText.map((val, index) => {
            return (
              <li key={index}>
                <a href="#" data-text={val}>
                  {val.split('').map((val2, index) => {
                    return (
                      <span
                        key={index}
                        style={{ transitionDelay: `${index / 20}s` }}
                        data-text={val2}
                      >
                        {val2}
                      </span>
                    );
                  })}
                </a>
              </li>
            );
          })}
        </ul>
      </BackgroundBorad>
    );
  }
}
