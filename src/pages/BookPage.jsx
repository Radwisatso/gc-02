import { Outlet } from "react-router";

export default function BookPage() {
  return (
    <div>
      <h1>Book Page</h1>
      <Outlet />
    </div>
  );
}
