import { Injectable } from '@angular/core';
import {
  interval,
  Observable,
  merge,
  zip
} from 'rxjs';
import { take, mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestClownService {

  constructor() {
  }

  public turnOn(text: string): Observable<any> {
    const splitedText = text.split('');

    const stream = interval(500).pipe(
      take(splitedText.length),
      map((val: number) => splitedText[val])

  );
    return stream;
  }

}
