import {
  Component,
  OnInit
} from '@angular/core';
import { QuestQuestionsService } from './quest-questions.service';
import {
  mergeMap,
  tap
} from 'rxjs/operators';
import { QuestClownService } from './quest-clown.service';
import { finalize } from 'rxjs/internal/operators';

@Component({
  selector: 'app-quest-shell',
  templateUrl: './quest-shell.component.html',
  styleUrls: ['./quest-shell.component.css']
})
export class QuestShellComponent implements OnInit {
  public activeQuestion: string;
  public letter: string;
  public showFullFraze: boolean = false;

  constructor(private questionService: QuestQuestionsService, private clownService: QuestClownService) {
  }

  public ngOnInit() {
    this.getQuestion();
  }

  public getQuestion() {
    this.questionService.getQuestion().pipe(
      tap((question: any) => this.activeQuestion = question.text),
      mergeMap((question: any) => this.clownService.turnOn(question.text)),
      finalize(() => this.showFullFraze = true)
    )
      .subscribe(resp => this.letter = resp);
  }
}
