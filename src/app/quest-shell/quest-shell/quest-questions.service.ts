import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestQuestionsService {

  constructor() {
  }

  public getQuestion() {
    const questionMock = {id: 1, text: 'What is your name'};
    return of(questionMock);
  }

}
