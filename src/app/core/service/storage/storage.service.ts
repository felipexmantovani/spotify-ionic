import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  public setValue(key: string, value: string): void {
    this.storage.set(key, value);
  }

  public getValue(key: string): Promise<string> {
    return this.storage.get(key);
  }

  public clear(key: string): void {
    this.storage.remove(key);
  }
}
