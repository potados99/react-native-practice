import {action, observable} from 'mobx';

export default class CounterStore {
  @observable
  counterValue = observable.box(0);

  @action
  increase() {
    this.counterValue.set(this.counterValue.get() + 1);
  }

  @action
  decrease() {
    this.counterValue.set(this.counterValue.get() - 1);
  }

  @action
  set(amount: number) {
    this.counterValue.set(amount);
  }
}
