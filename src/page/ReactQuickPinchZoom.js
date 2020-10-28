import React, { useCallback, useRef } from 'react';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';

const ReactQuickPinchZoom = () => {
  const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });
      img.style.setProperty('transform', value);
    }
  }, []);

  return (
    <QuickPinchZoom onUpdate={onUpdate}>
      <img ref={imgRef} src="malangcow.png" alt="test" width="100%" />
    </QuickPinchZoom>
  );
};

export default ReactQuickPinchZoom;
