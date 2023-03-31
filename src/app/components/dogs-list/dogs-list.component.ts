import { Component, OnInit } from '@angular/core';
import { DogsService, ApiResponse } from '../../service/dogs.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})

export class DogsListComponent implements OnInit {
  dogsList: string[] = [];
  selectedDog!: string;
  imageLinks: string[] = [];
  imageLink!: string;

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.loadBreeds();
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private loadBreeds() {
    this.dogsService.getBreeds().subscribe((data: ApiResponse) => {
      for (const [breed, subBreeds] of Object.entries(data.message)) {
        if (!subBreeds.length) {
          this.dogsList.push(breed);
        } else {
          subBreeds.forEach((subBreed) => {
            this.dogsList.push(`${breed} ${subBreed}`)
          })
        }
      }
      return this.dogsList;
    })
  }

  loadImage() {
    this.dogsService.getImage(this.selectedDog
        .replace(/\s+/g, '/')
        .toLowerCase())
        .subscribe((data: any) => {
      this.imageLinks = [];
      this.imageLinks.push(data.message)
      this.imageLink = '';
      this.imageLink = this.imageLinks[0][(this.getRandomInt(this.imageLinks[0].length))]
    })
  }
}
