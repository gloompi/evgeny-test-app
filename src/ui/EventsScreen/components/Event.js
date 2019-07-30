import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  Share,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Modal from './Modal';

const Event = ({ id, src }) => {
  const [modalIsOpen, setModalState] = useState(false);

  const onShare = async () => {
    try {
      await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleOpenModalClick = () => {
    setModalState(true);
  };

  return (
    <View style={styles.item}>
      <TouchableHighlight
        onPress={handleOpenModalClick}
      >
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{ uri: src }}
        />
      </TouchableHighlight>
      <Text style={styles.idText}>{id}</Text>
      <FontAwesomeIcon
        size={35}
        name='share-alt-square'
        style={styles.shareBtn}
        onPress={onShare}
      />
      <Modal
        id={id}
        modalIsOpen={modalIsOpen}
        setModalState={setModalState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    width: '47%',
    height: 200,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  idText: {
    padding: 5,
    width: '100%',
    textAlign: 'center',
  },
  shareBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#1F3085',
    borderColor: 'transparent',
  },
})

export default Event;
