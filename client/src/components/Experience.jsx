import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="section">
    <div className="container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2015"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">B.S. in Mechanical Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Master of Business Administration</h3>
          <h4 className="vertical-timeline-element-subtitle">Tennessee Technological University</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2016 - 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Mechanical Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Nissan North America</h4>
          <p>
            Job Description and responsibilities.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - 2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">A.S. in Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">Hack Reactor</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
      {/* <h2 className="title">Experience</h2>
      <p className="experience-paragraph">
        Previously, I worked as a mechanical engineer for over 8 years where I developed my problem-solving skills, as well as my leadership and communication abilities. I have lead multi-national and cross-functional teams during my previous career, as well as being an individual contributor.
        I am excited to bring my unique perspective to a team of talented developers.
      </p> */}
    </div>
  </section>
  );
}