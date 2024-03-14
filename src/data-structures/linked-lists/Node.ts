export class Node<T> {
  data: any;

  next: T | null = null;

  constructor(data: any) {
    this.data = data;
  }
}
