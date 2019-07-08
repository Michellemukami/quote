import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 
    quotes = [
     new Quote(1," When you're a girl, you have to be everything, You have to be dope at what you do, but you have to be super sweet, and you have to be sexy, and you have to be this and you have to be that and you have to be nice, and you have to - it's like, I can't be all of those things at once. I'm a human being","Nicky Minaj","kami",1000,100,new Date(2019,0,22)), 
    new Quote(2,"Future's not everybody. The people who are taking my style are like my babies. I've got a tribe of kids that want to be like me... But I understand why people want to imitate the things I do. They're dope. It comes naturally to me. My fans can expect greatness. If I wasn't me, I would want to be me","Future","Mukami",10000,100,new Date(2019,1,22)),

    ]
  

  quoteSubmission(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.actualDate = new Date(quote.actualDate);
    this.quotes.push(quote);
  }

  toogleDetails(index){
    this.quotes[index].showDesc = !this.quotes[index].showDesc;
  }

  deleteQuote(quoteDelete,index){
    if(quoteDelete){
      let deletion = confirm(`Are you sure you want to delete this Quote?`)
      if(deletion){
        this.quotes.splice(index,1);
      }
      
    }
  }
  upVote(upVoting,index){
    if(upVoting){
      this.quotes[index].upvotes +=1;
    }
  }
  downVote(downVoting,index){
    if(downVoting){
      this.quotes[index].downVote +=1;
    }
  }
  constructor() {
  }

  ngOnInit() {
  }

}
