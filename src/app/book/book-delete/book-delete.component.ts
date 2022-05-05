import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private _bookService: BookService,
              private _router: Router,
              private _activeRouter: ActivatedRoute) {
    this.id = this._activeRouter.snapshot.params['id'];
    this._bookService.getBook(this.id).subscribe(data => {
      this.book = data;
    });
  }

  ngOnInit() {
  }

  deleteBook() {
    this._bookService.deleteBook(this.id).subscribe(data => {
      this._router.navigate(['']);
    })

  }
}
