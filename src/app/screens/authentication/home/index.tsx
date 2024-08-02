import React, { memo } from 'react';
import { SafeAreaView, Text } from 'react-native';

import isEqual from 'react-fast-compare';

const HomeComponent = () => {
  // render
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export const Home = memo(HomeComponent, isEqual);
