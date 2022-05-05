import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};

  constructor(private _bookService: BookService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  createBook() {
    this._bookService.addBook(this.book).subscribe(
      (book: Book) => {
        this._router.navigate(['']);
        console.log(book);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
