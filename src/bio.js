import React,{Component} from 'react';
import Card from './card'

class Bio extends Component{
  state = {
    members:[
      {
        name: "Kim" ,birth: [1975,0,1], isFlipped: false, canFlip: true, poker: true, rgb: [255,255,255], src: "https://pakhanfoto.com/wp-content/uploads/2018/02/09-8927-post/L1005923-F-BW-M.jpg",
        stats:[
          {HEALTH: 42},
          {PATIENCE: 23},
          {SKILL: 98},
          {ARCANA: 12},
          {LUCK: 78},
          {DEFENSE: 60},
        ],
        story: `  Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`
      },
      {
        name: "Donald" ,birth: [1983,8,25], isFlipped: false, canFlip: true, poker: true, rgb: [149,0,255], src: "https://i.pinimg.com/originals/87/bf/ea/87bfeaddc6817307ed2420c92dbe5cf0.png",
        stats:[
          {HEALTH: 62},
          {CHARISMA: 84},
          {POWER: 49},
          {SPEED: 78},
          {THICKNESS: 2},
          {STEALTH: 60},
        ],
        story: `  Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.

              The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.`
      },
    ],
  }
  getAge = (d1, d2) =>{
      d2 = d2 || new Date();
      var diff = d2.getTime() - d1.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }
  render(){
    return(
        <div className="flex-bio">
              {
                this.state.members.map((member)=>{
                  var age = this.getAge( new Date(member.birth[0],member.birth[1],member.birth[2]))
                  return <div key={member.name} className="member">
                    <Card name={member.name} lvl={"lvl."+ age} poker={member.poker} canFlip={member.canFlip} isFlipped={member.isFlipped} pic={member.src}/>
                    <div className="stats">
                      {
                        member.stats.map((stat,index)=>{
                          /*return <Progress color={this.state.colors[index]} power={stat[Object.keys(stat)[0]]} stat={Object.keys(stat)[0]}/>*/
                          return <Progress key={index} color={'rgba('+member.rgb[0]+','+member.rgb[1]+','+member.rgb[2]+','+(1-.15*index)+')'} power={stat[Object.keys(stat)[0]]} stat={Object.keys(stat)[0]}/>
                        })
                      }
                      <p>{member.story}</p>
                    </div>
                  </div>
                })
              }
      </div>
    );
  }
}

function Progress(props){
  return(
    <div className="progress">
      <div role="progressbar" style={{ backgroundColor : props.color, width : props.power+"%", color: "white", textShadow: ".1rem .1rem #000"}} aria-valuenow={ "" + props.power} aria-valuemin="0" aria-valuemax="100">{props.stat}</div>
    </div>
  );
}
export default Bio;
