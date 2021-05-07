import GithubUser from '../../../data/entities/GithubUser';
import {action, observable, runInAction} from 'mobx';
import githubRepository from '../../../data/repositories/GithubRepository';

export default class GithubProfileStore {
  @observable
  public currentUser = observable.box(new GithubUser());

  @action
  fetchUserInfo(userId: string) {
    githubRepository.getUserInfo(userId).then(({data, status}) => {
      runInAction(() => {
        this.currentUser.set({
          id: data.login,
          name: data.name,
          bio: data.bio,
        });
      });
    });
  }
}
