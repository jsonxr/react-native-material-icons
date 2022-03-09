import React from 'react';
import { Appearance, ColorValue } from 'react-native';
import { SvgXml, XmlProps } from 'react-native-svg';

export interface MIconProps<T> extends Omit<XmlProps, 'fill' | 'width' | 'height'> {
  color?: ColorValue;
  size?: number;
  variant?: T;
}

export const createSvgIcon = <T extends Record<string, string>>(xml: T) => {
  type V = keyof T;

  return ({ color, fillOpacity = 1.0, size = 24, variant, ...props }: MIconProps<V>) => {
    const defaultIconColor = Appearance.getColorScheme() === 'light' ? '#000000' : '#ffffff';
    const svgXml: string = variant ? xml[variant] : Object.keys(xml)[0];
    return (
      <SvgXml
        {...props}
        fillOpacity={fillOpacity}
        fill={color ?? defaultIconColor}
        width={size}
        height={size}
        xml={svgXml}
      />
    );
  };
};
