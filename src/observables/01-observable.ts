import { Observable, observable, Observer } from 'rxjs';

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
  subs.next('Prueba')
});

const observer: Observer<any> = {
  next: value => console.log(value),
  error: error => console.log('error'),
  complete: () => console.log('complete')
};

obs$.subscribe(observer);