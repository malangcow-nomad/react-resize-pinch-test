import React from 'react';
import { Route, Link } from 'react-router-dom';
import ReactMapInteraction from './page/ReactMapInteraction';
import ReactQuickPinchZoom from './page/ReactQuickPinchZoom';
import ReactZoomPanPinch from './page/ReactZoomPanPinch';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/react-quick-pinch-zoom">react-quick-pinch-zoom</Link>
        </li>
        <li>
          <Link to="/react-zoom-pan-pinch">react-zoom-pan-pinch</Link>
        </li>
        <li>
          <Link to="/react-map-interaction">react-map-interaction</Link>
        </li>
      </ul>
      <hr />
      <Route
        path="/react-quick-pinch-zoom"
        component={ReactQuickPinchZoom}
        exact={true}
      />
      <Route
        path="/react-zoom-pan-pinch"
        component={ReactZoomPanPinch}
        exact={true}
      />
      <Route
        path="/react-map-interaction"
        component={ReactMapInteraction}
        exact={true}
      />
    </div>
  );
};

export default App;
