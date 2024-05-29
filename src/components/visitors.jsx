import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState('0');

  useEffect(() => {
    let now = new Date();
    let user = now.getTime() % 1000;
    let currentUser = user.toString();
    let value = localStorage.getItem("myVisitor");
    console.log(value);
    if (value === null)
      {value = currentUser;
      localStorage.setItem("myVisitor", value);}
    else
      localStorage.setItem(
        "myVisitor",
        (parseInt(value) + 1).toString()
      );
    setVisitorCount(value);
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <h1>Total Visitors: {visitorCount}</h1>
    </div>
  );
}
