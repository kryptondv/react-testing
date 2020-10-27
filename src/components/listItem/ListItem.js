import React from 'react';
import PropTypes, { string } from 'prop-types';

const ListItem = ({ title, desc }) => {

  if(!title){
    return null;
  }

  return (
    <div data-test="listItemComponent">
      <h2 data-test="title">{title}</h2>
      <p data-test="desc">{desc}</p>
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
