import axios from "axios";

const key = "AIzaSyDdRSRCb1Zq_xGMTx360hlCthDqbQZnxwg"
const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:the+flame+inauthor:cohen&key=${key}`

export default {
    // Get all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    searchBook: function() {
        return axios.get(url);
    }
}