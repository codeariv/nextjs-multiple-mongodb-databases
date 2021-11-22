export default function Home({ users1, users2 }) {
  return (
    <div className="container">
      <div className="left">
        <h1>Users 1 from DB 1</h1>
        {users1.map((user, index) => {
          return (
            <div className="card" key={index}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.mobile}</p>
            </div>
          );
        })}
      </div>

      <div className="right">
        <h1>Users 2 from DB 2</h1>
        {users2.map((user, index) => {
          return (
            <div className="card" key={index}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.mobile}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  let res1 = await fetch("http://localhost:3000/api/users/one", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let users1 = await res1.json();

  let res2 = await fetch("http://localhost:3000/api/users/two", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let users2 = await res2.json();

  return {
    props: { users1, users2 },
  };
}
