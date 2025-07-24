// Natwynie kod w JS / TS

const button = document.querySelector('button');
button?.className = 'btn btn-danger'
button?.addEventListener('click', ($event: MouseEvent) => {
  $event.stopPropagation();
});


// w template Angular:

/*
<button
    class="btn btn-danger"
    (click)="logOut.emit(); $event.stopPropagation()"
>
    Log out
</button>
*/
