import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let storedCount = localStorage.getItem("visitorCount");

    if (storedCount === null) {
      storedCount = "0";
      localStorage.setItem("visitorCount", storedCount);
    }

    setVisitorCount(parseInt(storedCount));

    localStorage.setItem(
      "visitorCount",
      (parseInt(storedCount) + 1).toString()
    );
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <h1>Total Visitors: {visitorCount}</h1>
    </div>
  );
}
