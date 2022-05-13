import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/Home";
import { RootStackParamList } from "@/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type IRootStackProps = {};

const RootStack: React.FC<IRootStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export { RootStack };
