import { book_generator } from "./utils/bookgen";
import { book_structurer } from "./utils/structurer";
import { topicdev } from "./utils/topicdev";

console.log("API server working");

book_generator("write me a book about programming").then(console.log);
// topicdev("The Comprehensive Guide to Programming - Index").then(console.log);