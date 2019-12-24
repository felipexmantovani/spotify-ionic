import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  public setKey(key: string, value: string): void {
    this.storage.set(key, value);
  }

  public getKey(key: string): Promise<string> {
    return this.storage.get(key);
  }

  public removeKey(key: string): void {
    this.storage.remove(key);
  }

  public clearKeys(): void {
    this.storage.clear();
  }

  public allKeys(): Promise<Array<string>> {
    return this.storage.keys();
  }
}
