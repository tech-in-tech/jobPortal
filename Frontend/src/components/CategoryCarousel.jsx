import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "@/components/ui/button";
import { setSearchQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Data Analyst",
  "DevOps Engineer",
  "App Developer",
  "Game Developer",
  "Ethical Hacker"
];

const CategoryCarousel = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
  const searchJobHandle = (query)=>{
      dispatch(setSearchQuery(query));
      navigate("/browse")
    }
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/3 sm:basis-1/3 basis-1/2">
              <Button onClick ={()=>searchJobHandle(cat)} variant="outline" className="rounded-full">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
