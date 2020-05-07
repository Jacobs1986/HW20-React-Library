import axios from "axios";

const key = "AIzaSyDdRSRCb1Zq_xGMTx360hlCthDqbQZnxwg"
const search = title => `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${key}`

export default {
    // Get all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    searchBook: function(title) {
        return axios.get(search(title));
    }
}