import { Component, ComponentRef, inject, OnDestroy, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { HostLoaderApi } from './host-loader-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {

  @ViewChild('firstApp', { read: ViewContainerRef, static: true }) firstContainer!: ViewContainerRef;
  private _firstComponentRef: ComponentRef<any> | null = null;

  @ViewChild('secondApp', { read: ViewContainerRef, static: true }) secondContainer!: ViewContainerRef;
  private _secondComponentRef: ComponentRef<any> | null = null;

  private _hostLoaderApi = inject(HostLoaderApi);

  async ngOnInit() {
    try {
      const firstModule = await this._hostLoaderApi.loadRemoteComponent(4201, 'first-app');
      this.firstContainer.clear();
      this._firstComponentRef = this.firstContainer.createComponent(firstModule.App);
      this._firstComponentRef.changeDetectorRef.detectChanges();
    } catch (error) {
      console.log(error);
    }
    try {
      const secondModule = await this._hostLoaderApi.loadRemoteComponent(4202, 'second-app');
      this.secondContainer.clear();
      this._secondComponentRef = this.secondContainer.createComponent(secondModule.App);
      this._secondComponentRef.changeDetectorRef.detectChanges();
    } catch (error) {
      console.log(error);
    }
  }
  ngOnDestroy(): void {
    if (this._firstComponentRef) {
      this._firstComponentRef.destroy();
    }
    if (this._secondComponentRef) {
      this._secondComponentRef.destroy();
    }
  }
}
