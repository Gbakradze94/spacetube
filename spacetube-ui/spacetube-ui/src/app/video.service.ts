import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from './upload-video/upload-video-response';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) { }

  uploadVideo(fileEntry: File): Observable<UploadVideoResponse> {

    const formData = new FormData();
    formData.append('file', fileEntry , fileEntry.name);
    console.log(formData);

     return this.httpClient.post<UploadVideoResponse>("http://localhost:8080/api/videos/", formData);
  }
}
