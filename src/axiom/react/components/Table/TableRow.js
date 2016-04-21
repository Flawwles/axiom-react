import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class TableRow extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    const className = mergeDefaultClassName(this.props);

    return (
      <tr {...this.props} className={className}>
        {children}
      </tr>
    );
  }
}
