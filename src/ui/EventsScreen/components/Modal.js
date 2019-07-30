import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { sha256 } from 'hash.js';

const ScreenHeight = Dimensions.get("window").height;

const EventModal = ({ modalIsOpen, setModalState, id }) => {
  const infoToHash = `${Math.random() * 1000000}${id}${true}`;
  const qrCodeValue = sha256().update(infoToHash).digest('hex');
  const handleModalCloseClick = () => {
    setModalState(false);
  };

  return (
    <View style={styles.modal}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalIsOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <TouchableHighlight onPress={handleModalCloseClick}>
          <Image
            resizeMode='cover'
            style={styles.image}
            source={{ uri: 'https://picsum.photos/400/800' }}
          />
        </TouchableHighlight>
        <View style={styles.info}>
          <QRCode
            value={qrCodeValue}
          />
          <View>
            <Text>{id}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: ScreenHeight,
  },
  info: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
    padding: 25,
  }
});

export default EventModal;
