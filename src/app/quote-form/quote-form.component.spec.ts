import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
  
  newQuote =new Quote(0,"","","",0,0,new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  quoteSubmission(){
    this.addQuote.emit(this.newQuote);
    this.newQuote=new Quote(0,"","","",0,0,new Date());
  }

  constructor() { }

  ngOnInit() {
  }

}