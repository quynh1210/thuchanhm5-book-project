import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  book: Book = {};

  constructor(private _bookService: BookService,
              private _router: Router) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this._bookService.getBooks().subscribe(data => {
        this.books = data;
        console.table(this.books)
      },
      error => {
        console.log(error);
      });
  }

}
