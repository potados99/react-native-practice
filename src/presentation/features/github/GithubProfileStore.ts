import GithubUser from '../../../data/entities/GithubUser';
import {action, observable, runInAction} from 'mobx';
import githubRepository from '../../../data/repositories/GithubRepository';

export default class GithubProfileStore {
  @observable
  currentUser?: GithubUser = undefined; // Even undefined, it is necessary!

  @action
  fetchUserInfo(userId: string) {
    githubRepository.getUserInfo(userId).then(({data, status}) => {
      runInAction(() => {
        this.currentUser = {
          id: data.login,
          name: data.name,
          bio: data.bio,
        };
      });
    });
  }
}
