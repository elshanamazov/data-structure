export class HashTable {
  private dataMap: Array<any>;

  constructor(size: number = 7) {
    this.dataMap = new Array(size);
  }

  // eslint-disable-next-line no-underscore-dangle
  private _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash += hash + ((key.charCodeAt(i) * 23) % this.dataMap.length);
    }
    return hash;
  }
}
