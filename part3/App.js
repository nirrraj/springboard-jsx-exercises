function App() {
  return (
    <div>
      <Person
        name="Niraj"
        age={32}
        hobbies={["coffee shop hopping", "watching movies", "exploring town"]}
      />
      <Person 
        name="Frodo"
        age={55}
        hobbies={["reading", "wearing rings"]} />
      <Person
        name="Gandalf"
        age={741}
        hobbies={["old toby", "conjuring fireworks"]}
      />
      <Person
        name="Gollum"
        age={500}
        hobbies={["the precious", "raw and wriggling fish", "the precious (again)"]}
      />
    </div>
  );
}
