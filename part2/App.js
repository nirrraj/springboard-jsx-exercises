function App() {
  return (
    <div>
      <Tweet
        name="Niraj Singh"
        username="nirrraj"
        date={new Date().toDateString()}
        message="Watch out Elon - this is the new Twitter!"
      />
      <Tweet
        name="Bilbo Baggins"
        username="ogringbearer"
        date={new Date().toDateString()}
        message="Love this app! By the way, has anyone seen a golden ring lying around by chance? Asking for a friend."
      />
      <Tweet
        name="Harry Potter"
        username="theboywholived"
        date={new Date().toDateString()}
        message="Building my following... follow me and I'll follow back right away -- faster than a golden snitch!"
      />
    </div>
  );
}
