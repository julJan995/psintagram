import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

//interfaces
export interface ImageResponse {
  message: string;
  status: string;
}

export interface ApiResponse {
  message: {
    [breed: string]: string[];
  };
  status: string;
}


@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogsUrl = 'https://dog.ceo/api/breeds/list/all';

  constructor(private httpClient: HttpClient) { }

  getBreeds(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.dogsUrl).pipe(
      tap(data => console.log("All", JSON.stringify(data)))
    )
  }
  getImage(breed: string): Observable<ImageResponse[]> {
    return this.httpClient.get<ImageResponse[]>(`https://dog.ceo/api/breed/${breed}/images`)
  }
}



