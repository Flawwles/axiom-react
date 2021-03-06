import React, { Component } from 'react';
import flatten from 'lodash.flatten';
import {
  Select,
  SelectOption,
  SelectOptionGroup,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

const options = [[
  { label: 'Apple', value: 'ap' },
  { label: 'Banana', value: 'ba' },
  { label: 'Grape', value: 'gr' },
  { label: 'Grapefruit', value: 'gra' },
  { label: 'Mango', value: 'ma' },
  { label: 'Pear', value: 'pe' },
  { label: 'Peach', value: 'pa' },
  { label: 'Pineapple', value: 'pi', disabled: true },
  { label: 'Plum', value: 'pl' },
], [
  { label: 'Broccoli', value: 'br' },
  { label: 'Cabbage', value: 'ca' },
  { label: 'Carrot', value: 'car' },
  { label: 'Cauliflower', value: 'cau' },
  { label: 'Pea', value: 'pea' },
  { label: 'Runner Bean', value: 'ru' },
]];

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange({ target }) {
    const selectedOption = flatten(options).filter(
      o => o.label.toLowerCase() === target.value.toLowerCase())[0];

    this.setState({
      value: target.value,
      selectedValue: (selectedOption) ? selectedOption.value : '',
    });
  }

  handleClear() {
    this.setState({
      value: '',
      selectedValue: '',
    });
  }

  handleSelect(setValue, getValue, selectedValue) {
    this.setState({
      value: flatten(options).filter(o => o.value === selectedValue)[0].label,
      selectedValue,
    });
  }

  render() {
    const { selectedValue, value } = this.state;

    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <Select
              onChange={ this.handleChange }
              onClear={ value.length ? this.handleClear : undefined }
              onSelect={ this.handleSelect }
              placeholder="Select an item"
              selectedValue={ selectedValue }
              value={ value }>
            { options
                .map((group, index) => (
                  <SelectOptionGroup key={ index }>
                    { group.map(({ label, ...props }) => (
                      <SelectOption key={ props.value } { ...props }>
                        { label }
                      </SelectOption>
                    ))
                    }
                  </SelectOptionGroup>
            ) ) }
          </Select>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Select/Select'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Select/SelectOption'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Select/SelectOptionGroup'),
        ] } />
      </DocumentationContent>
    );
  }
}
