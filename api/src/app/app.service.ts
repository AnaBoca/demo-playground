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
  ];

  getChores() {
    return { chores: this.chores };
  }

  deleteChore(choreId: number) {
    this.chores = this.chores.filter((chore) => chore.id !== choreId);
  }

  updateChore(choreId: number, postChore: Chore) {
    const foundChoreIndex = this.chores.findIndex(
      (chore) => chore.id === choreId
    );

    if (foundChoreIndex === -1) {
      throw new Error(`Could not find a chore with id ${choreId}.`);
    }

    this.chores[foundChoreIndex] = postChore;
  }
}
