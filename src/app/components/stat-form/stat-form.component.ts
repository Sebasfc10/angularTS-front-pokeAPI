import { Component, OnInit } from '@angular/core';
import { Stat } from '../../interfaces/stat';
import { StatService } from '../../services/stat.service';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-stat-form',
  templateUrl: './stat-form.component.html',
  styleUrls: ['./stat-form.component.css']
})
export class StatFormComponent implements OnInit {

  stat: Stat = {
    hp: 0,
    atk: 0,
    def: 0,
    atks: 0,
    defs: 0,
    vel: 0,
    pre: 0,
    eva: 0
  };

  edit: boolean = false

  constructor(
    private statService: StatService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.statService.getStat(params.id)
      .subscribe(
        res =>{
          console.log(res);
          this.stat  = res;
          this.edit = true;
        }
      )
    }
  }

  submitStat(){
    this.statService.createStat(this.stat)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

  updateStat() {
    delete this.stat.createdAt;
    this.statService.updateStat(this.stat._id, this.stat)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/stat'])
      },
      err => console.log(err)
    )
  }
}
