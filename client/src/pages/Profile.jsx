import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
        <form className="flex flex-col gap-4">
          <img
            className="h-24 w-24 self-center rounded-full object-cover cursor-pointer mt-2"
            src={currentUser.avatar}
            alt="User Image"
          />
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg mt-3"
            id="username"
          />

          <input
            type="E-mail"
            placeholder="e-mail"
            className="border p-3 rounded-lg mt-3"
            id="email"
          />

          <input
            type="Password"
            placeholder="password"
            className="border p-3 rounded-lg mt-3"
            id="password"
          />
          <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
            Update
          </button>
        </form>
        <div className="flex justify-between">
          <span className="text-red-700 cursor-pointer">Delete Account</span>
          <span className="text-red-700 cursor-pointer">Sign Out</span>
        </div>
      </div>
    </>
  );
}

export default Profile