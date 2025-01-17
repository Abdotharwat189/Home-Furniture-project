import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  //  @ViewChild("test") elemnet!:ElementRef
  //  display(){

  //   this.elemnet.nativeElement.classList.remove("d-none")
  //   this.elemnet.nativeElement.classList.add("d-flex")
  //   console.log(this.elemnet.nativeElement);
    
    
  //  }

  @ViewChild('test') modal!:ElementRef;
  @ViewChild('hamada') hamada1!:ElementRef;
  openModal(data:string){

this.hamada1.nativeElement.src=data;
this.modal.nativeElement.style.display = 'block';
    this.modal.nativeElement.classList.add('show');
  }
  closeModal() {
    // Remove the 'show' class to hide the modal
    this.modal.nativeElement.style.display = 'none';
    this.modal.nativeElement.classList.remove('show');
  }

}



  
