import React from 'react';
import {
  ListRenderItemInfo,
  ScrollView,
  Text,
  View,
  VirtualizedListProps,
} from 'react-native';
import {styles} from './styles';

export const Carousel = <ItemT extends any>(
  props: VirtualizedListProps<ItemT> & {
    data: ReadonlyArray<ItemT>;
    itemsPerInterval: number;
  },
) => {
  const {data, renderItem, style} = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width: number) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = data.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = (offset: number) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }

    return 0;
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1,
        }}>
        &bull;
      </Text>,
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
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
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

export default Carousel;
