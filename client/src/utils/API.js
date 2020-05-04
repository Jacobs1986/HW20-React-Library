import axios from "axios";

export default {
    // Get all books
    getBooks: function() {
        return axios.get("/api/books");
    }
}