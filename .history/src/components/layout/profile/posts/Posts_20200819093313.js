import React, { useState } from "react";
import NavPosts from "../postnav/NavPosts";
import "./Posts.css";
export const Posts = () => {
  const [testimonials] = useState([
    {
      name: "Godwin P edzisai Dzvapatsva (Head of Curriculum and Learning)",
      testimonial:
        "Asaph has an analytical and rational mind when it comes to programming challenges. He would raise questions and discussions whenever in doubt. I recommend him.",
    },
    {
      name: "Thapelo Tsotetsi (Lecturer at life choices)",
      testimonial:
        "Asaph Franks is a Life Choices Academy students for 2020. One thing you should know about Asaph is his ability to learn new programming languages and great interpersonal skills. Asaph has great problem solving skills and likes to try things on his own first.",
    },
    {
      name: "Jason Wandrag (Lecturer at Life Choices Academy)",
      testimonial:
        "Asaph consistently brings creativity and quality to his work, and has really shown to have an affinity for front end development. He is also an attentive and considerate friend among his peers, and never fails to bring a laugh to the conversation.",
    },
    {
      name: "Anele Sokwane",
      testimonial:
        "Asaph is a really fun and amazing person who has great conversational skills. He's very dedicated to his work and will always put his maximum effort into everything he does.",
    },
    {
      name: "Kayleen Watkins",
      testimonial:
        "Asaph is a positive and friendly person that is always willing to help others no questions asked. He has spent nights working on his coding. I recommend that Asaph be chosen.",
    },
    {
      name: "Ryan Michael Barron",
      testimonial:
        "Asaph Frank's a hard working and dedicated individual, someone who believes that personal gain shouldn't over shadow the greater goal. His ability to generate positivity out of any situation makes him an asset both in the workplace and social settings. His passion for the work he does can be seen in all he creates as he puts a piece of himself in everything he does. In conclusion Asaph Franks would be a great addition to any team or as a solo act.",
    },
    {
      name: "Aden Fancensie",
      testimonial:
        "I consider Asaph to be a really positive person, always looking for the good in every situation. He's really helpful, he's literally always willing to help out where he can. He's a great team player, He's not the type of person to shy away from work and/or any kind of responsibility. He's a bit of a people's person and is able to get along with everybody. He shows great leadership skills and is always doing extra work, hardly complains and working with him would be a privilege to any person or company as he'd serve as an asset to them.",
    },
  ]);
  return (
    <div className="container">
      <NavPosts />
      <div className="bg-color">
        {/* <img src={background2} className="bg" alt="bg" /> */}
      </div>
      <h1 className="testimonial_title">Posts</h1>
      {testimonials.map((testimonials, idx) => (
        <div key={idx}>
          <div class="row decrease_container_size">
            <div class="col s12  ">
              {" "}
              <div class="card-panel white">
                <h5 class="black-text move_the_name">{testimonials.name}</h5>
                <span class="black-text enlarge_paragraph">
                  {testimonials.testimonial}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
