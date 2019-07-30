import { observable, action, computed } from 'mobx';

class ImageStore {
  @observable eventsAmount = 0;

  @computed get eventsList() {
    const events = [];

    for (i = 0; i < this.eventsAmount; i++) {
      events.push({
        id: 120 + i,
        src: 'https://picsum.photos/500/400',
      });
    }

    return events;
  }

  @action setEvents = (value) => {
    this.eventsAmount = value;
  }
}

export default ImageStore;
