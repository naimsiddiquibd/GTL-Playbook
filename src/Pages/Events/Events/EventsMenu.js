import React from "react";
import EventIcon from "../../../Assets/Icons/Events.png";
import { Link } from "react-router-dom";

const EventsMenu = () => {
  return (
    <div className="bg-white rounded-lg shadow-md md:w-auto lg:w-auto xl:w-auto mx-10 my-4 flex justify-between px-8 py-8">
    <div className="flex items-center p-4">
      <div className="bg-gray-200 rounded-full p-3">
      <div className="flex-shrink-0 h-12 w-12"><img src={EventIcon} /></div>
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-bold text-gray-800">Events</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue  a molestie ut vitae.</p>
      </div>
    </div>
    <div className="flex justify-end py-2 px-4">
    <div className='grid grid-cols-2 gap-2'>
    <button className="btn btn-sm mr-2 text-xs text-white btn-success"><Link to='/host-an-event'>Host an Event</Link></button>
    <button className="btn btn-sm mr-2 text-xs text-white btn-success"><Link to='/on-going-event'>Ongoing Event</Link></button>
    <button className="btn btn-sm mr-2 text-xs text-white btn-success"><Link to='/add-itinerary'>Add Itinerary</Link></button>
    <button className="btn btn-sm mr-2 text-xs text-white btn-success"><Link to='/add-organizer'>Add Organizers</Link></button>
    </div>
    </div>
  </div>
  );
};

export default EventsMenu;