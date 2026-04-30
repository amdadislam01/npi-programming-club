"use client";

import React from "react";
import { Calendar as CalendarIcon, MapPin, Clock, Filter, Search, Plus, ExternalLink } from "lucide-react";

const events = [
  { id: 1, title: "Web Dev Workshop 2026", date: "May 15, 2026", time: "10:00 AM", location: "Auditorium", type: "Workshop" },
  { id: 2, title: "Python for Beginners", date: "May 20, 2026", time: "02:00 PM", location: "Lab 3", type: "Training" },
  { id: 3, title: "Club Networking Night", date: "June 01, 2026", time: "06:00 PM", location: "Roof Top", type: "Social" },
];

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Club Events</h1>
          <p className="text-slate-500">Discover and register for upcoming club activities.</p>
        </div>
        <div className="flex gap-3">
           <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50"><Filter size={20} /></button>
           <button className="bg-secondary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-tertiary transition-all">My Calendar</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="h-40 bg-slate-100 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">{event.type}</span>
               </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{event.title}</h3>
              <div className="space-y-2">
                 <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <CalendarIcon size={14} className="text-secondary" />
                    {event.date}
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <Clock size={14} className="text-secondary" />
                    {event.time}
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <MapPin size={14} className="text-secondary" />
                    {event.location}
                 </div>
              </div>
              <button className="w-full mt-4 py-3 bg-slate-50 hover:bg-primary hover:text-white rounded-xl text-sm font-bold text-primary transition-all flex items-center justify-center gap-2">
                 Register Now <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
