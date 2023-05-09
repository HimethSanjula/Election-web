import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";

@Component({
  selector: 'app-fingerprint-scan-sc',
  templateUrl: './fingerprint-scan-sc.component.html',
  styleUrls: ['./fingerprint-scan-sc.component.css']
})
export class FingerprintScanScComponent {

  ngOnInit(): void {  }

  userLogin(){
    this.router.navigate([`user-login`]);
  }

  constructor(private router:Router) {
  }

  options:AnimationOptions = {
    path:"/assets/animation/success.json",
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
