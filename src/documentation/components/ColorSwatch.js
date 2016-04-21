import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { colorAccentBaseVariation, colorBaseVariation } from 'sass-vars';
import { Grid, GridCell } from 'axiom/react';
import { Strong } from 'axiom/react';

export default class ColorSwatch extends Component {
  render() {
    const {name, color} = this.props;
    const nonAccents = Object.keys(color).filter((key) => /^\d/.test(key));
    const accents = Object.keys(color).filter((key) => /^A/.test(key));

    return (
      <div className="dm-color-box__container">
        <div className={`dm-color-box dm-color-box--base dm-color--${name}--${colorBaseVariation}`}>
          <Strong textEllipsis={true}>$color-{name}</Strong>
          <div className="dm-color-box--base__stats">
            <Grid>
              <GridCell>
                {colorBaseVariation}
              </GridCell>

              <GridCell shrink={true}>
                {color[colorBaseVariation]}
              </GridCell>
            </Grid>
          </div>
        </div>

        {nonAccents.map((variation) =>
          <div className={`dm-color-box dm-color--${name}--${variation}`} key={variation}>
            <Grid>
              <GridCell>
                {variation}
              </GridCell>

              <GridCell shrink={true}>
                {color[variation]}
              </GridCell>
            </Grid>
          </div>
        )}

        {do {
          if (color.hasOwnProperty(colorAccentBaseVariation)) {
            accents.map((variation, vIndex) => {
              const classes = classNames(
                'dm-color-box',
                `dm-color--${name}--${variation}`, {
                  'dm-color-box--accent': vIndex === 0
                },
              );

              return (
                <div className={classes} key={variation}>
                  <Grid>
                    <GridCell>
                      {variation}
                    </GridCell>

                    <GridCell shrink={true}>
                      {color[variation]}
                    </GridCell>
                  </Grid>
                </div>
              );
            });
          }
        }}
      </div>
    );
  }
}
