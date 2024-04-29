class TeamMember {
    name: string;
    position: string;
  
    constructor(name: string, position: string) {
      this.name = name;
      this.position = position;
    }
  
    createHTML(): string {
      return `<li>${this.name} - ${this.position}</li>`;
    }
  }
  
  function populateTeamMembers() {
    const teamMembers: TeamMember[] = [
      new TeamMember("XXX", "CEO"),
      new TeamMember("YYY", "COO"),
      new TeamMember("ZZZ", "CTO"),
    ];
    
  
    const teamList: HTMLUListElement | null = document.querySelector("#team-members");
    if (teamList) {
      teamMembers.forEach(member => {
        const listItem = document.createElement('li');
        listItem.innerHTML = member.createHTML();
        teamList.appendChild(listItem);
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    populateTeamMembers();
  });
  