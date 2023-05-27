//import { fromEvent } from 'rxjs';
let firstStream$ =
    rxjs.fromEvent(document.getElementById('first'), 'input')
        .pipe(
            rxjs.map(ev => ev.target.value),
            rxjs.filter(val => val.length > 3) // здесь можно вылидировать
        );

let secondStream$ =
    rxjs.fromEvent(document.getElementById('second'), 'input')
            .pipe(
                rxjs.map(ev => ev.target.value),
                rxjs.filter(val => val.length > 3) // здесь можно вылидировать
            );

rxjs.combineLatest(firstStream$, secondStream$)
    .pipe(
        rxjs.map(([first, second]) => {
            return {
                first: first,
                second: second
            };
        })
    )
    .subscribe((ev) => {
        console.log(ev);
    });