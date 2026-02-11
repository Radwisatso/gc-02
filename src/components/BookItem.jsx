import { useParams } from "react-router";

export default function BookItem() {
  const { bookId } = useParams();
  console.log(bookId);

  return <div>Book item ID: {bookId}</div>;
}
