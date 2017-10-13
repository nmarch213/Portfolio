import React, { Component } from 'react';
import Typist from 'react-typist';

class RestartingTypist extends Component {
  state = { typing: true };

  done = () => {
    this.setState({ typing: false }, () => {
      this.timeouts.push(
        setTimeout(
          () => this.setState({ typing: true }),
          this.props.timeout || 1200
        )
      );
    });
  };
  delayGen(mean, std, { line, lineIdx, charIdx, defDelayGenerator }) {
    if (lineIdx === 0 && charIdx === line.length - 1) {
      return 1250;
    }
    if (lineIdx === 1 && charIdx === line.length - 1) {
      return 1250;
    }
    if (lineIdx === 2 && charIdx === line.length - 1) {
      return 1250;
    }
    if (lineIdx === 3 && charIdx === line.length - 1) {
      return 1250;
    }
    return defDelayGenerator(mean + 25);
  }

  componentWillMount() {
    this.timeouts = [];
  }

  componentWillUnmount() {
    this.timeouts.forEach(window.clearTimeout);
  }

  render() {
    const { children, timeout, ...props } = this.props;
    return this.state.typing ? (
      <Typist
        {...props}
        delayGenerator={this.delayGen}
        cursor={{ hideWhenDone: true }}
        avgTypingSpeed="40"
        onTypingDone={this.done}
      >
        {children}
      </Typist>
    ) : (
      ''
    );
  }
}

export default RestartingTypist;
