import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>('http://localhost:3000/books');
  }

  getBook(id: number): Observable<Book> {
    return this._http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this._http.post<Book>('http://localhost:3000/books', book);
  }

  editBook(book: Book): Observable<Book> {
    return this._http.put(`http://localhost:3000/books/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this._http.delete(`http://localhost:3000/books/${id}`);
  }
}
