import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc)
    const filteredItems = users.filter((item) => item.id != id);
    setUsers(filteredItems)

  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <>
      <div className='w-[80%] mx-auto mt-10'>
        <h1 className='text-5xl font-bold text-gray-700 text-center'>Leaderboard</h1>
        <Link to="/create">
          <button className='bg-green-900  text-lg text-white  rounded-md p-2 my-7'>Create +</button>


        </Link>
        <div>
          <table className='w-full'>
            <thead className=' '>
              <tr className='font-bold '>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Action</td>
              </tr>
            </thead><br />
            <tbody>
              {users.map((user, index) => {
                return (
                  <>
                    <tr key={index} className='border-y-black border-x-transparent'>
                      <td>{index+1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td >
                        <button className='bg-blue-500 text-white  rounded-md py-2 px-4'>Edit</button>
                        <button
                          onClick={() => {
                            deleteUser(user.id);
                          }}
                          className='bg-red-600 text-white  rounded-md p-2 ml-2'>Delete</button>
                      </td>
                    </tr>
                    <br />
                  </>
                )

              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="App">
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        />

        <button onClick={createUser}> Create User</button>
        {users.map((user) => {
          return (
            <div>
              {" "}
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                {" "}
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                {" "}
                Delete User
              </button>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
