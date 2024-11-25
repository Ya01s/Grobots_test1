// Team members data
const teamMembers = [
    {
        name: "Aman Katiyar",
        role: "Ex HOD / Mentor",
        bio: "Passionate about robotics and engineering.",
        image: "ForthYear_member/amankatiyar.jpg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Ishan Mishra",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/Ishan.jpg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Anuj Dubey",
        role: "Club Lead",
        bio: "Creating beautiful and intuitive user experiences is my passion.",
        image: "ForthYear_member/anuj.png",
        social: {
            linkedin: "http://www.linkedin.com/in/dmanuj4",
            github: "http://www.github.com/dmanuj4",
            instagram: "http://www.instagram.com/dmanuj4_"
        }
    },
    {
        name: "Himanshu",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/himanshu.jpg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Akshat Srivastava",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/akshatsri.jpg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Sanskar Sahai",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/sanskar.jpg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Unnati Pandey",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/unnati-aiml.jpg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Anshika Patel",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/anshika.jpg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Harshit Srivastava",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/harshit.png",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Abhishek Kumar",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/abhishek.jpeg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Rudra Pratap Singh",
        role: "Club Lead",
        bio: "Exploring the frontiers of artificial intelligence and machine learning.",
        image: "ForthYear_member/rudra.jpg",
        social: {
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    }
];

// Function to generate team member cards
function generateTeamMemberCards() {
    const teamScroll = document.querySelector('#teamMembersContainer');
    if (!teamScroll) {
        console.error('Team members container not found!');
        return;
    }
    
    teamScroll.innerHTML = ''; // Clear existing content

    teamMembers.forEach((member, index) => {
        const memberCard = `
            <div class="team-member" style="animation-delay: ${index * 0.1}s">
                <div class="member-image">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <div class="member-info">
                    <h3>${member.name}</h3>
                    <p class="role">${member.role}</p>
                    <p class="bio">${member.bio}</p>
                    <div class="social-links">
                        <a href="${member.social.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                        <a href="${member.social.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a href="${member.social.instagram}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        `;
        teamScroll.insertAdjacentHTML('beforeend', memberCard);
    });
}

// Generate cards when the document is loaded
document.addEventListener('DOMContentLoaded', generateTeamMemberCards);
