declare module 'react-native-animated-loader' {
  import { Component } from 'react';
  import { ViewStyle } from 'react-native';

  interface LoaderProps {
    visible: boolean;
    source: string;
    animationStyle?: ViewStyle;
    overlayColor?: string;
    speed: number;
  }

  export default class Loader extends Component<LoaderProps> {}
}
