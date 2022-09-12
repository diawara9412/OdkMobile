import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.page.html',
  styleUrls: ['./brief.page.scss'],
})
export class BriefPage implements OnInit {
  loginData : any;
  list :any;
  img : any;
  img1 : any;
  listBrief :any;
  listRendu : any;
   constructor(private service : ServiceService) { }
 
   ngOnInit(): void {
     this.loginData=JSON.parse(localStorage["isLogin"]);
    
     this.BriefParId();
    //  this.RenduByBrief();
     this.img = this.service.Photo
     this.img1 = this.service.PhotoBrief
   }
  animationInProgress = false;
  features: any[] = [
    {id: 1, name: 'Top Up', src: 'assets/icons/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 2, name: 'Withdraw', src: 'assets/icons/cash-withdrawal.png', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 3, name: 'Send', src: 'assets/icons/send.png', background: 'rgba(255, 196, 9, 0.1)', page: ''},
    {id: 4, name: 'Pay', src: 'assets/icons/debit-card.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  ];
  
  BriefParId(){
    this.service.ApprenantBrief(this.loginData.id).subscribe((data)=>{
      console.log(data);
      this.listBrief =data;
    })
  }

}
