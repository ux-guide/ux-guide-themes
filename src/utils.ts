import { BehaviorSubject } from "rxjs";

export class Writable<T> {
  private subject: BehaviorSubject<T>;

  constructor(initialValue: T) {
    this.subject = new BehaviorSubject(initialValue);
  }

  subscribe(callback: (value: T) => void) {
    return this.subject.subscribe(callback);
  }

  set(value: T) {
    this.subject.next(value);
  }

  update(updater: (value: T) => T) {
    this.subject.next(updater(this.subject.value));
  }

  get value() {
    return this.subject.value;
  }
}
