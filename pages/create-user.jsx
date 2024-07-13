import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/store';
import { useRouter } from 'next/router';


const CreateUserPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCreateUser = () => {
    const newUser = {
      username: null, // Assuming username is not set here
      firstName,
      lastName,
      dateOfBirth,
      appointmentDate,
      appointmentTime,
    };
    dispatch(setUser(newUser));
    router.push('/about');
  };

  return (
    <div>
      <h1>Create User</h1>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label>Appointment Date</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div>
          <label>Appointment Time</label>
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleCreateUser}>
          Create User
        </button>
      </form>
      <Link href="/">
        Home
      </Link>
    </div>
  );
};

export default CreateUserPage;



