export class HashTable {
  private dataMap: Array<any>;

  constructor(size: number = 7) {
    this.dataMap = new Array(size);
  }

  // eslint-disable-next-line no-underscore-dangle
  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key: string, value: number) {
    const index = this.hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key: string) {
    const index = this.hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i += 1) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }

    return undefined;
  }
}
