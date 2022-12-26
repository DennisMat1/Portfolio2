import { useState } from "react";

interface Student {
  name: string;
  age: number;
  year: number;
}
const Filtering = () => {
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("name");
  const students: Student[] = [
    { name: "Jan", age: 20, year: 1 },
    { name: "Jacob", age: 21, year: 2 },
    { name: "Joris", age: 22, year: 3 },
    { name: "Piet", age: 21, year: 2 },
    { name: "Mathias", age: 22, year: 3 },
    { name: "Muhammad", age: 20, year: 1 },
    { name: "Perneel", age: 22, year: 3 },
    { name: "Joris", age: 22, year: 3 },
    { name: "Korneel", age: 23, year: 4 },
  ];
  students.sort((a, b) => {
    if (sort === "name") {
      return a.name.localeCompare(b.name);
    } else if (sort === "age") {
      return a.age - b.age;
    } else if (sort === "year") {
      return a.year - b.year;
    }
    return 0;
  });
  return (
    <div>
      <div>
        <label htmlFor="">
          Search:
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {students
            .filter((student) =>
              student.name.toUpperCase().startsWith(searchText.toUpperCase())
            )
            .map((student) => (
              <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.year}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filtering;
