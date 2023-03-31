import { Component, Input, OnInit } from '@angular/core';
import { DogsService } from '../../service/dogs.service';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.css']
})

export class DogInfoComponent implements OnInit {
  @Input() breed!: string;
  @Input() image!: string;

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
  }
}

