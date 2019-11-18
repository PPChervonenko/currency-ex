import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static  setObject(key: string, data: Object) {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (e) {
      throw new Error('Data is not Serializable');
    }
  }

  static getObject(key: string): Object {
    const item = localStorage.getItem(key);
    return  item && JSON.parse(item);
  }
  static setItem(key: string, data: string): string {
    localStorage.setItem(key, data);
    return data;
  }

  static getItem(key: string): string {
    const data = localStorage.getItem(key);
    return data;
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  constructor() {
    if (typeof Storage === 'undefined') {
      throw new Error('Local storage is not supported');
    }
  }
}
