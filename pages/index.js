import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';

import { Heading } from '@chakra-ui/react'
import ProjectCard from '@/components/ProjectCard';

import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';


import Hero from '../components/Hero';
import Accordions from '../components/Accordions';

import experienceData from '../data/experience';
import credentialsData from '../data/credentials';
import About from '../components/About';

import { heroData, email, linkedinLink, githubLink } from '@/data';
import projects from '@/data/projects';

export default function Home() {
  useEffect(() => {
    const typed = new Typed("#my-name", {
      strings: [heroData.name],
      typeSpeed: 90,
      showCursor: false,
      startDelay: 150,
      loop: false
    });
    return () => { // acts as a component willUnMount
      typed.destroy();
    }
  }, []);

  return (
    <>
      <Hero />
      <main>
        <div>
          <div className="container">
            <div className="position-relative">
              <div className="photo-container-wrapper position-absolute d-none d-lg-block">
                <div className="photo-container">
                  <img src="images/hero-photo.png" alt="Jeffrey Almanzar" />
                </div>
              </div>
              {/* <!-- Overview --> */}
              <About />
              {/* <!-- Experience --> */}
              <div id="experience" className="section">
                <Heading mb={5}>Experience</Heading>
                <Accordions accordions={experienceData} />
              </div>
              {/* <!-- Credentials --> */}
              <div id="credentials" className="section">
                <Heading mb={5}>Credentials</Heading>
                <Accordions accordions={credentialsData} />
              </div>
              {/* <!-- Projects --> */}
              <div id="projects" className="section">
                <Heading mb={5}>Projects</Heading>
                <div id="projects-skills" className="group">
                  <div className="project-container">
                    {projects.map(project => {
                      const { name, link, description, features, skills } = project;
                      return <ProjectCard title={name} url={link} leadText={description} features={features} skills={skills} />
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside id="contact" className="contact-section section text-center">
        <div className="container">
          <Heading mb={5}>Get in Touch</Heading>
          <a href={`mailto:${email}`} className="btn btn-hover btn-primary contact-cta">Get into
            my inbox</a>
          <div className="mt-4 social-media-container">
            <a className="d-inline-block me-3" target="_blank" href={githubLink}><i
              className="fa-brands fa-github"></i></a>
            <a className="d-inline-block" target="_blank" href={linkedinLink}><i
              className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </aside>
    </>
  )
}
