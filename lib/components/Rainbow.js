import React from 'react';
import PropTypes from 'prop-types';

class Rainbow extends React.Component {
  static propTypes = {
    children: PropTypes.func,
    colors: PropTypes.arrayOf(PropTypes.string),
    ordered: PropTypes.bool,
    initial: PropTypes.string
  };

  static defaultProps = {
    initial: '#000000',
    ordered: false
  };

  state = {
    color: this.props.initial,
    index: 0
  };

  componentDidMount() {}

  switchColor = () => {
    if (!this.props.colors) {
      this.setState({
        color:
          '#' +
          Math.random()
            .toString(16)
            .slice(-6)
      });
    } else if (this.props.ordered) {
      let nextIndex = 0;
      if (this.state.index < this.props.colors.length - 1) {
        nextIndex = this.state.index + 1;
      }
      this.setState({
        color: this.props.colors[nextIndex],
        index: nextIndex
      });
    } else {
      let nextIndex = 0;
      while (nextIndex == this.state.index) {
        nextIndex = Math.floor(
          Math.random() * this.props.colors.length - 1 + 1
        );
      }
      this.setState({
        color: this.props.colors[nextIndex],
        index: nextIndex
      });
    }
  };

  render() {
    return this.props.children(this.state.color, this.switchColor);
  }
}

export default Rainbow;
