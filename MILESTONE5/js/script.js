const {createApp} = Vue;

const app = createApp ({
  data(){
    return{
      contacts:[
        {
          name: 'Michele',
          avatar: '_1',
          contained: false,
          visible: true,
          lastAccess : 'oggi alle 12:00',
          messages:[
            {
              date:'07/11/2022',
              hour: '12:40',
              message:'Ciao Michele come stai?',
              status:'sent',
              msgToggle:false
            },
            {
              date:'07/11/2022',
              hour: '12:41',
              message:'Ti saluta Chiara, è qui con me',
              status:'sent',
              msgToggle:false
            },
            {
              date:'07/11/2022',
              hour: '12:43',
              message:'Ciao, tutto bene. Ricambia',
              status:'received',
              msgToggle:false
            },
          ]
        },
        {
          name: 'Gianluca',
          avatar: '_2',
          visible: false,
          contained: false,
          lastAccess : 'oggi alle 16:00',
          messages:[
            {
              date:'06/11/2022',
              hour: '11:20',
              message:'Ciao tutto bene?',
              status:'received',
              msgToggle:false
            },
            {
              date:'06/11/2022',
              hour: '11:20',
              message:'Hai già finito il progetto in Vuejs?',
              status:'received',
              msgToggle:false
            },
            {
              date:'06/11/2022',
              hour: '11:53',
              message:'Ciao, no non ancora',
              status:'sent',
              msgToggle:false
            }
          ]
        },
        {
          name: 'Alessandro VET',
          avatar: '_3',
          visible: false,
          contained: false,
          lastAccess : 'ieri alle 11:00',
          messages:[
            {
              date:'05/11/2022',
              hour:'15:20',
              message:'Alessandro sei riuscito a visitare Paco?',
              status:'sent',
              msgToggle:false
            },
            {
              date:'05/11/2022',
              hour: '15:30',
              message:'Ciao Sofia, sì l\'ho visitato e ora sta meglio',
              status:'received',
              msgToggle:false
            },
            {
              date:'05/11/2022',
              hour: '15:33',
              message:'Meno male, tra poco passo a prenderlo!',
              status:'sent',
              msgToggle:false
            }
          ]
        },
        {
          name: 'Francesco',
          avatar: '_4',
          visible: false,
          contained: false,
          lastAccess : 'oggi alle 17:00',
          messages:[
            {
              date:'05/11/2022',
              hour: '13:20',
              message:'Ciao Sofia come stai?',
              status:'received',
              msgToggle:false
            },
            {
              date:'05/11/2022',
              hour: '13:23',
              message:'Come sta Paco?',
              status:'received',
              msgToggle:false
            },
            {
              date:'05/11/2022',
              hour: '13:56',
              message:'Ciao, fortunatamente meglio, grazie',
              status:'sent',
              msgToggle:false
            }
          ]
        },
        {
          name: 'Luigi Meccanico',
          avatar: '_5',
          visible: false,
          contained: false,
          lastAccess : 'ieri alle 08:00',
          messages:[
            {
              date:'04/11/2022',
              hour: '16:20',
              message:'Ciao Luigi, la macchina è pronta?',
              status:'sent',
              msgToggle:false
            },
            {
              date:'04/11/2022',
              hour: '17:00',
              message:'Ciao, sì ho finito',
              status:'received',
              msgToggle:false
            }
          ]
        },
        {
          name: 'Serena',
          avatar: '_6',
          visible: false,
          contained: false,
          lastAccess : 'oggi alle 09:18',
          messages:[
            {
              date:'03/11/2022',
              hour: '16:20',
              message:'Ciao, ci troviamo per una bevuta stasera verso le 19?',
              status:'sent',
              msgToggle:false
            },
            {
              date:'03/11/2022',
              hour: '17:45',
              message:'Ciao, sì certo. Ci troviamo allo Zibaldone?',
              status:'received',
              msgToggle:false
            },
            {
              date:'03/11/2022',
              hour: '18:10',
              message:'Perfetto! A tra poco!',
              status:'sent',
              msgToggle:false
            },
          ]
        },
        {
          name: 'Samuele',
          avatar: '_7',
          visible: false,
          contained: false,
          lastAccess : 'domenica alle 20:12',
          messages:[
            {
              date:'03/11/2022',
              hour: '15:40',
              message:'Ciao Samu ci sei per un aperitivo stasera?',
              status:'sent',
              msgToggle:false
            },
            {
              date:'03/11/2022',
              hour: '15:40',
              message:'Siamo io e Serena',
              status:'sent',
              msgToggle:false
            },
            {
              date:'03/11/2022',
              hour: '16:30',
              message:'Non riesco stasera!',
              status:'received',
              msgToggle:false
            },
          ]
        },
        {
          name: 'Lino',
          avatar: '_8',
          visible: false,
          contained: false,
          lastAccess : 'oggi alle 15:46',
          messages:[
            {
              date:'02/11/2022',
              hour: '14:40',
              message:'Ciao Lino',
              status:'sent',
              msgToggle:false
            },
            {
              date:'02/11/2022',
              hour: '14:42',
              message:'Cosa ne dici dell\'esercizio di oggi?',
              status:'sent',
              msgToggle:false
            },
            {
              date:'02/11/2022',
              hour: '14:49',
              message:'Non so da dove iniziare!',
              status:'received',
              msgToggle:false
            },
          ]
        },
      ],
      replies:[
        `Ti chiamo tra un minuto per palarne!`,
        `Ciao!`,
        `Scusa non posso rispondere`,
        `Ok`,
        `A presto!`
      ],
      isActive:'',
      actualDate:'',
      actualTime:'',
      myMessage: '',
      search:'',
    }
  },
  methods:{
    activeChat(index){
      this.isActive=this.contacts[index];
      this.contacts.forEach(contact => {
       contact.visible = false;
      });
      this.contacts[index].visible = true;
    },
    getDate(){
      const myDate = new Date();
      let myHours=myDate.getHours();
      if(myHours<10){myHours = '0'+myHours};
      let myMinutes=myDate.getMinutes();
      if(myMinutes<10){myMinutes = '0'+myMinutes};
      this.actualTime = myHours+':'+myMinutes;
      let myDay=myDate.getDate();
      if(myDay<10){myDay = '0'+myDay};
      let myMonth=myDate.getMonth()
      if(myMonth<10){myMonth='0'+myMonth};
      const myYear = myDate.getFullYear();
      this.actualDate = `${myDay}/${myMonth+1}/${myYear}`; 
    },
    createNewMsg(){
      if(this.myMessage.length<1)return;
      this.getDate();
      const newMessage = {
          date:this.actualDate,
          hour: this.actualTime,
          message:this.myMessage,
          status:'sent',
          msgToggle:false
      }
      this.autoReply();
      this.isActive.messages.push(newMessage);
      this.myMessage='';
    },
    autoReply(){
      const reply  = setTimeout( () => {
        const rdmN=Math.floor(Math.random()*4);
        const newMessage = {
          date:this.actualDate,
          hour: this.actualTime,
          message:this.replies[rdmN],
          status:'received',
          msgToggle:false
        };
        this.isActive.messages.push(newMessage);
        this.myMessage='';        
      }, 1000 )
    },
    toggleClick: function(event){
      this.isActive.messages.forEach( message => message.msgToggle= false);
      const myIndex = event.path[1].getAttribute('custom-attr');
      console.log(this.isActive.messages[myIndex].msgToggle);
      if(this.isActive.messages[myIndex].msgToggle === false){
        this.isActive.messages[myIndex].msgToggle = true;
      }else{
        this.isActive.messages[myIndex].msgToggle = false;
      }
    },
    deleteMsg: function(event){
      event.path[2].classList.add('d-none');
    },
  mounted(){
    console.log(this.contacts[0]);
    this.isActive=this.contacts[0];
  }
}}).mount('#app');


app.isActive = app.contacts[0];