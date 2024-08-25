"use client";

import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/slice";

export default function Page() {
  const [name, setName] = useState("");
  const userComplete = useSelector((data) => data.users);
  // console.log(userComplete[2].name);
  const dispatch = useDispatch();
  const addingFunction = () => {
    dispatch(addUser(name));
  };

  // const removingFunction = () => {
  //   dispatch(removeUser(id))
  // }
  return (
    <div>
      <p>
        <Link href={`/`} className="text-white mt-10">
          ← Go back to home Page
        </Link>
      </p>
      <div className="flex flex-col items-center text-center">
        <section className="m-20 max-w-4xl border-orange-600 border-solid">
          <h1 className="underline text-2xl font-bold text-cyan-300">
            This is User Todo Page you will find complete List
          </h1>
          <div className="max-w-lg">
            <p className="text-cyan-400 font-bold ">
              Here you just need to write the name of{" "}
              <span className="text-fuchsia-500">
                the user you you want to{" "}
              </span>
              add and Hit the Enter Button
            </p>
          </div>
          <div className="mt-20">
            <input
              type="text"
              className="focus:border-none hover:bg-rose-800 border-none px-2 bg-rose-600 text-white placeholder:text-white/70 rounded"
              placeholder="Enter Person name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <button
              onClick={addingFunction}
              className="bg-cyan-400 hover:bg-cyan-600 w-52 p-1 mt-2 rounded hover:scale-105"
            >
              Add User
            </button>
          </div>
        </section>
        <section>
          <h2 className="font-semibold text-white text-4xl ">User List</h2>
          <br></br>
          <div className="w-[250px] px-3 scrollbar h-[150px]">
            {userComplete.map((item) => (
              <div className="flex flex-row justify-around">
                <div
                  className="uppercase text-left w-80 rounded-sm hover:scale-105 text-fuchsia-500 pt-1"
                  key={item.id}
                >
                  → {item.name}
                </div>
                <div className="hover:scale-105 pt-1">
                  <button
                    onClick={() => {
                      dispatch(removeUser(item.id));
                    }}
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
