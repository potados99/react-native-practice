import {makeAutoObservable, observable} from 'mobx';

export default class CounterStore {
  public counterValue = observable.box(0);

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.counterValue.set(this.counterValue.get() + 1);
  }

  decrease() {
    this.counterValue.set(this.counterValue.get() - 1);
  }

  set(amount: number) {
    this.counterValue.set(amount);
  }
}
