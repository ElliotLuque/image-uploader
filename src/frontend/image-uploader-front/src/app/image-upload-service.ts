import {Injectable, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";

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

  @Input()
  imageFile!: File


  @Input()
  private _imageStatus: ImageStatus = ImageStatus.Upload;
  imgSta = ImageStatus;

  set imageStatus(value: ImageStatus) {
    this._imageStatus = value;
  }
  get imageStatus(): ImageStatus {
    return this._imageStatus;
  }

  sourceImage:string = ''


  selectFile(event: any) {
    this.imageFile = event.target.files[0]
    console.log('filename: ' +  this.imageFile.name)
  }

  selectFileDragDrop(event: any) {
    this.imageFile = event.dataTransfer.files[0]
    console.log('filename: ' +  this.imageFile.name)
  }


  uploadFile() {
    this.imageStatus = ImageStatus.Loading
    if (this.imageFile) {
      const formData = new FormData();
      formData.append("imageFile", this.imageFile)

      const upload$ = this.http.post("http://localhost:8080/api/upload", formData).subscribe(data => {
        this.sourceImage = Object.values(data)[4]
        console.log(this.sourceImage)
        this.imageStatus = ImageStatus.Uploaded
        })
    }

  }
}
