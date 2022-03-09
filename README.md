# react-native-material-icons

Google's Material Icons as SVG files. When only using a few icons, much more efficient to use the svg files. react-native-vector-icons did not have the fonts I needed. This also enables me to have a smaller application when I only need a handfull of icons (due to tree shaking).

```javascript
import { Home } from 'react-native-material-icons';

const Example = () => (
  <View style={{ flexDirection: 'row', backgroundColor: 'black' }}>
    <Home variant="default" size={48} color="#ff0000" />
    <Home variant="outlined" size={48} color="#ffff00" />
    <Home variant="round" size={48} color="#00ff00" />
    <Home variant="sharp" size={48} color="#0000ff" />
    <Home variant="twotone" size={48} color="#ff00ff" />
  </View>
);
```

![Example](docs/example1.png)

## Install

`yarn add react-native-material-icons react-native-svg`

## Search Google's [Material Icons](https://fonts.google.com/icons)

Search Google's [Material Icons](https://fonts.google.com/icons) list to see available svg files.

## Components

Names are mapped from google's website. The names map from snake case to PascalCase. Icons that start with a number are prefixed with an `M`.

- `add_chart` becomes `<AddChart />`
- `calendar_month` becomes `<CalendarMonth />`
- `123` becomes `<I123 />`

## Properties

- `color`: light='#000000', dark='#ffffff'

  Color of icon in `#rrggbb` format. The default is based on Appearance.getColorScheme().

- `size`: Default is 24.

  Width and height of icon.

- `variant`: Default = "default"

  are specified as a property instead of a different font.

  - `default` (or filled)
  - `outlined`
  - `rounded`
  - `sharp`
  - `twotone` - Some icons ONLY have this

- `fillOpacity`: Default = 1

  This prop specifies the opacity of the color or the content the current object is filled with.
