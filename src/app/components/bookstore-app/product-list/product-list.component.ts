import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.componet.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros:any;
  bookService : BooksService

  constructor( bookService : BooksService) {

    this.bookService = bookService;
   }

  ngOnInit(): void {

    // this.livros = this.bookService.getBook().subscribe((data => {
    //   this.livros =data;
    //   console.log(this.livros);
    // }))

    // Alteraçõe que eu fiz começa aqui
    this.livros = this.bookService.getBook()
    // Alteraçõe que eu fiz termina aqui

  }

}
