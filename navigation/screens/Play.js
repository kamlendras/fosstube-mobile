// import * as React from 'react';
// import { View, Text } from 'react-native';

// export default function Play({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text
//                 onPress={() => navigation.navigate('Home')}
//                 style={{ fontSize: 26, fontWeight: 'bold' }}>Play</Text>
//         </View>
//     );
// }
import React from "react";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = ({ navigation }) => (
  <Stack fill  spacing={4}>
    <IconButton icon={props => <Icon name="wifi" {...props} />} />
    <IconButton
      icon={props => <Icon name="account" {...props} />}
      color="primary"
    />
    <IconButton
      icon={props => <Icon name="magnify" {...props} />}
      color="red"
    />
  </Stack>
);

export default App;