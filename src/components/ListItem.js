import React from 'react';
import { map } from 'lodash';
import Item from './Item';
const ListItem = ({ values }) => {
    return(
      <ol>
          {
              map(values,
                (v) => <Item key = {v} value = {v} />
                )
          }
      </ol>
    )

}


export default ListItem;
