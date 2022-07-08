import { Injectable } from "@angular/core";
import{ HttpClient, HttpHeaders} from "@angular/common/http"
import { Book } from "./model/Book";

@Injectable()

export class BooksService{

    private url ='http://localhost:44382/api/bookstore';
    
    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook() {

        // Alterações que eu fiz comeca aqui 
        const book1 :Book ={
            id: "0",
            name: "Harry Potter",
            price: 10,
            quantity: 20,
            category: "Suspense",
            img: "https://images7.alphacoders.com/506/506800.jpg"
        }

        const book2 :Book ={
            id: "1",
            name: "Minecraft",
            price: 26,
            quantity: 12,
            category: "Infantil",
            img: "https://cienciahoje.org.br/wp-content/uploads/2020/11/C_C-POP_0fe20042_0bb8_4781_82f4_7130f928b021.jpg"
        }

        const book3 :Book ={
            id: "2",
            name: "Homem Aranha",
            price: 47,
            quantity: 53,
            category: "Ação",
            img: "https://wallpaper.dog/large/764610.jpg"
        }

        const book4 :Book ={
            id: "3",
            name: "O incrível Hulk",
            price: 34,
            quantity: 41,
            category: "Ação",
            img: "https://i0.wp.com/www.crossovernerd.com/wp-content/uploads/2020/04/capa-1.jpg?fit=1920%2C1080&ssl=1"
        }

        const bookList: Array<Book> = [book1, book2, book3, book4]

        return bookList
        // Alterações que eu fiz termina aqui


        // return this.http.get(this.url)
    }
}