import { Component, OnInit } from '@angular/core';
import { StatService } from '../../services/stat.service';
import { Stat } from '../../interfaces/stat';
@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.css']
})
export class StatListComponent implements OnInit {

  stats: Stat[] = []


  constructor(private statService: StatService) { }

  ngOnInit(){
    this.getStats();
  }

  getStats(){
    this.statService.getStats()
    .subscribe(
      res => {
        this.stats = res,
        console.log(res);
      },
      err => console.log(err),
    )
  }


  deleteStats(id: any){
    this.statService.deleteStat(id)
    .subscribe(
      res => {
        this.getStats();
      },
      err => console.log(err)
    )
  }

}
