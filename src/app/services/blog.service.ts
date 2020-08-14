import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public blogs: Blog[] = [
    {
      id: 1,
      title: 'Human Resource Management',
      date: new Date(),
      imgUrl:'https://americancollege.lk/wp-content/uploads/2016/01/im-human-resources-management-1000x500.jpg',
      description:'Find out How would you go about your human resources in a Start-up Company Organizations? Analyse the Key result areas in Human Resources. What are the changing Strategies during the COVID 19 Pandemic regarding about hiring Human Resources?'

    },
    {
      id: 2,
      title: 'Skill Expectations & Business Application',
      date: new Date(),
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvUyCzR65vjUPrHtKIeAdxK43WU-mhb1GbJQ&usqp=CAU',
      description:'Find out my 3 important skills that are important to become a successful professional in the industry. Analysing the benefits of integrated solution Vs Single isolated solutions as a business application. Providing Scale Agile Framework and compare with SCRUM.'

    },
    {
      id: 3,
      title: 'Quality Assurance & Automation Testing',
      date: new Date(),
      imgUrl:'https://image.freepik.com/free-photo/qa-quality-assurance-quality-control-concept_31965-2290.jpg',
      description:'We are Focused on Software Quality Assurance Testing. Providing Testing Solution for the iBC global media Organization. Learning about the Automation testing tools and writing testcase Scripts for the web Objects.By using Eclipse IDE and Test NG framework'

    },
    {
      id: 4,
      title: 'Angular Frontend Development',
      date: new Date(),
      imgUrl:'https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png',
      description:'Focusing on Anguler Client framework Front End Developmnet for Creating the Blogging Websites Which Includes All the Basic Create,Read,Update,Delete Functionalities to handle the blogs'

    },
  ];

  constructor() {}
}
