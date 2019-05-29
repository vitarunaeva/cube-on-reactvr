import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  SpotLight,
  Box,
  View
} from 'react-vr';
 import Shape from './components/Shape';

export default class cube_react_vr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('images/background-gradient.jpg')}/>
          <SpotLight intensity={1}
                     style = {
                       {transform: [{translate: [1, 4, 4]}]}
                     } />
          <Shape>
             <Box
               dimWidth={0.7}
               dimDepth={0.7}
               dimHeight={0.7}
               lit={true}
               style={{
                 color: '#FFF300',
                 transform: [{translate: [0, 0, -2]}, {rotateX: 30}, {rotateY: 30}],
               }}
             />
         </Shape>

      </View>
    );
  }
};

AppRegistry.registerComponent('cube_react_vr', () => cube_react_vr);
