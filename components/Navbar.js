import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.leftSection}>
          <Icon
            name="qrcode-scan"
            type="material-community"
            color="gray"
            onPress={() => console.log('hello')}
          />
        </View>
        <View style={styles.rightSection}>
          <Icon
            name="search"
            type="ionicon"
            color="#999"
            size={16}
            style={styles.iconSearch}
          />
          <TextInput
            style={styles.search}
            placeholder="Cari di aplikasi Grab"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ed573',
    padding: 16,
    paddingTop: 28,
  },
  container2: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    padding: 8,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    backgroundColor: '#F5F5F5',
    width: '12%',
  },
  rightSection: {
    width: '88%',
    flex: 1,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  search: {
    fontSize: 16,
    textAlign: 'center',
    color: '#57606f',
    paddingLeft: 5,
  },
  iconSearch: {},
});

export default Navbar;
