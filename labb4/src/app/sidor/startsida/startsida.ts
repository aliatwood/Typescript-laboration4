import { Component, OnInit, signal, computed } from '@angular/core';
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

  courses = signal<Course[]>([]);
  searchText = signal<string>('');
  sortKey = signal<keyof Course>('code');
  sortAsc = signal<boolean>(true);

  filteredCourses = computed(() => {
    const search = this.searchText().toLowerCase();
    const key = this.sortKey();
    const asc = this.sortAsc();

    return [...this.courses()]
      .filter(course =>
        course.code.toLowerCase().includes(search) ||
        course.coursename.toLowerCase().includes(search)
      )
      .sort((a, b) => {
        const valueA = a[key].toLowerCase();
        const valueB = b[key].toLowerCase();
        if (valueA < valueB) return asc ? -1 : 1;
        if (valueA > valueB) return asc ? 1 : -1;
        return 0;
      });
  });

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses.set(data);
    });
  }

  sortBy(key: keyof Course) {
    if (this.sortKey() === key) {
      this.sortAsc.set(!this.sortAsc());
    } else {
      this.sortKey.set(key);
      this.sortAsc.set(true);
    }
  }
}