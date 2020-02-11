import { Observer, Observable } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log(value),
  error: error => console.log('error'),
  complete: () => console.log('complete')
};

const interval$ = new Observable<number>(subs => {
  let cont = 0;
  const inter = setInterval(() => {
    subs.next(cont);
    cont = cont >= 10 ? 0 : cont + 1;
  }, 1000);

  return () => {
    clearInterval(inter)
  }
});

const subs = interval$.subscribe( observer );
const subs2 = interval$.subscribe( observer );

setTimeout(() => {
  subs.unsubscribe();
  subs2.unsubscribe();
}, 3000);