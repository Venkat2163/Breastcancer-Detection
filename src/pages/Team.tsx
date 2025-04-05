import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    email?: string;
    github?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Data Scientist",
    bio: "Ph.D. in Machine Learning with 8 years of experience in healthcare AI. Specializes in developing predictive models for early disease detection.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop",
    social: {
      email: "sarah.johnson@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Michael Chen",
    role: "ML Engineer",
    bio: "Expert in scikit-learn and deep learning frameworks. Focuses on optimizing algorithms for medical image analysis and feature extraction.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop",
    social: {
      email: "michael.chen@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Dr. Olivia Rodriguez",
    role: "Data Analyst",
    bio: "Specializes in statistical analysis and data visualization. Expert in pandas and numpy for processing large medical datasets.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop",
    social: {
      email: "olivia.rodriguez@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Alex Rivera",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in Flask and React. Integrates machine learning models with user-friendly interfaces.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
    social: {
      email: "alex.rivera@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Priya Sharma",
    role: "UX/UI Designer",
    bio: "Creates intuitive user experiences for medical professionals and patients. Focuses on accessibility and clarity in medical interfaces.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    social: {
      email: "priya.sharma@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card className="card-hover overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-primary text-sm mb-2">{member.role}</p>
          <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
          <div className="flex space-x-3">
            {member.social.email && (
              <a href={`mailto:${member.social.email}`} className="text-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            )}
            {member.social.github && (
              <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the dedicated professionals working together to improve breast cancer detection through technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
