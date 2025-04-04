import JobCard from '@/components/JobCard';
import React from 'react'

const Job = () => {
    const jobs = [
        {
            id: 1,
            title: "Freelance Graphic Designer",
            location: "Remote",
            company: "GOOGLE",
            category: "Design",
            description: "Looking for a creative graphic designer to design social media posts and marketing materials."
        },
        {
            id: 2,
            title: "Part-Time Delivery Driver",
            company: "SWIFT",
            location: "New York, NY",
            category: "Logistics",
            description: "We need a reliable driver to deliver packages within the city. Flexible hours available."
        },
        {
            id: 3,
            title: "Content Writer",
            company: "AMAZON",
            location: "Los Angeles, CA",
            category: "Writing",
            description: "Seeking an experienced content writer to write blog posts and website content. Remote work available."
        },
        {
            id: 4,
            title: "Software Engineer",
            company: "MICROSOFT",
            location: "Seattle, WA",
            category: "Engineering",
            description: "Hiring a software engineer with experience in full-stack development. Remote options available."
        },
        {
            id: 5,
            title: "Digital Marketing Specialist",
            company: "FACEBOOK",
            location: "San Francisco, CA",
            category: "Marketing",
            description: "Seeking a marketing expert to develop and execute digital campaigns for social media and web platforms."
        },
        {
            id: 6,
            title: "Customer Support Representative",
            company: "NETFLIX",
            location: "Remote",
            category: "Customer Service",
            description: "Looking for a customer service rep to assist customers with streaming issues and account inquiries."
        },
        {
            id: 7,
            title: "UX/UI Designer",
            company: "APPLE",
            location: "Cupertino, CA",
            category: "Design",
            description: "Join our design team to create intuitive user experiences for mobile and web applications."
        },
        {
            id: 8,
            title: "Project Manager",
            company: "TESLA",
            location: "Austin, TX",
            category: "Management",
            description: "Seeking a project manager to oversee the development and execution of company-wide initiatives."
        },
        {
            id: 9,
            title: "Data Analyst",
            company: "IBM",
            location: "Boston, MA",
            category: "Analytics",
            description: "Hiring a data analyst to interpret complex datasets and provide business insights."
        },
        {
            id: 10,
            title: "Cybersecurity Specialist",
            company: "CISCO",
            location: "Remote",
            category: "IT Security",
            description: "Looking for an expert in cybersecurity to enhance our security protocols and prevent cyber threats."
        },
        {
            id: 11,
            title: "Video Editor",
            company: "YOUTUBE",
            location: "Los Angeles, CA",
            category: "Media",
            description: "We need a talented video editor to create high-quality content for our digital channels."
        },
        {
            id: 12,
            title: "Sales Representative",
            company: "SALESFORCE",
            location: "Chicago, IL",
            category: "Sales",
            description: "Hiring a sales rep to expand our client base and manage business relationships."
        }
    ];

    return (
        <div className='mt-10'>
            <div className='text-center text-8xl mt-20 font-serif font-extrabold'>Looking for Jobs...</div>
            <div className="flex flex-wrap mt-10 justify-center gap-6 p-6">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    )
}

export default Job