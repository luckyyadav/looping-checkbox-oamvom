import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  checked=[];
  options = [
    {name:'OptionA', value:'1'},
    {name:'OptionB', value:'2'},
    {name:'OptionC', value:'3'}
  ]

  ngOnInit(){
    this.checked[0] = true;
  }
  
 updateCheckedOptions(option, event,i){
   console.log('option', option,i );
   console.log(this.checked[i])

 }

}
