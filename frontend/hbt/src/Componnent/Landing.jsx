// import React from 'react'
import React, { useState } from 'react';
import HabitForm from './HabitForm';
import HabitCard from './HabitCard';
import { useNavigate} from 'react-router-dom';






import './Landing.css'


const Landing = () => {

  const [habits, setHabits] = useState([]);       // Support multiple habits
  const [showForm, setShowForm] = useState(false); // Toggle form

  const handleOpenForm = () => {
    setShowForm(true); // show the form when + is clicked
  };

      const handleSaveHabit = (newHabit) => {
    setHabits([...habits, newHabit]); // add new habit to the list
    setShowForm(false);               // hide form after saving
  };



 const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  
  


  return (

  <div>
       

        
  <div className="body">
    <section id='Habit'>
      <div className="container">

         <div className="navbar"> 
                 <h1>logo</h1>

                <ul>

                 <li><a href="#Habit">Habit Page</a></li>
                 <li><a href="#show-habit">Show Habit Page</a></li>
                 <li><a href="#About">About</a></li>
                 <li><a href="Dashboard">Dashboard</a></li>
                </ul>
            </div>
           

           
             <div className="btn">
              
                  <button id='login-btn' onClick={handleLoginClick}>Login</button>
               

           </div>
   
           



    <div className="card">


         <div className="app-container">
      

            {/* Show Add New Habit button always when form is not showing */}
      {!showForm && (
        <div className="add-new-habit" onClick={handleOpenForm}>
          <div className="plus">+</div>
          <h3>Add New Habit</h3>
          <p>Create a new habit to track your progress</p>
        </div>
      )}

      {/* Show the form if adding */}
      {showForm && <HabitForm onSave={handleSaveHabit} />}

    </div>

            
   </div>

  
   </div>
         
        </section>

          {/* Show Habit Cards */}
      
        <section id='show-habit'>
          <div className="showhabit">
      

             {habits.length > 0 && (
        <div className="habit-cards">
          {habits.slice(-2).map((habit, index) => (
            <HabitCard key={index} habit={habit} />
          ))}
        </div>
             )}

          </div>


          
        </section>




        <section id='About'>
         <div className="about">
          <h2>about</h2>
         </div>
        </section>

        
     

         
  </div>

      
</div>
  );
};


export default Landing