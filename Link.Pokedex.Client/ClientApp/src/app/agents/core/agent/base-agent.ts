import { Path } from './path';
import { Observable } from 'rxjs';
import { NetworkManager } from '../../networkmanager/network-manager';

export class BaseAgent {
  private paths: Array<Path> = new Array<Path>();
  constructor(private OperationsPaths: any, private url: string, public networkManager: NetworkManager) {
    this.extractPaths();
  }
  private extractPaths() {
    for (let element in this.OperationsPaths) {
      let data: any = this.OperationsPaths[element].split('/');
      this.paths.push({
        controllerName: data[0],
        actionName: data[1],
        url: this.url + element,
        urlBase: this.url
      });
    }
  }
  public getPath(actionName: string): Path {
    return this.paths.find(x => x.actionName === actionName);
  }
}
