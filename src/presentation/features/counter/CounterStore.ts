import {action, observable, runInAction} from 'mobx';

export default class CounterStore {
  @observable
  public counterValue = observable.box(0);

  @action
  increase() {
    runInAction(() => {
      this.counterValue.set(this.counterValue.get() + 1);
    });
  }

  @action
  decrease() {
    runInAction(() => {
      this.counterValue.set(this.counterValue.get() - 1);
    });
  }

  @action
  set(amount: number) {
    runInAction(() => {
      this.counterValue.set(amount);
    });
  }
}
