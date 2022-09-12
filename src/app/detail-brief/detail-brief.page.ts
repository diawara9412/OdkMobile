import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail-brief',
  templateUrl: './detail-brief.page.html',
  styleUrls: ['./detail-brief.page.scss'],
})
export class DetailBriefPage implements OnInit {
  id : any;
  dataBrief : any;
   constructor(private service : ServiceService,private router:Router,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.BriefById(this.id).subscribe((data)=>{
      console.log(data);
     this.dataBrief =data;
    })
  

}

}
