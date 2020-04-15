import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hut-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerData: any = {
    col1: {
      havingAvatar: true,
      title:"KaporHut",
      subTitle:"Developed by \&copy;GullTee",
      content: "Startup is a remote based Software company from Kolkata, India",
      action: [
        "like",
        "share"
      ]
    },
    col2: {
      havingAvatar: false,
      title:"Newsletter",
      subTitle:"Join our email newsletter for news and tips.",
      content: "Follow Us",
      action: [
        "like",
        "share"
      ]
    },
    col3: {
      havingAvatar: false,
      title:"Gallery",
      subTitle:"Developed by &copy;GullTee",
      content: "Demo ANgular APP",
      action: [
        "like",
        "share"
      ]
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
