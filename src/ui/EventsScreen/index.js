import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import { useStore } from '../../stores/RootStore';
import Event from './components/Event';

const EventsScreen = () => {
  const { events } = useStore();

  return (
    <ScrollView>
      <View style={styles.list}>
        {events.eventsList.map(event => (
          <Event
            key={event.id}
            id={event.id}
            src={event.src}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 25,
  },
};

export default EventsScreen;
