import { Injectable } from '@nestjs/common';
import { Chore } from '@demo/models';

@Injectable()
export class AppService {
  private chores = [
    {
      id: 1,
      title: 'Mop',
      cleaningStyle: 'task',
      content: 'Use steam mop to mop all floors after vacuum task.',
      imgUrl:
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/517q33tDqTL.jpg',
      altText: 'Photo of Shark steam mop',
    },
    {
      id: 2,
      title: 'Living Room',
      cleaningStyle: 'zone',
      content: 'Clean living room top to bottom.',
      imgUrl:
        'https://www.mydomaine.com/thmb/I-G241XIStQv30POSZ7iBe9Sc1o=/700x0/filters:no_upscale():strip_icc()/cdn.cliqueinc.com__cache__posts__212361__-2030968-1483470364.700x0c-8571e60cad7b42a981ab29ae10b5c153-497b002f87af4747b2ab38b560e7c0fd.jpg',
      altText: 'Photo of living room',
    },
    {
      id: 3,
      title: 'Surfaces and Floors',
      cleaningStyle: 'weekend warrior',
      content: 'Wipe down all surfaces and vacuum + mop all floors.',
      imgUrl:
        'https://img.freepik.com/premium-photo/man-with-washcloth-cleaning-floor-apartment_85574-1160.jpg',
      altText: 'Photo of someone cleaning',
    },
    {
      id: 4,
      title: 'Sinks',
      cleaningStyle: 'task',
      content: 'Wipe out all sinks.',
      imgUrl:
        'https://www.clorox.com/wp-content/uploads/2021/10/how-to-clean-sink-with-bleach.jpg?width=1040&height=585&fit=crop',
      altText: 'Photo wiping a sink',
    },
  ];

  private nextId = Math.max(...this.chores.map((chore) => chore.id));

  getChores() {
    return { chores: this.chores };
  }

  deleteChore(choreId: number) {
    this.chores = this.chores.filter((chore) => chore.id !== choreId);
  }

  updateChore(choreId: number, putChore: Chore) {
    const foundChoreIndex = this.chores.findIndex(
      (chore) => chore.id === choreId
    );

    if (foundChoreIndex === -1) {
      throw new Error(`Could not find a chore with id ${choreId}.`);
    }

    this.chores[foundChoreIndex] = putChore;
  }

  addChore(postChore: Chore) {
    postChore.id = ++this.nextId;
    this.chores.push(postChore);
  }
}
