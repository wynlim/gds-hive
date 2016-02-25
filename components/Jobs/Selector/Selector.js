import React from 'react';
import { Link } from 'react-router';
import access from 'safe-access';
import styles from './styles.scss';
import { link } from 'gatsby-helpers';

export default (props) => {
  const list = props.list
    .map((page) => {
      const title = access(page, 'data.title') || page.path;
      const isCurrent = page.isDefault || page.path === props.location.pathname;
      const liClass = isCurrent ? styles.current : '';

      return (
        <li className={liClass} key={page.path}>
          <Link to={link(page.path)}>{title}</Link>
        </li>
      );
    });

  return (
    <div className={props.className}>
      {list}
    </div>
  );
};