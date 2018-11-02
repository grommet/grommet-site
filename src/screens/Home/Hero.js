import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { Ad } from 'grommet-icons';

const interval = 300;
const animationDuration = interval * 0.75;

const Context = createContext();

const BuildBox = ({ phase: boxPhase, inProps, outProps, ...rest }) => (
  <Context.Consumer>
    {({ build, phase }) => {
      let buildStartPhase;
      let buildEndPhase;
      if (Array.isArray(boxPhase)) {
        [buildStartPhase, buildEndPhase] = boxPhase;
      } else {
        buildStartPhase = boxPhase;
        buildEndPhase = boxPhase;
      }
      let buildProps = {};
      if (
        (build && phase >= buildStartPhase && phase <= buildEndPhase) ||
        (!build && phase === buildStartPhase)
      ) {
        buildProps = build ? inProps : outProps;
        if (buildProps.animation) {
          if (Array.isArray(buildProps.animation)) {
            buildProps.animation = buildProps.animation.map(a => ({
              ...a,
              duration: animationDuration,
            }));
          } else if (typeof buildProps.animation === 'object') {
            buildProps.animation.duration = interval * 0.75;
          }
        }
      }
      return phase >= buildStartPhase && <Box {...rest} {...buildProps} />;
    }}
  </Context.Consumer>
);

BuildBox.propTypes = {
  phase: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]).isRequired,
  inProps: PropTypes.shape({}),
  outProps: PropTypes.shape({}),
};

BuildBox.defaultProps = {
  inProps: { animation: { type: 'fadeIn', duration: animationDuration } },
  outProps: { animation: { type: 'fadeOut', duration: animationDuration } },
};

export default class Hero extends Component {
  state = { build: true, phase: 1 };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { build, phase } = this.state;
      const nextBuild = (build && phase < 10) || (!build && phase === 1);
      const nextPhase = nextBuild ? phase + 1 : phase - 1;
      this.setState({ build: nextBuild, phase: nextPhase });
    }, interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Box
          alignSelf="center"
          direction="row"
          width="medium"
          height="medium"
          pad="medium"
          elevation="large"
          round="medium"
          margin="xlarge"
        >
          <BuildBox
            basis="1/3"
            background="brand"
            pad="medium"
            gap="medium"
            phase={[2, 5]}
            inProps={{
              animation: [
                { type: 'fadeIn' },
                { type: 'slideLeft', size: 'large' },
              ],
              background: 'light-5',
            }}
          >
            <BuildBox
              background="accent-1"
              pad={{ vertical: 'small' }}
              round
              phase={[3, 5]}
              inProps={{
                animation: [
                  { type: 'fadeIn' },
                  { type: 'slideDown', size: 'large' },
                ],
                background: 'light-2',
                round: undefined,
              }}
            />
            <BuildBox
              background="accent-2"
              pad={{ vertical: 'small' }}
              round
              phase={[4, 5]}
              inProps={{
                animation: [
                  { type: 'fadeIn' },
                  { type: 'slideDown', size: 'large' },
                ],
                background: 'light-2',
                round: undefined,
              }}
            />
            <BuildBox
              background="accent-3"
              pad={{ vertical: 'small' }}
              round
              phase={5}
              inProps={{
                animation: [
                  { type: 'fadeIn' },
                  { type: 'slideDown', size: 'large' },
                ],
                background: 'light-2',
                round: undefined,
              }}
            />
          </BuildBox>
          <BuildBox
            basis="2/3"
            background="light-2"
            border={{ side: 'top', size: 'large', color: 'brand' }}
            pad="medium"
            gap="medium"
            phase={[3, 8]}
            inProps={{
              animation: [
                { type: 'fadeIn' },
                { type: 'slideRight', size: 'large' },
              ],
              background: 'light-4',
              border: { side: 'top', size: 'large', color: 'light-4' },
            }}
          >
            <BuildBox
              basis="xxsmall"
              direction="row"
              justify="between"
              gap="medium"
              phase={[6, 9]}
              inProps={{
                animation: [
                  { type: 'fadeIn' },
                  { type: 'slideDown', size: 'large' },
                ],
              }}
            >
              <BuildBox
                basis="xxsmall"
                round="full"
                background="accent-1"
                align="center"
                justify="center"
                phase={[7, 9]}
                inProps={{
                  animation: [
                    { type: 'fadeIn' },
                    { type: 'slideDown', size: 'large' },
                  ],
                  background: 'light-3',
                  round: undefined,
                }}
              >
                <Ad />
              </BuildBox>
              <BuildBox
                flex
                background="accent-1"
                round
                phase={[7, 9]}
                inProps={{
                  animation: [
                    { type: 'fadeIn' },
                    { type: 'slideDown', size: 'large' },
                  ],
                  background: 'light-3',
                  round: undefined,
                }}
              />
            </BuildBox>
            <BuildBox
              flex
              background="accent-1"
              pad="medium"
              round
              phase={[8, 9]}
              inProps={{
                animation: [
                  { type: 'fadeIn' },
                  { type: 'slideDown', size: 'large' },
                ],
                background: 'light-5',
                round: undefined,
              }}
            />
          </BuildBox>
        </Box>
      </Context.Provider>
    );
  }
}
