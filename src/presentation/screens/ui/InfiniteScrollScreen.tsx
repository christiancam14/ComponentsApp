import {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    // TODO: Añadir número a nuestro registro
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <Title text="Infinite Scroll" />
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={50} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/200/300`}
      style={{
        height: 400,
        width: '100%',
      }}
    />
    // <Image
    //   source={{uri: `https://picsum.photos/id/${number}/200/300`}}
    //   style={{
    //     height: 400,
    //     width: '100%',
    //   }}
    // />
  );
};
