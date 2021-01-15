import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ModalService } from 'src/app/_services/modal.services';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form2: FormGroup;
  submitted = false;
  private bodyText: string;

  public mainImage ="assets/img/coat.jpg";

  public image1 = "assets/img/coat.jpg";
  public image2 = "assets/img/coat1.jpg";
  public image3 = "assets/img/coat3.jpg"
  constructor(public fb: FormBuilder, private modalService: ModalService) { this.form2 = this.fb.group({
    color: ['', Validators.required],
   qty: ['', Validators.required],
    size: ['', Validators.required],
   }); }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }
change(image:any){

  this.mainImage = image;
  this.mainImage.replace('src','image');

  console.log(this.mainImage);

}
addcart()
{
  this.submitted = true;

    // stop here if form is invalid
    if (this.form2.invalid) {

        return;
    }
   //this.loading = true;

                console.log(this.form2.value);



}

openModal(id: string) {
  this.modalService.open(id);

}

closeModal(id: string) {
  this.modalService.close(id);
}



}
