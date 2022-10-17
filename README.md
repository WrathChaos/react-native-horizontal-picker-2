<img alt="React Native Horizontal Picker 2" src="assets/logo.png" width="1050"/>

[![React Native Horizontal Picker 2](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-horizontal-picker-2)

[![npm version](https://img.shields.io/npm/v/react-native-horizontal-picker-2.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-horizontal-picker-2)
[![npm](https://img.shields.io/npm/dt/react-native-horizontal-picker-2.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-horizontal-picker-2)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Horizontal Picker 2"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-horizontal-picker-2
```

## Peer Dependencies

```Zero Dependency`

# Usage

## Import

```jsx
import HorizontalPicker from "react-native-horizontal-picker-2";
```

## Fundamental Usage

```jsx
<HorizontalPicker
  style={{ flex: 0, height: 75 }}
  data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
  onChange={(val, index) => {
    console.log({ val, index });
    setValueSelection(val);
  }}
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property |   Type   |  Default  | Description                                          |
| -------- | :------: | :-------: | ---------------------------------------------------- |
| data     |  any[]   | undefined | set the data                                         |
| onChange | function | undefined | set your own logic when the selected data is changed |

## Customization (Optionals)

| Property |   Type    | Default | Description                                             |
| -------- | :-------: | :-----: | ------------------------------------------------------- |
| style    | ViewStyle | default | set or override the style object for the main container |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Full Code Refactor
- [ ] Better example
- [ ] Cooler GIF
- [ ] Write an article about the lib on Medium

## Credits

This is a new fork from [React Native Picker Horizontal](https://github.com/andrey-sh/react-native-picker-horizontal)
Since this is no updated more than 2 years, I will maintain this one :)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Horizontal Picker 2 is available under the MIT license. See the LICENSE file for more info.
