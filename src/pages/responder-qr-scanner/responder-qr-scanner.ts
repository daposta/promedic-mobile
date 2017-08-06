import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Printer, PrintOptions } from '@ionic-native/printer';
/**
 * Generated class for the ResponderQrScanner page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-responder-qr-scanner',
  templateUrl: 'responder-qr-scanner.html',
})
export class ResponderQrScanner {

  profile : any = {};
  error : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public qrCodeScanner: BarcodeScanner,
    private printer: Printer) {
  	
    
    this.qrCodeScanner.scan(
    {
        formats: "QR_CODE",
        "prompt": "Place QR code inside the scan area", 
        // showFlipCameraButton: true,   
        // preferFrontCamera: false,     
         showTorchButton: true,        
        // torchOn: false,               
        // resultDisplayDuration: 2500
    }
    ).then((result) => {
    
      this.profile = result.text;// result.text// ;
     
  	}, err => {
       alert("Scanning failed: " + err);
  		this.error = err;
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponderQrScanner');
  }

  sendQRData(){

  }

  printQRDAta(){
      this.printer.isAvailable().then(success =>{

          let options: PrintOptions = {
             name: 'QR Code Profile',
             duplex: true,
             landscape: true,
         };

         let content = '<p>First Name: ' + this.profile.first_name  + '</p>' + 
           '<p>Last Name: ' + this.profile.last_name  + '</p>' + 
           '<p>Middle Name: ' + this.profile.middle_name  + '</p>' +
           '<p>Gender: ' + this.profile.gender.name  + '</p>' +
           '<p>Blood Group: ' + this.profile.blood_group.name  + '</p>';

        this.printer.print(content, options).then(success=>{

        }, error => {
            alert(error);
        });

        }
        , err=>{
            alert(err);
        });
      

  }



}
