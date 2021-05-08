import React from 'react';
import {
  Animated,
  Dimensions,
  FlatListProps,
  ListRenderItemInfo,
  Platform,
  ScrollView,
  View,
  VirtualizedListProps,
} from 'react-native';

/**
 * A simple carousel implementation.
 * It calculates a size of sneak by width of item and a gap between items.
 */
export default class Carousel<ItemT = any> extends React.Component<
  FlatListProps<ItemT> & {gap: number; itemWidth: number}
> {
  private IS_ANDROID = Platform.OS === 'android';

  private getDimensions() {
    const {itemWidth, gap} = this.props;

    const screenWidth = Dimensions.get('window').width;
    const sideSpaces = screenWidth - itemWidth;

    return {
      gap,
      itemWidth,
      screenWidth,
      onePageInterval: itemWidth + gap,
      itemEdgeToScreenEdge: sideSpaces / 2,
      horizontalPaddingAmongList: sideSpaces / 2 - gap / 2,
      horizontalMarginBetweenItems: gap / 2,
    };
  }

  private renderItems(items: ReadonlyArray<ItemT> | null | undefined) {
    const {renderItem} = this.props;
    const {itemWidth, horizontalMarginBetweenItems} = this.getDimensions();

    return items?.map((item, index) => {
      const itemInfo: ListRenderItemInfo<ItemT> = {
        index: index,
        item: item,
        separators: {
          highlight: () => {},
          unhighlight: () => {},
          updateProps: () => {},
        },
      };

      return (
        <View
          key={index}
          style={{
            width: itemWidth,
            marginHorizontal: horizontalMarginBetweenItems,
          }}>
          {renderItem?.call(undefined, itemInfo)}
        </View>
      );
    });
  }

  private getPlatformSpecificPropsForScrollView() {
    const {horizontalPaddingAmongList} = this.getDimensions();

    /**
     * For padding on first and last item,
     * we use paddingHorizontal for android,
     * and contentInset/contentOffset for ios.
     *
     * More details: https://medium.com/nerd-for-tech/react-native-create-a-horizontal-snap-scrollview-e1d01ac3ba09
     */

    return {
      contentContainerStyle: {
        paddingHorizontal: this.IS_ANDROID ? horizontalPaddingAmongList : 0,
      },

      // iOS only.
      contentOffset: {
        x: -horizontalPaddingAmongList,
        y: 0,
      },

      // iOS only.
      contentInset: {
        top: 0,
        left: horizontalPaddingAmongList,
        right: horizontalPaddingAmongList,
        bottom: 0,
      },
    };
  }

  render() {
    const {data, style} = this.props;
    const {onePageInterval} = this.getDimensions();
    const platformSpecificProps = this.getPlatformSpecificPropsForScrollView();

    return (
      <ScrollView
        style={style}
        horizontal={true}
        decelerationRate="fast"
        scrollEventThrottle={100}
        snapToAlignment={'center'}
        disableIntervalMomentum={true}
        snapToInterval={onePageInterval}
        showsHorizontalScrollIndicator={false}
        {...platformSpecificProps}>
        {this.renderItems(data)}
      </ScrollView>
    );
  }
}
