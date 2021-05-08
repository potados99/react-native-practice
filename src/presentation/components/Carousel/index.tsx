import React from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
  Platform,
  ScrollView,
  VirtualizedListProps,
} from 'react-native';

export default class Carousel<ItemT = any> extends React.Component<
  VirtualizedListProps<ItemT> & {
    data: ReadonlyArray<ItemT>;
    itemWidth: number;
    gap: number;
  }
> {
  render() {
    const {data, renderItem, style, itemWidth, gap} = this.props;

    const screenWidth = Dimensions.get('window').width;
    const numberOfItems = data.length;

    const sideSpaces = screenWidth - itemWidth;
    const itemSpaces = itemWidth * numberOfItems;
    const gapSpaces = gap * (numberOfItems - 1);

    const width = sideSpaces + itemSpaces + gapSpaces;

    return (
      <ScrollView
        style={style}
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: sideSpaces / 2 - gap / 2, // 허허 안드로이드에서만 되네 허허...
          overflow: 'visible',
          width: width,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={100}
        pagingEnabled={true}
        snapToInterval={itemWidth + gap + (Platform.OS === 'ios' ? 0 : 0)}
        snapToAlignment={'center'}
        decelerationRate="fast">
        {data.map((item: ItemT, index: number) => {
          const itemInfo: ListRenderItemInfo<ItemT> = {
            index: index,
            item: item,
            separators: {
              highlight: () => {},
              unhighlight: () => {},
              updateProps: () => {},
            },
          };

          return renderItem?.call(undefined, itemInfo);
        })}
      </ScrollView>
    );
  }
}
