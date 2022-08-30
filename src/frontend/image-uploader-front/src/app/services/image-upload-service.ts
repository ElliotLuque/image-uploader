import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

enum ImageStatus {
  Upload,
  Loading,
  Uploaded
}

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService{
  constructor(private http:HttpClient) { }

  get imageStatus(): ImageStatus { return this._imageStatus; }
  set imageStatus(value: ImageStatus) { this._imageStatus = value;}

  public imgSta = ImageStatus
  private _imageStatus: ImageStatus = ImageStatus.Upload

  imageURL!: string

  addImage(file: File): Observable<Object> {
    const formData = new FormData();
    formData.append("imageFile", file)

    return this.http.post("http://localhost:8080/api/upload", formData)
  }

}
