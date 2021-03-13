import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {dataNews} from './datadummy/data';

const ListData = ({items}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.containerimg}>
      <Image
        style={styles.imgContent}
        source={{
          uri: item.url,
        }}
      />
      <Text style={styles.titleNews}>{item.title}</Text>
      <View style={styles.containersubtitle}>
        <Icon
          style={styles.iconsubtitle}
          name="book"
          type="ionicon"
          color="gray"
          size={12}
        />
        <Text style={styles.subtitle}>Bacaan 1 mnt</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerlist}>
      <FlatList
        data={items}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const ListNews = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terus Menjelajah</Text>
      <ListData items={dataNews} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
  },
  containerlist: {
    padding: 10,
  },
  imgContent: {
    width: '100%',
    height: 180,
    borderRadius: 4,
  },
  containerimg: {
    width: 180,
    padding: 4,
  },
  titleNews: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
  containersubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsubtitle: {
    marginRight: 4,
  },
});

export default ListNews;
