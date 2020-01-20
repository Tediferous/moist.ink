import React,{Component} from 'react';
import Card from './card'
import ted from './ass/img/ted.jpg'

class Bio extends Component{
  state = {
    members:[
      {
        name: "Ted" ,birth: [1996,1,17], isFlipped: true, canFlip: true, poker: true, rgb: [0,255,0], src: ted,
        stats:[
          {HEALTH: 82},
          {POWER: 72},
          {STEALTH: 17},
          {ARCANA: 32},
          {LUCK: 78},
          {REGRETS: 60},
        ],
        story: `    Storm: When this card is in play all other cards on the field lose 3 HP. Ted then gains 3 HP for each card affected. Email: ted@moist.ink`
      },
      {
        name: null ,birth: [], isFlipped: true, canFlip: false, poker: true, rgb: [0,255,255], locked: true, src: null,
        stats: [],
        story: null
      },
      {
        name: null ,birth: [], isFlipped: true, canFlip: false, poker: true, rgb: [255,0,0], locked: true, src: null,
        stats: [],
        story: null
      },
      {
        name: null ,birth: [], isFlipped: true, canFlip: false, poker: true, rgb: [0,0,255], locked: true, src: null,
        stats: [],
        story: null
      },
    ],
  }
  getAgeLvl = (d1, d2) =>{
      d2 = d2 || new Date();
      var diff = d2.getTime() - d1.getTime();
      if (diff){
      return "lvl." + (Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)));
      }else {
        return null
      }
  }
  render(){
    return(
        <div className="flex-bio">
              {
                this.state.members.map((member)=>{
                  var age = this.getAgeLvl( new Date(member.birth[0],member.birth[1]-1,member.birth[2]))
                  var collapse = member.stats.length ? "collapse" : "hidden"
                  return <div key={member.name + member.rgb} className="member">
                    <Card style={{ boxShadow : '0rem 0.2rem rgba('+member.rgb[0]+','+member.rgb[1]+','+member.rgb[2]+',1)'}} name={member.name} lvl={age} poker={member.poker} canFlip={member.canFlip} isFlipped={member.isFlipped} pic={member.src} locked={member.locked}/>
                    <div className={"stats " + collapse}>
                      {
                        member.stats.map((stat,index)=>{
                          /*return <Progress color={this.state.colors[index]} power={stat[Object.keys(stat)[0]]} stat={Object.keys(stat)[0]}/>*/
                          return <Progress key={index} color={'rgba('+member.rgb[0]+','+member.rgb[1]+','+member.rgb[2]+','+(1-.13*index)+')'} power={stat[Object.keys(stat)[0]]} stat={Object.keys(stat)[0]}/>
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
