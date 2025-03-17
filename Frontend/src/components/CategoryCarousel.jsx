import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "@/components/ui/button";

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
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className=" lg:basis-1/3 md:basis-1/3 sm:basis-1/3 basis-1/2">
              <Button  variant="outline" className="rounded-full">{cat}</Button>
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
