import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class TableCell extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
    isNumber: PropTypes.bool,
  };

  render() {
    const {children, isNumber} = this.props;
    const className = mergeDefaultClassName(this.props, {
      'ax-table__cell--number': isNumber === true,
    });

    return (
      <td {...this.props} className={className}>
        {children}
      </td>
    );
  }
}
