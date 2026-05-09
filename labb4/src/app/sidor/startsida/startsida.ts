import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Course } from '../course.model';
import { CourseService } from '../services/course';

@Component({
  selector: 'app-startsida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './startsida.html',
  styleUrl: './startsida.css'
})
export class StartsidaComponent implements OnInit {

  courses: Course[] = [];
  searchText: string = '';
  sortKey: string = '';
  sortAsc: boolean = true;

  constructor(private courseService: CourseService) {}

    ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any[]) => {
        this.courses = data;
    });
    }

    sortBy(key: keyof Course) {
        if (this.sortKey === key) {
        this.sortAsc = !this.sortAsc;
        } else {
        this.sortKey = key;
        this.sortAsc = true;
        }

        this.courses.sort((a, b) => {
        let valueA = a[key].toLowerCase();
        let valueB = b[key].toLowerCase();

        if (valueA < valueB) return this.sortAsc ? -1 : 1;
        if (valueA > valueB) return this.sortAsc ? 1 : -1;
        return 0;
        });
    }

  filteredCourses() {
    return this.courses.filter(course =>
      course.code.toLowerCase().includes(this.searchText.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}