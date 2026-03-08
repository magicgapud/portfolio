export default class workExperience {
    constructor({id, company, companyLocation, date, role, image, roleActivities}){
        this.id = id,
        this.company = company,
        this.companyLocation = companyLocation,
        this.date = date,
        this. role = role,
        this.image = image,
        this.roleActivities = roleActivities

    };


    getRoleActivities(){
        return Object.values(this.roleActivities).map(
            a => `<li>${a}</li>`
        ).join("")
    };


    render(index){
        const sideClass = index % 2 === 0? "left":"right";
        
        return `
            <div class="container ${sideClass}-container">
              <img src="./resources/images/profile.jpg" alt="">
              <div class="text-box">
                <h2>${this.company}</h2>
                <h5>${this.companyLocation}</h5>
                <small>${this.date}}</small>
                ${this.getRoleActivities()}
                <span class="${sideClass}-container-arrow"></span>
              </div>
            </div>
        `
    }


}