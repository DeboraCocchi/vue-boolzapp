/*bonus inseriti:
- (milestone5): possibilità di cancellare il msg;
- verifica che il messaggio da inviare contenga 1+ caratteri (no msg vuoti);
- ricezione msg random dal bot;
- scroll-y-proximity per visualizzare sempre l'ultimo msg della conversazione
- differenziazione stringa ultimo accesso a seconda del tempo trascorso
*/

const DateTime=luxon.DateTime;
const Interval = luxon.Interval;
let now;
function getTime(){
  now = DateTime.now();
  return now;
}

const {createApp} = Vue;

const app = createApp ({
  data(){
    return{
      contacts:[
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          lastAccess : `${DateTime.now().setLocale('it').toRelativeCalendar()} alle `,
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
      myMessage: '',
      search:'',
    }
  },
  methods:{
    //funzione per visuallizzare una sola conversazione alla volta
    activeChat(index){
      this.isActive=this.contacts[index];
      this.contacts.forEach(contact => {
        contact.visible = false; });
      this.contacts[index].visible = true;
    },
    //funzione per creare il messaggio da inviare
    createNewMsg(){
      //stringa 
      if(this.myMessage.length<1)return;
      getTime();
      const newMessage = {
          date:now.toFormat("dd'/'MM'/'yyyy"),
          hour: now.toFormat('T'),
          message:this.myMessage,
          status:'sent',
          msgToggle:false
      }
      this.autoReply();
      this.isActive.messages.push(newMessage);
      this.myMessage='';
    },
    //funzione per la risposta automatica: f() di tipo setTimeout che sceglie una risposta random nell'array dedicato
    autoReply(){
      const reply  = setTimeout( () => {
        const rdmN = Math.floor(Math.random()*4);
        getTime();
        const newMessage = {
          date:now.toFormat("dd'/'MM'/'yyyy"),
          hour: now.toFormat('T'),
          message:this.replies[rdmN],
          status:'received',
          msgToggle:false
        };
        this.isActive.messages.push(newMessage);
        this.myMessage='';        
      }, 1000 )
    },
    //funzione per visualizzare le opzioni del messaggio - toggle
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
    getLastAccessTime(contact, index){
        return actualLastAccessTime = this.contacts[index].messages[contact.messages.length-1].hour;
    },
    getLastAccessDate(contact, index){
      const actualLastAccessDate = this.contacts[index].messages[contact.messages.length-1].date;
      //creo un array splittando i dati della data dell'ultimo msg
      let newDate = this.contacts[index].messages[contact.messages.length-1].date.split("/");
      //trasformo i dati per darli in pasto al metodo di luxon
      const dateToCheckInterval = DateTime.local(parseInt(newDate[2]),parseInt(newDate[1]),parseInt(newDate[0]));
      //richiamo getTime
      getTime();
      //verifico l'intervallo trascorso
      const daysPassed = Interval.fromDateTimes(dateToCheckInterval, now);

      //ritorno: a seconda dei giorni passati, cambia la stringa restituita
      if(daysPassed.length('days')<1){
        return `oggi`}
      else if(daysPassed.length('days')<2){
        return `ieri`}
      else if(daysPassed.length('days')<5){
        let roundedDays = Math.floor(daysPassed.length('days'))
        return `${roundedDays} giorni fa`}
      else{return `il giorno ${actualLastAccessDate}`}
    },
  mounted(){
    this.isActive=this.contacts[0];
  }
}}).mount('#app');

//di default, la prima chat attiva sarà la 0 dell'array
app.isActive = app.contacts[0];