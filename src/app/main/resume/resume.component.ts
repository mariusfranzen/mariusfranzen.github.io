import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import Experience from 'src/interfaces/Experience';
import Information from 'src/interfaces/Information';
import Skill from 'src/interfaces/Skill';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  experiences: Experience[] = [
    {
      title: 'Swamp Management',
      date: [DateTime.utc(1623, 11, 15).toJSDate()],
      description: [
        'Successfully maintained and developed my swamp into a comfortable and eco-friendly habitat for various creatures.',
        'Expertise in dealing with unwelcome visitors, including knights, fairytale creatures, and overly enthusiastic donkeys.',
      ],
    },
    {
      title: 'Environmental Activism',
      date: [DateTime.utc(1635, 11, 8).toJSDate()],
      description: [
        'Engaged in various environmental activism initiatives, promoting the preservation and conservation of natural habitats.',
        'Organized community events and educational campaigns to raise awareness about the importance of sustainable living.',
        "Successfully led efforts to restore and protect endangered species' habitats, contributing to biodiversity conservation.",
      ],
    },
    {
      title: 'Ogre Relations',
      date: [DateTime.utc(1623, 3, 1).toJSDate()],
      description: [
        'Actively engaged in fostering positive relationships with ogres and promoting a sense of community among my fellow ogres.',
        'Provided guidance and counseling to younger ogres on how to embrace their true selves and overcome societal stereotypes.',
      ],
    },
    {
      title: 'Heroic Adventures',
      date: [
        DateTime.utc(1650, 4, 1).toJSDate(),
        DateTime.utc(1650, 4, 1).toJSDate(),
      ],
      description: [
        "Led a successful mission to rescue Princess Fiona from the highest tower of the Dragon's Keep.",
        'Collaborated with a talking donkey to navigate dangerous terrains and defeat notorious villains.',
      ],
    },
    {
      title: 'Fairy Tale Diplomacy',
      date: [DateTime.utc(1650, 4, 1).toJSDate()],
      description: [
        'Served as an ambassador between the fairy tale creatures and the human world, promoting understanding and peaceful coexistence.',
        'Mediated disputes and conflicts between various fairy tale characters with different personalities and backgrounds.',
      ],
    },
    {
      title: 'Leadership in Far Far Away',
      date: [
        DateTime.utc(1652, 3, 1).toJSDate(),
        DateTime.utc(1652, 5, 9).toJSDate(),
      ],
      description: [
        "Temporarily assumed the role of King of Far Far Away in order to maintain peace and order during King Harold's absence.",
        'Successfully managed the kingdom, making fair and just decisions for both the human and fairy tale communities.',
        'Implemented policies to promote inclusivity and equality, ensuring that all individuals, regardless of their background, were treated with respect and dignity.',
      ],
    },
  ];

  skills: Skill[] = [
    { title: 'Ogre-related Activities ', level: 9, description: 'Excellent roaring' },
    { title: 'Fairy Tale Knowledge', level: 9, description: 'Extensive' },
    { title: 'Combat Skills', level: 8, description: 'Natural ability' },
    { title: 'Problem-Solving', level: 8, description: 'Thinking outside the box' },
    { title: 'Communication', level: 7, description: 'Fluent in Ogreish' },
    { title: 'Leadership', level: 7, description: 'Fair leader' },
  ];

  info: Information[] = [
    { description: 'age', info: '42' },
    { description: 'country', info: 'Duloc' },
    { description: 'email', info: 'ogrewithlayers@duloc.com' },
    { description: 'address', info: 'Swamp 1A' },
  ]
}
