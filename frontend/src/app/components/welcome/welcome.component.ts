import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   name: string = '';
  domain: string = '';

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getTestData().subscribe({
      next: (data) => {
        this.name = data.name;
        this.domain = data.domain;
      },
      error: (error) => {
        console.error('API error:', error);
      }
    });
  }
}
