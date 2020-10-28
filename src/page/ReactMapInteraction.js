import React, { Component } from 'react';
import { MapInteractionCSS } from 'react-map-interaction';

// If you want to have control over the scale and translation,
// then use the `scale`, `translation`, and `onChange` props.
class ReactMapInteraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        scale: 1,
        translation: { x: 0, y: 0 },
      },
    };
  }

  render() {
    const { scale, translation } = this.state;
    return (
      <MapInteractionCSS
        value={this.state.value}
        onChange={(value) => this.setState({ value })}
        showControls={true}
      >
        <img src="malangcow.png" alt="test" width="100%" />
      </MapInteractionCSS>
    );
  }
}

export default ReactMapInteraction;
