// import React from 'react'
import React, { useState } from 'react';
import HabitForm from './HabitForm';
import HabitCard from './HabitCard';
import StreakSummary from './StreakSummary';
import ChatPanel from './ChatPanel';
import CompletionChart from './CompletionChart';
import CalendarStreak from './CalendarStreak';
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import { getAllHabits} from "./allApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './swiper.css'
import './Landing.css'


const Landing = () => {

  const [habits, setHabits] = useState([]);       // Support multiple habits
  const [showForm, setShowForm] = useState(false); // Toggle form
    const [selectedHabitId, setSelectedHabitId] = useState(null);


  const handleOpenForm = () => {
    setShowForm(true); // show the form when + is clicked
  };

   useEffect(() => {
      const fetchHabits = async () => {
        try {
          const response = await getAllHabits( {withCredentials: true});
           setHabits(response.data);
          // console.log(response.data);
        } catch (error) {
          console.error('Error fetching habits:', error);
        }
      };
  
      fetchHabits();
    }, []);

      const handleSaveHabit = (newHabit) => {
    setHabits([...habits, newHabit]); // add new habit to the list
    setShowForm(false);               // hide form after saving
  };


    const handleDelete = (id) => {
    setHabits((prev) => prev.filter((habit) => habit._id !== id));
  };

  const handleUpdate = (habit) => {
    console.log('Update habit:', habit);
    // Redirect to edit form or show modal
  };



 const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleClick = (habitId) =>{
        setSelectedHabitId(habitId);
        console.log("Selected Habit for Calendar:", selectedHabitId);
          const dashboardSection = document.getElementById("Dashboard");
  if (dashboardSection) {
    dashboardSection.scrollIntoView({ behavior: "smooth" });
  }



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
                 <li><a href="#Dashboard">Dashboard</a></li>
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

          
          <section id="show-habit">
  <div className="showhabit">
    <h2 className='show-header'>Your Habits</h2>
       
<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={10}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  mousewheel={true}
  breakpoints={{
    300: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {habits.map((habit) => (
    <SwiperSlide key={habit._id}>
      <HabitCard habit={habit} onDelete={handleDelete} onUpdate={handleUpdate} onClick={() =>handleClick(habit._id)} />
    </SwiperSlide>
  ))}
</Swiper>

  </div>
</section>





        <section id='About'>
         <div className="about">
          <h2>About</h2>
          <div className="para-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, ut. Facere unde laudantium reiciendis pariatur iste suscipit, voluptatibus ipsum enim debitis recusandae maxime, labore molestiae amet iusto deserunt doloremque at tempora accusamus ad exercitationem delectus deleniti harum dolorum. Suscipit repellendus esse nesciunt minima distinctio voluptates architecto ex ut fugit voluptatum laborum omnis, dolore nam ducimus itaque deserunt, est hic non perspiciatis aperiam eligendi accusantium molestias quod ad? Ipsa minima hic, beatae pariatur rem esse? Mollitia dolores nulla fuga enim quidem repellat quos porro molestiae quas sint ipsum deserunt officiis reiciendis, sequi eius provident qui excepturi maxime debitis quia, quo et iusto numquam? Iusto pariatur quas, et consequuntur error in tempore eveniet dolores at? Omnis esse facilis dicta rerum voluptatibus optio, voluptate officiis dolor, consequatur exercitationem, vitae porro pariatur distinctio aspernatur nam ut animi tenetur libero harum odio nulla accusamus? Hic, aut fuga. Beatae rem odio eos enim quia, autem, totam, deserunt tenetur dolor eaque ad tempore. Dolorem vero nihil, beatae similique omnis dicta voluptatibus hic, aperiam, quidem saepe reiciendis sunt libero nam aliquid delectus numquam est natus assumenda molestias ipsa illum modi. Vitae placeat, quia culpa laborum, amet temporibus quas quis enim asperiores consequatur dolorem distinctio neque reiciendis officia. Eveniet?
              
            </p>
          </div>
         </div>
        </section>



        <section id='Dashboard'>
          <h2>Dashboard</h2>
              <div className="app">
      <aside className="sidebar">
        <StreakSummary completed={64} missed={36} />
        
        <div className="calendar">
  {/* {habits.map((habit) => (
    <div key={habit._id}>
      <h4>{habit.name}</h4>
      <CalendarStreak habitId={habit._id} />
    </div>
  ))} */}
          
          {selectedHabitId ? (
            
              <>
    <h4>
      {habits.find((habit) => habit._id === selectedHabitId)?. name || "Habit"}
    </h4>
    <CalendarStreak habitId={selectedHabitId} />
  </>

            
          
        ) : (
          <p>Please click a habit card to view its calendar streak.</p>
        )}
</div>
      </aside>
            

           
              

      {/* <main className="main">
        <CompletionChart />
      </main> */}
      {/* <aside className="chat">
        <ChatPanel />
      </aside> */}
    </div>
        </section>

        
     

         
  </div>

      
</div>
  );
};


export default Landing