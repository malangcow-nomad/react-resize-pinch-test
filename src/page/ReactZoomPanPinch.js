import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ReactZoomPanPinch = () => {
  return (
    <TransformWrapper
      defaultScale={1}
      defaultPositionX={200}
      defaultPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>-</button>
            <button onClick={resetTransform}>x</button>
          </div>
          <TransformComponent>
            <img src="malangcow.png" alt="test" width="100%" />
            <div>Example text</div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};

export default ReactZoomPanPinch;
