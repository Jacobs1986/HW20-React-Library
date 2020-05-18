import axios from "axios";

const key = "AIzaSyDdRSRCb1Zq_xGMTx360hlCthDqbQZnxwg"
const search = topic => `https://www.googleapis.com/books/v1/volumes?q=${topic}&key=${key}`

export default {
    // Get all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    searchBook: function(title) {
        return axios.get(search(title));
    },
    saveBook: function(bookData) {
        return axios.post("/api/books/create", bookData);
    },
    deleteBook: function(bookId) {
        return axios.delete("/api/books/:id", bookId)
    }
}