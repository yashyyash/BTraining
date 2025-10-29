import { loadRemoteModule } from '@angular-architects/native-federation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostLoaderApi {
  async loadRemoteComponent(port:number,remoteName:string){
    try {
      return await loadRemoteModule({
        exposedModule:'./Component',
        remoteName:remoteName,
        remoteEntry:`http://localhost:${port}/remoteEntry.json`,
        fallback:'unauthorized'
      })
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
