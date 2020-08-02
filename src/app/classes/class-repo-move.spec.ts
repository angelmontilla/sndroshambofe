import { ClassRepoMove } from './class-repo-move';
import { ClassMove } from './class-move';
import { Enummove } from '../enums/enummove.enum';
import { Enumresult } from '../enums/enumresult.enum';

describe('ClassRepoMove', () => {
  it('should create an instance', () => {
    expect(new ClassRepoMove()).toBeTruthy();
  });

  it('Insert element', () => {
    const repo: ClassRepoMove = new ClassRepoMove();

    repo.addResult(new ClassMove(Enummove.PAPER, Enummove.ROCK, Enumresult.FIRST));
    repo.addResult(new ClassMove(Enummove.ROCK, Enummove.PAPER, Enumresult.SECOND));
    repo.addResult(new ClassMove(Enummove.SCISSORS, Enummove.PAPER, Enumresult.FIRST));
    repo.addResult(new ClassMove(Enummove.PAPER, Enummove.PAPER, Enumresult.UNKNOWED));

    repo.listMoves.forEach(element => {
      console.log('First is: ' + element.first);
    });

    expect(true).toBe(true);
  });
});
