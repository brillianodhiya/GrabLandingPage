import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TopUp from '../assets/topup.jpg';
import Banner from './Banner';
import {menuDummys} from './datadummy/data';

const ListMenu = ({items}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.subList}
      onPress={() => console.log('Menu Clicked')}>
      <Image style={styles.thumb} source={item.icon} />
      <Text style={{textAlign: 'center'}}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainList}>
      <FlatList
        data={items}
        renderItem={renderItem}
        numColumns={4}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const MenuList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.topUpArea}>
        <View style={styles.iconSection}>
          <Image style={styles.icon} source={TopUp} />
        </View>
        <View style={styles.valueSection}>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Isi Ulang &middot;</Text> Wallet
          </Text>
        </View>
      </TouchableOpacity>
      <ListMenu items={menuDummys} />
      <View style={styles.line}></View>
      <Banner />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topUpArea: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    flexDirection: 'row',
    borderRadius: 5,
    height: 40,
    marginTop: 10,
    marginLeft: 106,
    marginRight: 88,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  iconSection: {
    width: '29%',
    paddingLeft: 10,
    paddingTop: 5,
    textAlign: 'center',
  },

  valueSection: {
    width: '60%',
    paddingLeft: 0,
    paddingTop: 11,
    textAlign: 'center',
  },

  icon: {
    width: 30,
    height: 30,
  },

  mainList: {
    justifyContent: 'center',
    paddingTop: 60,
    paddingRight: 12,
    paddingLeft: 12,
    paddingBottom: 20,
  },
  thumb: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },

  subList: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  line: {
    height: 2,
    backgroundColor: '#EBECF0',
  },
});

export default MenuList;
