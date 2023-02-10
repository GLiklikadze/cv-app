import "./App.css";
// import HomePage from "./components/Home/Homepage";
import PersonInfo from "./components/PersonInfo/PersonInfo";
import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState(() => {return JSON.parse(sessionStorage.getItem("myKey")) || {
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    experiences: [
      {
        position: "back-end developer",
        employer: "Redberry",
        start_date: "2019/09/09",
        due_date: "2020/09/23",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum.",
      },
    ],
    educations: [
      {
        institute: "თსუ",
        degree: "სტუდენტი",
        due_date: "2017/06/25",
        description:
          "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ.",
      },
    ],
    image: "",
    about_me: "",
  }});

  useEffect(() => {
    sessionStorage.setItem("myKey", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <PersonInfo data={data} setData={setData} />
    </div>
  );
}

export default App;
