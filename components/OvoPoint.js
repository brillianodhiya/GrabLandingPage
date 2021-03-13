import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Rewards from '../assets/reward.jpg';
import Ovo from '../assets/ovo.jpg';
import {Icon} from 'react-native-elements';

const OvoPoint = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}>
        <View style={styles.iconSection}>
          <Image style={styles.icon} source={Ovo} />
        </View>
        <View style={styles.valueSection}>
          <Text style={styles.Rupiah}>RP</Text>
          <View style={styles.AlignInline}>
            <Text style={styles.containertextsaldo}>8.000.024</Text>
            <Icon
              name="right"
              type="antdesign"
              color="gray"
              size={14}
              containerStyle={styles.ArrowIcon}
              onPress={() => console.warn('clicked')}
            />
          </View>
        </View>
      </View>
      <View style={styles.points}>
        <View style={styles.iconSection}>
          <Image style={styles.icon} source={Rewards} />
        </View>
        <View style={styles.valueSection}>
          <View style={styles.AlignInline}>
            <Text style={styles.containertextsaldo}>100.800 Poin</Text>
            <Icon
              name="right"
              type="antdesign"
              color="gray"
              size={14}
              containerStyle={styles.ArrowIcon}
              onPress={() => console.warn('clicked point')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  saldo: {
    width: '50%',
    flex: 1,
    flexDirection: 'row',
    height: 54,
    marginRight: 1,
    backgroundColor: 'white',
  },
  points: {
    width: '50%',
    flex: 1,
    flexDirection: 'row',
    height: 54,
    marginLeft: 1,
    backgroundColor: 'white',
  },
  iconSection: {
    width: '28%',
    paddingLeft: 16,
    paddingTop: 12,
    textAlign: 'center',
  },
  valueSection: {
    width: '70%',
    paddingLeft: 5,
    paddingTop: 18,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    width: 30,
    height: 30,
  },
  containertextsaldo: {},
  Rupiah: {
    fontSize: 10,
    color: 'gray',
    marginRight: 4,
  },
  ArrowIcon: {
    // marginLeft: 12,
  },
  AlignInline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default OvoPoint;
